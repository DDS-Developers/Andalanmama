<?php

namespace App\Http\Controllers\Profile;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Recipe;
use App\Jobs\Recipetopdf;

class RecipeController extends ApiController
{
    public function index(Request $request)
    {
        $user = $request->user();
        $recipes = $user->recipe()
            ->with('ingredient', 'step', 'tags')
            ->when($request->has('status'), function ($query) use ($request) {
                switch ($request->input('status')) {
                    case 'approved':
                        $query->where('status', 1)->whereNotNull('approved_at');
                        break;
                    case 'unpublished':
                        $query->where('status', 0);
                        break;
                    case 'draft':
                        $query->where('status', 2);
                        break;
                    case 'approval':
                        $query->where('status', 1)->whereNull('approved_at');
                        break;
                    default:
                        # code...
                        break;
                }
            })
            ->paginate();

        return response()->json($recipes);
    }

    public function show(Request $request, $id)
    {
        $this->authorize('show', Recipe::class);
        $user = $request->user();
        $recipe = $user->recipe()
            ->with('ingredient', 'step', 'tags')
            ->findOrFail($id);

        return response()->json($recipe);
    }

    public function store(Request $request)
    {
        $this->authorize('store', Recipe::class);
        $user = $request->user();

        // $request->validate([
        //     'name' => '',
        //     'attachment' => 'required',
        //     'description' => 'required',
        //     'portion' => 'required|integer',
        //     'time' => 'required|integer',
        //     'ingredients' => 'required|array',
        //     'steps' => 'required|array',
        //     'steps.*.step' => 'required|integer',
        //     'steps.*.description' => 'required',
        //     'steps.*.attachment' => 'required',
        //     'status' => 'required|boolean',
        //     'tags' => 'array'
        // ]);

        $data = $request->only(
            'name',
            'attachment',
            'description',
            'portion',
            'time',
            'status'
        );
        
        $data['meta_title'] = $data['name'];

        // $data['status'] = 0;

        $create = \DB::transaction(function () use ($request, $user, $data) {
            $recipe = $user->recipe()->create($data);

            if ($recipe) {
                $recipe->createIngredient($request->input('ingredients'));
                $recipe->createStep($request->input('steps'));
                $recipe->createTags($request->input('tags'));

                $recipe->load('ingredient', 'step', 'tags');

                return $recipe;
            }
            
            return '';
        });

        if ($create) {
            Recipetopdf::dispatch($create);
            return response()->json($create);
        }

        return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
    }

    public function update(Request $request, Recipe $recipe)
    {
        $this->authorize('update', $recipe);
        $user = $request->user();

        // $request->validate([
        //     'name' => 'required',
        //     'attachment' => 'required',
        //     'description' => 'required',
        //     'portion' => 'required|integer',
        //     'time' => 'required|integer',
        //     'ingredients' => 'required|array',
        //     'steps' => 'required|array',
        //     'steps.*.step' => 'required|integer',
        //     'steps.*.description' => 'required',
        //     'steps.*.attachment' => 'required',
        //     'status' => 'required|boolean',
        //     'tags' => 'array'
        // ]);

        $data = $request->only(
            'name',
            'attachment',
            'description',
            'portion',
            'time',
            'status'
        );

        $data['approved'] = 0;
        $data['approved_at'] = null;
        $data['meta_title'] = $data['name'];
        // $data['status'] = 0;

        $update = \DB::transaction(function () use ($data, $recipe, $request) {
            $recipe->fill($data);

            if ($recipe->save()) {
                $recipe->createIngredient($request->input('ingredients'));
                $recipe->createStep($request->input('steps'));
                $recipe->createTags($request->input('tags'));

                $recipe->load('ingredient', 'step', 'tags');

                return $recipe;
            }

            return '';
        });

        if ($update) {
            Recipetopdf::dispatch($update);
            return response()->json($update);
        }

        return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
    }

    public function destroy(Request $request, Recipe $recipe)
    {
        $this->authorize('destroy', $recipe);
        $user = $request->user();

        return \DB::transaction(function () use ($recipe, $user) {
            $recipe->ingredient()->delete();
            $recipe->step()->delete();
            $recipe->tags()->delete();
            $recipe->comments()->delete();
            $recipe->delete();

            return response()->json(['message' => 'ok']);
        });
    }

    public function draftRecipe(Request $request)
    {
        $this->authorize('store', Recipe::class);
        $user = $request->user();

        $data = $request->only(
            'name',
            'attachment',
            'description',
            'portion',
            'time',
            'status'
        );
        
        $data['meta_title'] = $data['name'];
        $data['status'] = 2;

        $create = \DB::transaction(function () use ($request, $user, $data) {
            $recipe = $user->recipe()->create($data);

            if ($recipe) {
                $recipe->createIngredient($request->input('ingredients'));
                $recipe->createStep($request->input('steps'));
                $recipe->createTags($request->input('tags'));

                $recipe->load('ingredient', 'step', 'tags');

                return $recipe;
            }
            
            return '';
        });

        if ($create) {
            return response()->json($create);
        }

        return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
    }
}
