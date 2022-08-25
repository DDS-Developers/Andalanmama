<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\ApiController;
use App\User;
use App\RecipeBook;

class BookController extends ApiController
{
    public function index(User $user)
    {
        return response()->json($user->recipebook()->paginate());
        // return response()->json($user->recipebook()->published()->paginate());
    }

    public function show(User $user, $id)
    {
        $book = RecipeBook::published()->find($id);

        if ($book && $book->user_id == $user->id) {
            return response()->json($book);
        }

        return response()->json(['error' => 'Buku resep tidak ditemukan'], 404);
    }
}
