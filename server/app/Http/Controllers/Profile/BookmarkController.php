<?php

namespace App\Http\Controllers\Profile;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Bookmark;

class BookmarkController extends ApiController
{
    public function index(Request $request)
    {
        $user = $request->user();

        return response()->json($user->bookmark()->paginate());
    }
}
