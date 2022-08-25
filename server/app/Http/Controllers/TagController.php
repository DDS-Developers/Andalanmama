<?php

namespace App\Http\Controllers;

use App\Tag;

class TagController extends ApiController
{
    public function index()
    {
        // Process
        $tags = Tag::orderBy('name')->get();

        // Response
        return response()->json($tags);
    }

    public function popular()
    {
        // Process
        $tags = Tag::where('main', 1)->get();

        // Response
        return response()->json($tags);
    }
}
