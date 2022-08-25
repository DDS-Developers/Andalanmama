<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Reply;

class ReplyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $replies = Reply::when($request->has('name'), function ($q) use ($request) {
            $q->where('body', 'LIKE', '%' . $request->input('name') . '%');
        })
            ->orderBy('created_at', 'DESC')
            ->paginate();

        return view('admin.reply.index', compact('replies'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Reply $reply
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reply $reply)
    {
        $reply->delete();
        return redirect()->back()->with('message', 'Hapus data berhasil');
    }
}
