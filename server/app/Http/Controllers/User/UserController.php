<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\ApiController;
use App\User;

class UserController extends ApiController
{
    public function show(User $user)
    {
        return response()->json($user);
    }
}
