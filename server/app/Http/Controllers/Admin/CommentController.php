<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Comment;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $comments = Comment::when($request->has('name'), function ($q) use ($request) {
            $q->where('body', 'LIKE', '%' . $request->input('name') . '%');
        })
            ->orderBy('created_at', 'DESC')
            ->paginate();

        return view('admin.comment.index', compact('comments'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        $comment->delete();
        return redirect()->back()->with('message', 'Hapus data berhasil');
    }
}
