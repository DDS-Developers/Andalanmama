<?php

namespace App\Http\Controllers\Explore;

use App\Http\Controllers\ApiController;
use App\RecipeBook;

class BookController extends ApiController
{
    public function recent()
    {
        $collection = RecipeBook::with('user')
        ->published()
        ->orderBy('created_at', 'desc')
        ->take(5)
        ->get();

        return response()->json($collection);
    }
}
