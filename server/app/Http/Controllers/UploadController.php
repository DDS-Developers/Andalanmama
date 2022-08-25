<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Blog;

class UploadController extends ApiController
{
    public function upload(Request $request)
    {
        $user = $request->user();

        $this->validate($request, [
            'attachment' => 'required'
            // 'attachment' => 'required|file|image|mimes:jpeg,jpg,png,gif,svg|max:10240'
        ]);

        try {
            return \DB::transaction(function () use ($request, $user) {
                $image = $request->file('attachment');

                $filename = $this->randomname($user->id) . '.' . $image->getClientOriginalExtension();
                $path = 'recipes/user/' . $user->id;

                $upload = Storage::cloud()->put($path . "/" . $filename, fopen($image, 'r+'), 'public');

                if ($upload) {
                    $data['url'] = Storage::cloud()->url($path . "/" . $filename);
                    $data['filename'] = $path . "/" . $filename;

                    return response()->json($data);
                }

                return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
            });
            
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

    public function avatarUpload(Request $request)
    {
        $user = $request->user();

        $this->validate($request, [
            'attachment' => 'required'
            // 'attachment' => 'required|file|image|mimes:jpeg,jpg,png,gif,svg|max:10240'
        ]);

        return \DB::transaction(function () use ($request, $user) {
            $image = $request->file('attachment');

            $filename = $this->randomname($user->id) . '.' . $image->getClientOriginalExtension();
            $path = 'users/' . $user->id;

            $upload = Storage::cloud()->put($path . "/" . $filename, fopen($image, 'r+'), 'public');

            if ($upload) {
                $data['url'] = Storage::cloud()->url($path . "/" . $filename);
                $data['filename'] = $path . "/" . $filename;

                return response()->json($data);
            }

            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        });
    }

    public function blogUpload(Request $request)
    {
        $user = $request->user();

        if ($user->type != 'admin') {
            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        }

        $this->validate($request, [
            'file' => 'required'
            // 'file' => 'required|file|image|mimes:jpeg,jpg,png,gif,svg|max:10240'
        ]);

        return \DB::transaction(function () use ($request, $user) {
            $image = $request->file('file');

            $filename = $this->randomname($user->id) . '-' . rand() . '.' . $image->getClientOriginalExtension();
            $path = 'articles';

            $upload = Storage::cloud()->put($path . "/" . $filename, fopen($image, 'r+'), 'public');

            if ($upload) {
                $data['url'] = Storage::cloud()->url($path . "/" . $filename);
                $data['filename'] = $path . "/" . $filename;

                return response()->json($data);
            }

            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        });
    }

    public function tagUpload(Request $request)
    {
        $user = $request->user();

        if ($user->type != 'admin') {
            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        }

        $this->validate($request, [
            'file' => 'required'
            // 'file' => 'required|file|image|mimes:jpeg,jpg,png,gif,svg|max:10240'
        ]);

        return \DB::transaction(function () use ($request, $user) {
            $image = $request->file('file');

            $filename = $this->randomname($user->id) . '-' . rand() . '.' . $image->getClientOriginalExtension();
            $path = 'recipes/tags';

            $upload = Storage::cloud()->put($path . "/" . $filename, fopen($image, 'r+'), 'public');

            if ($upload) {
                $data['url'] = Storage::cloud()->url($path . "/" . $filename);
                $data['filename'] = $path . "/" . $filename;

                return response()->json($data);
            }

            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        });
    }

    public function recipeAdminUpload(Request $request)
    {
        $user = $request->user();

        if ($user->type != 'admin') {
            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        }

        $this->validate($request, [
            'file' => 'required'
            // 'file' => 'required|file|image|mimes:jpeg,jpg,png,gif,svg|max:10240'
        ]);

        return \DB::transaction(function () use ($request, $user) {
            $image = $request->file('file');

            $filename = $this->randomname($user->id) . '-' . rand() . '.' . $image->getClientOriginalExtension();
            $path = 'recipes/filma';

            $upload = Storage::cloud()->put($path . "/" . $filename, fopen($image, 'r+'), 'public');

            if ($upload) {
                $data['url'] = Storage::cloud()->url($path . "/" . $filename);
                $data['filename'] = $path . "/" . $filename;

                return response()->json($data);
            }

            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        });
    }
    
    public function mailUpload(Request $request)
    {
        $user = $request->user();

        if ($user->type != 'admin') {
            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        }

        $this->validate($request, [
            'file' => 'required'
            // 'file' => 'required|file|image|mimes:jpeg,jpg,png,gif,svg|max:10240'
        ]);

        return \DB::transaction(function () use ($request, $user) {
            $image = $request->file('file');

            $filename = $this->randomname($user->id) . '.' . $image->getClientOriginalExtension();
            $path = 'mails';

            $upload = Storage::cloud()->put($path . "/" . $filename, fopen($image, 'r+'), 'public');

            if ($upload) {
                $data['url'] = Storage::cloud()->url($path . "/" . $filename);
                $data['filename'] = $path . "/" . $filename;

                return response()->json($data);
            }

            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        });
    }

    public function bannerUpload(Request $request)
    {
        $user = $request->user();

        if ($user->type != 'admin') {
            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        }

        $this->validate($request, [
            'file' => 'required'
            // 'file' => 'required|file|image|mimes:jpeg,jpg,png,gif,svg|max:10240'
        ]);

        return \DB::transaction(function () use ($request, $user) {
            $image = $request->file('file');

            $filename = $this->randomname($user->id) . '.' . $image->getClientOriginalExtension();
            $path = 'floatingimages';

            $upload = Storage::cloud()->put($path . "/" . $filename, fopen($image, 'r+'), 'public');

            if ($upload) {
                $data['url'] = Storage::cloud()->url($path . "/" . $filename);
                $data['filename'] = $path . "/" . $filename;

                return response()->json($data);
            }

            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        });
    }

    public function forumUpload(Request $request)
    {
        $user = $request->user();

        if ($user->type != 'admin') {
            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        }

        $this->validate($request, [
            'file' => 'required'
            // 'file' => 'required|file|image|mimes:jpeg,jpg,png,gif,svg|max:10240'
        ]);

        return \DB::transaction(function () use ($request, $user) {
            $image = $request->file('file');

            $filename = $this->randomname($user->id) . '.' . $image->getClientOriginalExtension();
            $path = 'forums';

            $upload = Storage::cloud()->put($path . "/" . $filename, fopen($image, 'r+'), 'public');

            if ($upload) {
                $data['url'] = Storage::cloud()->url($path . "/" . $filename);
                $data['filename'] = $path . "/" . $filename;

                return response()->json($data);
            }

            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        });
    }
}
