<?php

namespace App\Http\Controllers;

class AppController extends Controller
{
    public function index()
    {
        return file_get_contents(public_path('index.html'));
    }
}
