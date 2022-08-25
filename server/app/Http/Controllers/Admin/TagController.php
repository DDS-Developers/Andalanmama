<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Tag;
use App\RecipeTag;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $tags = Tag::when($request->has('name'), function ($q) use ($request) {
            $q->where('name', 'LIKE', '%' . $request->input('name') . '%');
        })
        ->orderBy('created_at', 'DESC')
        ->paginate();

        foreach ($tags as $tag) {
            $tag['total_recipe'] = RecipeTag::where('tag_id', $tag->id)->count();
        }

        return view('admin.tag.index', compact('tags'));
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

        return view('admin.tag.create', compact('token'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate
        $request->validate([
            'name' => 'required',
            'slug' => 'required',
            'attachment' => 'required'
        ]);

        // Given
        $data = $request->only('name', 'slug', 'attachment', 'status');

        // Process
        if (Tag::create($data)) {
            // Response
            return redirect()->back()->with('message', 'Simpan data berhasil');
        }

        // Response
        return redirect()->back()->with('error', 'Tidak dapat menyimpan');
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Tag $tag)
    {
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();

        return view('admin.tag.edit', compact('tag', 'token'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tag $tag)
    {
        // Validate
        $request->validate([
            'name' => 'required',
            'slug' => 'required',
            'attachment' => 'required'
        ]);

        // Given
        $data = $request->only('name', 'slug', 'attachment');
        $data['status'] = 1;

        // Process
        $tag->fill($data);

        if ($tag->save()) {
            // Response
            return redirect()->back()->with('message', 'Simpan data berhasil');
        }

        // Response
        return redirect()->back()->with('error', 'Tidak dapat menyimpan');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tag $tag)
    {
        $tag->delete();
        return redirect()->back()->with('message', 'Hapus data berhasil');
    }

    public function listMainTags()
    {
        $tags = Tag::all();
        $taglist = Tag::where('main', 1)->orderBy('id', 'desc')->pluck('id');

        return view('admin.tag.main', compact('tags', 'taglist'));
    }

    public function setMainTags(Request $request)
    {
        $tags = Tag::all();
        $data = $request->only('taglist');

        if (count($data['taglist']) != 9) {
            return redirect()->back()->with('error', 'Anda harus memilih 9 tag untuk tag utama');
        }

        foreach ($tags as $tag) {
            if (in_array($tag->id, $data['taglist'])) {
                $tag->main = 1;
                $tag->save();
            } else {
                if ($tag->main == 1) {
                    $tag->main = 0;
                    $tag->save();
                }
            }
        }

        return redirect()->back()->with('message', 'Tag utama telah dirubah');
    }
}
