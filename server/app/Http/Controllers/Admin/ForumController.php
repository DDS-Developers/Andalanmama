<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Forum;

class ForumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $forums = Forum::when($request->has('name'), function ($q) use ($request) {
            $q->where('title', 'LIKE', '%' . $request->input('name') . '%');
        })
        ->where('highlight', 0)
        ->orderBy('created_at', 'DESC')
        ->paginate();

        
        $highlights = Forum::where('highlight', 1)->get();

        return view('admin.forum.index', compact('forums', 'highlights'));
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

        return view('admin.forum.create', compact('token'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'body' => 'required|string',
            'attachment' => 'required|string',
            'highlight' => 'required|boolean'
        ]);

        $user = Auth::guard('web')->user();

        $data = $request->only('title', 'body', 'attachment', 'highlight');

        $data['body'] = preg_replace('/\//', '\/', $data['body']);

        if ($request->input('slug')) {
            $data['slug'] = $request->input('slug');
        } else {
            $data['slug'] = str_slug($data['title']) . '-' . Str::random(5);
        }

        $forum = $user->forum()->create($data);

        return redirect()->back()->with('message', 'Simpan data berhasil');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Forum $forum
     * @return \Illuminate\Http\Response
     */
    public function edit(Forum $forum)
    {
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();

        $forum->body = preg_replace('/\//', '/', $forum->body);

        return view('admin.forum.edit', compact('forum', 'token'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Forum $forum
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Forum $forum)
    {
        $request->validate([
            'title' => 'required|string',
            'body' => 'required|string',
            'attachment' => 'required|string',
            'highlight' => 'required|boolean'
        ]);

        $data = $request->only('title', 'body', 'attachment', 'highlight');

        $data['body'] = preg_replace('/\//', '\/', $data['body']);

        if ($request->input('slug')) {
            $data['slug'] = $request->input('slug');
        } else {
            $data['slug'] = str_slug($data['title']) . '-' . Str::random(5);
        }
        
        $forum->fill($data);

        $forum->save();

        return redirect()->back()->with('message', 'Update data berhasil');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Forum $forum
     * @return \Illuminate\Http\Response
     */
    public function destroy(Forum $forum)
    {
        $forum->replies()->delete();
        $forum->delete();
        return redirect()->back()->with('message', 'Hapus data berhasil');
    }
}
