<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\ApiController;
use App\User;
use App\Recipe;

class RecipeController extends ApiController
{
    public function index(User $user)
    {
        // return response()->json($user->recipe()->published()->paginate());
        return response()->json($user->recipe()->paginate());
    }

    public function show(User $user, $id)
    {
        $recipe = Recipe::with('ingredient', 'step')
            ->has('user')
            ->published()
            ->findOrFail($id);

        return response()->json($recipe);
    }
}
