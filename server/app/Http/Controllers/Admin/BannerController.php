<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Banner;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $banners = Banner::orderBy('created_at', 'DESC')
            ->paginate();

        return view('admin.banner.index', compact('banners'));
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

        return view('admin.banner.create', compact('token'));
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
            'url' => 'required',
            'attachment' => 'required|string',
            'status' => 'required|boolean',
            'app' => 'required|boolean'
        ]);

        $user = Auth::guard('web')->user();

        $data = $request->only('title', 'url', 'attachment', 'status', 'app');

        $data['url'] = json_encode($data['url']);

        if (Banner::create($data)) {
            return redirect()->back()->with('message', 'Simpan data berhasil');
        }

        return redirect()->back()->with('error', 'Terjadi kesalahan');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Banner $banner
     * @return \Illuminate\Http\Response
     */
    public function edit(Banner $banner)
    {
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();

        return view('admin.banner.edit', compact('banner', 'token'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Banner $banner
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Banner $banner)
    {
        $request->validate([
            'title' => 'required|string',
            'url' => 'required',
            'attachment' => 'required|string',
            'status' => 'required|boolean',
            'app' => 'required|boolean'
        ]);

        $data = $request->only('title', 'url', 'attachment', 'status', 'app');

        $data['url'] = json_encode($data['url']);

        $banner->fill($data);

        $banner->save();

        return redirect()->back()->with('message', 'Update data berhasil');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Banner $banner
     * @return \Illuminate\Http\Response
     */
    public function destroy(Banner $banner)
    {
        $banner->delete();
        return redirect()->back()->with('message', 'Hapus data berhasil');
    }
}
