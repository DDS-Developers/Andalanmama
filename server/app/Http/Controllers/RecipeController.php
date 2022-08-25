<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Jaybizzle\LaravelCrawlerDetect\Facades\LaravelCrawlerDetect as Crawler;
use Carbon\Carbon;
use App\Helpers\PdfGenerator;
use Illuminate\Support\Facades\Storage;
use App\User;
use App\Recipe;
use App\Comment;
use App\Tag;

class RecipeController extends ApiController
{
    public function index()
    {
        // Process
        $recipes = Recipe::whereHas('user', function ($q) {
            $q->where('type', 'user');
        })
        ->with('user', 'tags')
        ->published()
        ->paginate();

        // Response
        return response()->json($recipes);
    }

    public function show(Request $request, $id)
    {
        $user = $request->user();

        // Process
        if (is_numeric($id)) {
            $recipe = Recipe::with('ingredient', 'step', 'user')
            ->has('user')
            ->find($id);
        } else {
            $recipe = Recipe::with('ingredient', 'step', 'user')
            ->has('user')
            ->where('slug', $id)
            ->first();
        }

        if (!$recipe) {
            return response()->json(['error' => 'Not Found'], 404);
        }

        // if ($recipe->status != 1 && $recipe->approved != 1) {
        if ($recipe->status != 1) {
            if (!$user) {
                return response()->json(['error' => 'Tidak bisa melihat resep yang belum approved'], 405);
            } else {
                if ($user->id != $recipe->user_id) {
                    return response()->json(['error' => 'Tidak bisa melihat resep yang belum approved'], 405);
                }
            }
        }

        $comment = Comment::with('user')
            ->where('recipe_id', $recipe->id)
            ->orderBy('created_at', 'desc')
            ->take(3)
            ->get();
        
        if ($user) {
            $recipe->commentlist = $comment->map(function ($q) use ($user) {
                if ($q->user_id == $user->id || $user->type == 'admin') {
                    $q->deletable = "yes";
                }

                $q->created_at = $q->created_at->addHours(7);
                $q->updated_at = $q->updated_at->addHours(7);

                $q->load('user');

                return $q;
            });
        } else {
            $recipe->commentlist = $comment;

            $comment->map(function ($q) {
                $q->created_at = $q->created_at->addHours(7);
                $q->updated_at = $q->updated_at->addHours(7);
    
                return $q;
            });
        }

        if ($recipe->status == Recipe::PUBLISHED || $user->id == $recipe->user_id) {
            // Load related
            $recipe->related = $recipe->related();
            if ($request->user()) {
                $user = $request->user();
                $recipe->bookmarked = $recipe->bookmarked($user->id);
                $recipe->liked = $recipe->liked($user->id);
            }

            return response()->json($recipe);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function favourite()
    {
        // Process
        $favourites = Recipe::with('user')
            ->has('user')
            ->withCount('bookmark')
            ->published()
            ->orderBy('bookmark_count', 'desc')
            ->take(8)
            ->get();

        // Response
        return response()->json($favourites);
    }

    public function adminLatest()
    {
        // Process
        $admin = User::where('type', 'admin')->first();
        $recipes = $admin->recipe()->with('user')
            ->published()
            ->orderBy('created_at', 'desc')
            ->take(8)
            ->get();

        // Response
        return response()->json($recipes);
    }

    public function adminRecipe()
    {
        // Process
        $recipes = Recipe::whereHas('user', function ($q) {
            $q->where('type', 'admin');
        })
        ->with('user')
        ->published()
        ->get();

        // Response
        return response()->json($recipes);
    }

    public function search(Request $request)
    {
        if ($request->input('search')) {
            $search = $this->stripHtml($request->input('search'));

            $arraySearch = explode(' ', $search);

            $recipes = Recipe::query(function ($builder) {
                    $builder->has('user');
            })
            // ->where('name', 'LIKE', "%".$search."%")
            ->where(function ($query) use($arraySearch) {
                 for ($i = 0; $i < count($arraySearch); $i++){
                    $query->orWhere('name', 'LIKE',  '%' . $arraySearch[$i] .'%');
                 }
            })
            ->where('status', Recipe::PUBLISHED)
            ->paginate();

            $recipes->load('user');
        } else {
            $recipes = Recipe::with('user')
                ->has('user')
                ->published()
                ->orderBy('created_at', 'desc')
                ->paginate();
        }

        return response()->json($recipes);
    }

    public function filter(Request $request)
    {
        $categories = $request->input('categories');

        if ($request->input('categories')) {

            if (sizeof($categories) == 1) {
                if (is_string($categories[0])) {
                    $tag = Tag::where('slug', $categories[0])->first();
                    if (!$tag) {
                        return response()->json('');
                    }

                    $recipes = Recipe::with('user', 'tags')
                        ->published()
                        ->whereHas('tags', function ($query) use ($tag) {
                            $query->where('tag_id', $tag->id);
                        })
                    ->paginate();
                } elseif (is_int($categories[0])) {
                    $recipes = Recipe::with('user', 'tags')
                        ->published()
                        ->whereHas('tags', function ($query) use ($categories) {
                            $query->where('tag_id', $categories);
                        })
                    ->paginate();
                } else {
                    return response()->json('');
                }
            } elseif (sizeof($categories) > 1) {
                $recipes = Recipe::with('user', 'tags')->published();

                foreach ($categories as $key => $cat) {
                    if ($key == 0) {
                        $recipes->whereHas('tags', function ($query) use ($cat) {
                            $query->where('tag_id', $cat);
                        });
                    } else {
                        $recipes->orWhereHas('tags', function ($query) use ($cat) {
                            $query->where('tag_id', $cat);
                        });
                    }
                }
                
                $recipes = $recipes->paginate(1000);
            } else {
                $recipes = Recipe::with('user')
                    ->published()
                    ->orderBy('created_at', 'desc')
                    ->paginate();
            }
        } else {
            $recipes = Recipe::with('user')
                ->published()
                ->orderBy('created_at', 'desc')
                ->paginate();
        }

        return response()->json($recipes);
    }

    public function shareRecipe(Request $request, $id)
    {
        if (is_numeric($id)) {
            $recipe = Recipe::find($id);
        } else {
            $recipe = Recipe::where('slug', $id)
                ->first();
        }

        if (!$recipe || $recipe->status != Recipe::PUBLISHED) {
            abort(404);
        }

        $recipe->load('ingredient', 'step', 'user', 'tags');

        if (Crawler::isCrawler()) {
            $url = action('RecipeController@shareRecipe', ['id' => $id]);
            return view('share.recipe', compact('recipe', 'url'));
        }

        if ($recipe) {
            $related = $recipe->related();
            return view('recipe', compact('recipe', 'related'));
        }
        
        abort(404);
    }

    public function downloadRecipe(Request $request, $id)
    {
        $recipe = Recipe::findOrFail($id);

        return response()->json($recipe->downloadpdf);
    }

    public function pointsShareRecipe(Request $request)
    {
        //points
        $user = $request->user();

        if ($user) {
            $dailies = $user->logs()->where('event', 'Share Recipe')
                ->whereDate('created_at', '=', Carbon::today()->toDateString())
                ->count();

            if ($dailies < 3) {
                $user->points = $user->points + 1;
                $user->cumulative_points = $user->cumulative_points + 1;

                if ($user->save()) {
                    $user->logs()->create([
                        'event' => 'Share Recipe',
                        'point_get' => 1
                    ]);
                }
            }
        }

        return response()->json([
            'message' => 'update point share berhasil',
            'points' => $user->points
        ]);
    }
}
