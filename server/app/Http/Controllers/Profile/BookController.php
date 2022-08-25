<?php

namespace App\Http\Controllers\Profile;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\RecipeBook;
use App\Recipe;

class BookController extends ApiController
{
    public function index(Request $request)
    {
        $user = $request->user();

        return response()->json($user->recipebook()
            ->when($request->has('status'), function ($query) use ($request) {
                switch ($request->input('status')) {
                    case 'approved':
                        $query->where('status', 1)->whereNotNull('approved_at');
                        break;
                    case 'draft':
                        $query->where('status', 0);
                        break;
                    case 'approval':
                        $query->where('status', 1)->whereNull('approved_at');
                        break;
                    default:
                        # code...
                        break;
                }
            })
            ->paginate());
    }

    public function store(Request $request)
    {
        // Check Policy
        $this->authorize('store', RecipeBook::class);

        // Validate
        $request->validate([
            'title' => 'required|string',
            'status' => 'required|boolean',
            'recipes' => 'required|array',
            'recipes.*' => 'exists:recipes,id'
        ]);

        // Given
        $user = $request->user();
        $data = $request->only('title', 'recipes');
        $data['status'] = 0;

        // Process
        return \DB::transaction(function () use ($data, $user) {
            $book = $user->recipebook()->create($data);
            return response()->json($book);
        });
    }

    public function show(Request $request, RecipeBook $collection)
    {
        // Check Policy
        $this->authorize('show', $collection);

        $user = $request->user();

        return response()->json($collection);
    }

    public function update(Request $request, RecipeBook $collection)
    {
        // Check Policy
        $this->authorize('update', $collection);

        // Validate
        $request->validate([
            'title' => 'required|string',
            'status' => 'required|boolean',
            'recipes' => 'required|array',
            'recipes.*' => 'exists:recipes,id'
        ]);

        // Given
        $user = $request->user();
        $data = $request->only('title', 'recipes');
        //$data['status'] = 0;

        // Process
        return \DB::transaction(function () use ($data, $collection, $user) {
            $collection->fill($data);

            if ($collection->save()) {
                return response()->json($collection);
            }

            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        });
    }

    public function destroy(Request $request, RecipeBook $collection)
    {
        // Check Policy
        $this->authorize('destroy', $collection);

        $user = $request->user();

        return \DB::transaction(function () use ($collection) {
            $collection->delete();
            return response()->json(['message' => 'ok']);
        });
    }

    public function removeRecipe(RecipeBook $collection, $id, Request $request)
    {
        // Check Policy
        $this->authorize('update', $collection);

        // Given
        $user = $request->user();

        // Process
        return \DB::transaction(function () use ($collection, $id) {
            $recipes = $collection->recipes;
            $new_recipe = array();

            foreach ($recipes as $key => $recipe_id) {
                if ($recipe_id->id != (int) $id) {
                    $new_recipe[] = $recipe_id->id;
                }
            }

            $collection->recipes = $new_recipe;

            if ($collection->save()) {
                return response()->json($collection);
            }
            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        });
    }
}
