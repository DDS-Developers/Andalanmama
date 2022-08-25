<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\RecipeBook;
use Carbon\Carbon;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();

        if ($request->segment(3) == 'admin') {
            $books = RecipeBook::whereHas('user', function ($q) {
                $q->where('type', 'admin');
            })
            ->when($request->has('name'), function ($q) use ($request) {
                $q->where('title', 'LIKE', '%' . $request->input('name') . '%');
            })
            ->orderBy('created_at', 'desc')
            ->paginate();
        } elseif ($request->segment(3) == 'pending') {
            $books = RecipeBook::whereHas('user', function ($q) {
                $q->where('type', 'user');
            })
            ->when($request->has('name'), function ($q) use ($request) {
                $q->where('title', 'LIKE', '%' . $request->input('name') . '%');
            })
            ->where('approved', 0)
            ->orderBy('created_at', 'desc')
            ->paginate();
        } else {
            $books = RecipeBook::whereHas('user', function ($q) {
                $q->where('type', 'user');
            })
            ->when($request->has('name'), function ($q) use ($request) {
                $q->where('title', 'LIKE', '%' . $request->input('name') . '%');
            })
            ->where('approved', 1)
            ->orderBy('created_at', 'desc')
            ->paginate();
        }

        return view('admin.book.index', compact('token', 'books'));
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
        $recipes = $user->recipe()->get();

        return view('admin.book.create', compact('token', 'recipes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();

        $request->validate([
            'title' => 'required|string',
            'recipe_id' => 'required|array',
            'status' => 'required'
        ]);

        $data = $request->only('title', 'status');
        $data['recipes'] = $request->input('recipe_id');

        $book = $user->recipebook()->create($data);

        return redirect()->back()->with('message', 'Simpan data berhasil');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(RecipeBook $book)
    {
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();

        return view('admin.book.show', compact('token', 'book'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(RecipeBook $book)
    {
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();
        $recipes = $user->recipe()->get();

        return view('admin.book.edit', compact('token', 'recipes', 'book'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RecipeBook $book)
    {
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();

        $request->validate([
            'title' => 'required|string',
            'recipe_id' => 'required|array',
            'status' => 'required'
        ]);

        $data = $request->only('title', 'status');
        $data['recipes'] = $request->input('recipe_id');

        $book->fill($data);
        $book->save();

        return redirect()->back()->with('message', 'Update data berhasil');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(RecipeBook $book)
    {
        $book->delete();
        return redirect()->back()->with('message', 'Hapus data berhasil');
    }

    public function publishBook(RecipeBook $book)
    {
        $book->status = 1;
        $book->approved = 1;
        $book->approved_at = Carbon::now();
        $book->save();

        return redirect()->route('pending')->with('message', 'Publish buku berhasil');
    }
}
