<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\ApiController;
use App\User;
use Hash;
use Carbon\Carbon;

class UserController extends ApiController
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->input('email'))->first();

        if ($user) {
            if (Hash::check($request->input('password'), $user->password)) {
                $token = Str::random(80);
                $user->api_token = hash('sha256', $token);

                if ($user->save()) {
                    return response()->json(['user' => $user, 'token' => $token], 200);
                } else {
                    return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
                }
            } else {
                return response()->json(['error' => 'Email atau password salah'], 422);
            }
        } else {
            return response()->json(['error' => 'Email tidak ditemukan'], 422);
        }
    }
}
