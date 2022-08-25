<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\User;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest:web');
    }

    public function loginForm()
    {
        return view('admin.login');
    }

    public function login(Request $request)
    {
        // Validate
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        // Process
        $user = User::where('type', User::ADMIN)
            ->where('username', $request->get('username'))
            ->firstOrFail();

        if (Hash::check($request->get('password'), $user->password)) {
            Auth::guard('web')->login($user);

            return redirect('/web-admin');
        }

        // Response
        return redirect()->with('error', 'Unable to login');
    }
}
