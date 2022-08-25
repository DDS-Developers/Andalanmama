<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\RecipeBook;

class BookController extends ApiController
{
    public function index()
    {
        $admin = User::where('type', 'admin')->first();
        $list = $admin->recipebook()->published()->get();

        return response()->json($list);
    }

    public function show(Request $request, $id)
    {
        $user = $request->user();

        $book = RecipeBook::with('user')
            ->has('user')
            ->find($id);

        if (!$book) {
            return response()->json(['error' => 'Buku Resep tidak ditemukan'], 404);
        }

        $book->increment('views');

        if ($book->status == RecipeBook::PUBLISHED || $user->id == $book->user_id) {
            return response()->json($book);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function favourite()
    {
        $admin = User::where('type', 'admin')->first();
        $collection = $admin->recipebook()
            ->with('user')
            ->where('title', 'favourite')
            ->published()
            ->first();

        return response()->json($collection);
    }

    public function adminLatest()
    {
        $admin = User::where('type', 'admin')->first();
        $collection = $admin->recipebook()
            ->with('user')
            ->published()
            ->orderBy('created_at', 'desc')
            ->take(3)
            ->get();

        return response()->json($collection);
    }

    public function singleLatest()
    {
        $admin = User::where('type', 'admin')->first();
        $collection = $admin->recipebook()
            ->with('user')
            ->published()
            ->orderBy('created_at', 'desc')
            ->take(1)
            ->get();

        return response()->json($collection);
    }

    public function search(Request $request)
    {
        if ($request->input('search')) {
            $search = $this->stripHtml($request->input('search'));
            $collection = RecipeBook::query(function ($builder) {
                    $builder->has('user');
            })
                ->where('title', 'LIKE', "%".$search."%")
                ->where('status', RecipeBook::PUBLISHED)
                ->paginate();
        } else {
            $collection = RecipeBook::published()
                ->has('user')
                ->orderBy('created_at', 'desc')
                ->paginate();
        }
        
        return response()->json($collection);
    }
}
