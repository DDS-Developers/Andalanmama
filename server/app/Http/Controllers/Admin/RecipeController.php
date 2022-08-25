<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Recipe;
use App\Tag;
use Carbon\Carbon;
use App\Jobs\Recipetopdf;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $recommends = [];
        $highlights = [];
        if ($request->segment(3) == 'admin') {
            $recipes = Recipe::whereHas('user', function ($q) {
                $q->where('type', 'admin');
            })
            ->when($request->has('name'), function ($q) use ($request) {
                $q->where('name', 'LIKE', '%' . $request->input('name') . '%');
            })
            ->where(function ($query) {
                $query->where('highlight', 0)
                    ->Where('recommend', 0);
            })
            ->orderBy('highlight', 'desc')
            ->orderBy('recommend', 'desc')
            ->paginate();

            $highlights = Recipe::where('highlight', 1)->get();
            $recommends = Recipe::whereNotNull('recommend')
                ->where('recommend', '!=', 0)
                ->orderBy('recommend')
                ->get();
        } elseif ($request->segment(3) == 'pending') {
            $recipes = Recipe::whereHas('user', function ($q) {
                $q->where('type', 'user');
            })
            ->when($request->has('name'), function ($q) use ($request) {
                $q->where('name', 'LIKE', '%' . $request->input('name') . '%');
            })
            ->where('approved', 0)
            ->orderBy('created_at', 'desc')
            ->paginate();
        } else {
            $recipes = Recipe::whereHas('user', function ($q) {
                $q->where('type', 'user');
            })
            ->when($request->has('name'), function ($q) use ($request) {
                $q->where('name', 'LIKE', '%' . $request->input('name') . '%');
            })
            ->where('approved', 1)
            ->orderBy('created_at', 'desc')
            ->paginate();
        }

        if ($request->isJson()) {
            return response()->json($recipes);
        }

        return view('admin.recipe.index', compact('recipes', 'highlights', 'recommends'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();
        $tags = Tag::all();
        $list = [1, 2, 3, 4, 5];

        return view('admin.recipe.create', compact('token', 'tags', 'list'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'steps' => 'required',
            'ingredients' => 'required',
            'attachment' => 'required',
            'portion' => 'required',
            'time' => 'required',
            'status' => 'required',
            'taglist' => 'present',
            'highlight' => 'required'
        ]);

        // Given
        $user = Auth::guard('web')->user();
        $data = $request->only('name', 'description', 'attachment', 'portion', 'time', 'status', 'highlight');

        $stepcheck = json_decode($request->input('steps'), true);

        if (count($stepcheck) > 8) {
            return redirect()->back()->withErrors('Langkah tidak boleh lebih dari 8');
        }

        if ($request->input('youtube')) {
            $data['youtube'] = $request->input('youtube');
        }

        if ($request->input('slug')) {
            $data['slug'] = $request->input('slug');
        } else {
            $data['slug'] = str_slug($data['name']) . '-' . Str::random(5);
        }

        if ($request->input('meta_title')) {
            $data['meta_title'] = $request->input('meta_title');
        } else {
            $data['meta_title'] = $data['name'];
        }

        if ($request->input('meta_desc')) {
            $data['meta_desc'] = $request->input('meta_desc');
        } else {
            $data['meta_desc'] = '';
        }

        $data['approved'] = 1;
        $data['approved_at'] = Carbon::now();

        // Transaction
        $create = DB::transaction(function () use ($user, $data, $request) {
            if ($request->input('highlight') == 1) {
                $this->updateHighlight();
            }
            
            if ($request->input('recommend')) {
                $this->updateRecommend($request->input('recommend'));

                $data['recommend'] = $request->input('recommend');
            }

            $recipe = $user->recipe()->create($data);

            $recipe->createIngredient(json_decode($request->get('ingredients'), true));
            $recipe->tags()->sync($request->input('taglist'));

            $temp = json_decode($request->input('steps'), true);
            $steps = array();

            foreach ($temp as $key => $value) {
                $value['step'] = $key + 1;
                array_push($steps, $value);
            }

            $recipe->createStep($steps);
        
            return $recipe;
        });

        if ($create) {
            Recipetopdf::dispatch($create);
            return redirect()->back()->with('message', 'Simpan data berhasil');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Recipe $recipe)
    {
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();
        $tags = $recipe->tags()->get();
        $recipe->load('ingredient', 'step');

        return view('admin.recipe.show', compact('token', 'recipe', 'tags'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Recipe $recipe)
    {
        $recipe = $recipe->makeVisible(['highlight', 'recommend']);
        $recipe->load('ingredient', 'step');

        $taglist = $recipe->tags()->allRelatedIds();
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();
        $tags = Tag::all();
        $list = [1, 2, 3, 4, 5];

        return view('admin.recipe.edit', compact('recipe', 'token', 'tags', 'taglist', 'list'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Recipe $recipe)
    {
        // Validate
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'steps' => 'required',
            'ingredients' => 'required',
            'attachment' => 'required',
            'portion' => 'required',
            'time' => 'required',
            'status' => 'required',
            'taglist' => 'present',
            'highlight' => 'required'
        ]);

        // Given
        $data = $request->only('name', 'description', 'attachment', 'portion', 'time', 'status', 'highlight');

        $stepcheck = json_decode($request->input('steps'), true);

        if (count($stepcheck) > 8) {
            return redirect()->back()->withErrors('Langkah tidak boleh lebih dari 8');
        }

        if ($request->input('youtube')) {
            $data['youtube'] = $request->input('youtube');
        }

        if ($request->input('slug')) {
            $data['slug'] = $request->input('slug');
        } else {
            $data['slug'] = str_slug($data['name']) . '-' . Str::random(5);
        }

        if ($request->input('meta_title')) {
            $data['meta_title'] = $request->input('meta_title');
        } else {
            $data['meta_title'] = $data['name'];
        }

        if ($request->input('meta_desc')) {
            $data['meta_desc'] = $request->input('meta_desc');
        } else {
            $data['meta_desc'] = '';
        }

        // Transaction
        $update = DB::transaction(function () use ($recipe, $data, $request) {
            if ($request->input('highlight') == 1) {
                $this->updateHighlight();
            }
            
            if ($request->input('recommend')) {
                $this->updateRecommend($request->input('recommend'));

                $data['recommend'] = $request->input('recommend');
            }

            $recipe->fill($data);
            $recipe->save();

            $recipe->createIngredient(json_decode($request->get('ingredients'), true));
            $recipe->tags()->sync($request->input('taglist'));

            $temp = json_decode($request->get('steps'), true);
            $steps = array();

            foreach ($temp as $key => $value) {
                $value['step'] = $key + 1;
                array_push($steps, $value);
            }

            $recipe->createStep($steps);

            return $recipe;
        });

        if ($update) {
            Recipetopdf::dispatch($update);
            return redirect()->back()->with('message', 'Simpan data berhasil');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Recipe $recipe)
    {
        $recipe->step()->delete();
        $recipe->ingredient()->delete();
        $recipe->bookmark()->detach();
        $recipe->tags()->detach();
        $recipe->comments()->delete();
        $recipe->delete();
        return redirect()->back()->with('message', 'Hapus data berhasil');
    }

    public function updateHighlight()
    {
        $old_recipe = Recipe::where('highlight', 1)->first();
        if ($old_recipe) {
            $old_recipe->highlight = 0;
            if ($old_recipe->save()) {
                return true;
            }
        }

        return false;
    }

    public function updateRecommend($number)
    {
        $old_recipe = Recipe::where('recommend', $number)->first();
        if (!$old_recipe) {
            return true;
        } else {
            $old_recipe->recommend = 0;
            if ($old_recipe->save()) {
                return true;
            }
        }

        return false;
    }

    public function publishRecipe(Recipe $recipe)
    {
        $recipe->approved = 1;
        $recipe->approved_at = Carbon::now();
        if ($recipe->save()) {
            $user = $recipe->user;

            $user->points = $user->points + 100;
            $user->cumulative_points = $user->cumulative_points + 100;

            if ($user->save()) {
                $user->logs()->create([
                    'event' => 'Publish Recipe',
                    'point_get' => 100
                ]);
            }
        }

        return redirect()->route('recipe.pending')->with('message', 'Publish resep berhasil');
    }

    public function dispatchPDF()
    {
        $recipes = Recipe::whereHas('user', function ($q) {
            $q->where('type', 'admin');
        })
        ->whereNull('pdflink')
        ->get();
        
        foreach ($recipes as $recipe) {
            Recipetopdf::dispatch($recipe);
        }
    }
}
