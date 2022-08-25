<?php

namespace App\Http\Controllers\Explore;

use App\Http\Controllers\ApiController;
use App\Recipe;

class RecipeController extends ApiController
{
    public function getHighlight()
    {
        // Process
        $recipe = Recipe::with('user')
            ->where('highlight', '1')
            ->published()
            ->first();

        // Response
        return response()->json($recipe);
    }

    public function getRecommend()
    {
        // Process
        $recipes = Recipe::with('user')
            ->whereNotNull('recommend')
            ->where('recommend', '!=', 0)
            ->published()
            ->orderBy('recommend', 'asc')
            ->get();

        // Response
        return response()->json($recipes);
    }

    public function getAdminPopular()
    {
        // Process
        $favourites = Recipe::whereHas('user', function ($q) {
                $q->where('type', 'admin');
        })
            ->with('user')
            ->withCount('bookmark')
            ->published()
            ->orderBy('bookmark_count', 'desc')
            ->take(5)
            ->get();

        // Response
        return response()->json($favourites);
    }

    public function getUserLatestRecipe()
    {
        // Process
        $recipes = Recipe::whereHas('user', function ($q) {
            $q->where('type', 'user');
        })
            ->with('user')
            ->published()
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        // Response
        return response()->json($recipes);
    }

    public function getLatestRecipe()
    {
        // Process
        $recipes = Recipe::with('user')
            ->has('user')
            ->published()
            ->orderBy('created_at', 'desc')
            ->paginate(6);

        // Response
        return response()->json($recipes);
    }

    public function getPopular()
    {
        // Process
        $favourites = Recipe::with('user')
            ->published()
            ->orderBy('like_count', 'desc')
            ->take(5)
            ->get();

        // Response
        return response()->json($favourites);
    }
}
