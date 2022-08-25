<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Blog;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $blogs = Blog::when($request->has('name'), function ($q) use ($request) {
            $q->where('title', 'LIKE', '%' . $request->input('name') . '%');
        })
        ->where('highlight', 0)
        ->orderBy('created_at', 'DESC')
        ->paginate();

        $highlights = Blog::where('highlight', 1)->get();

        return view('admin.blog.index', compact('blogs', 'highlights'));
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

        return view('admin.blog.create', compact('token'));
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
            'status' => 'required|boolean',
            'highlight' => 'required|boolean',
            'publish_at' => 'required|date'
        ]);

        $user = Auth::guard('web')->user();

        $data = $request->only('title', 'body', 'attachment', 'status', 'publish_at', 'highlight');

        $data['body'] = preg_replace('/\//', '\/', $data['body']);

        if ($request->input('slug')) {
            $data['slug'] = $request->input('slug');
        } else {
            $data['slug'] = str_slug($data['title']) . '-' . Str::random(5);
        }

        if ($request->input('highlight_attachment') && $data['highlight'] == true) {
            $data['highlight_attachment'] = $request->input('highlight_attachment');
        }

        if ($request->input('meta_title')) {
            $data['meta_title'] = $request->input('meta_title');
        } else {
            $data['meta_title'] = $data['title'];
        }

        if ($request->input('meta_desc')) {
            $data['meta_desc'] = $request->input('meta_desc');
        } else {
            $data['meta_desc'] = '';
        }

        $blog = $user->blog()->create($data);

        return redirect()->back()->with('message', 'Simpan data berhasil');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Blog $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();

        $blog->body = preg_replace('/\//', '/', $blog->body);

        return view('admin.blog.edit', compact('blog', 'token'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Blog $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blog $blog)
    {
        $request->validate([
            'title' => 'required|string',
            'body' => 'required|string',
            'attachment' => 'required|string',
            'status' => 'required|boolean',
            'highlight' => 'required|boolean',
            'publish_at' => 'required|date'
        ]);

        $data = $request->only('title', 'body', 'attachment', 'status', 'highlight', 'publish_at');

        $data['body'] = preg_replace('/\//', '\/', $data['body']);

        if ($request->input('slug')) {
            $data['slug'] = $request->input('slug');
        } else {
            $data['slug'] = str_slug($data['title']) . '-' . Str::random(5);
        }

        if ($request->input('highlight_attachment') && $data['highlight'] == true) {
            $data['highlight_attachment'] = $request->input('highlight_attachment');
        }

        if ($request->input('meta_title')) {
            $data['meta_title'] = $request->input('meta_title');
        } else {
            $data['meta_title'] = $data['title'];
        }

        if ($request->input('meta_desc')) {
            $data['meta_desc'] = $request->input('meta_desc');
        } else {
            $data['meta_desc'] = '';
        }

        $blog->fill($data);

        $blog->save();

        return redirect()->back()->with('message', 'Update data berhasil');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Blog $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        $blog->delete();
        return redirect()->back()->with('message', 'Hapus data berhasil');
    }
}
