<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\PasswordChanged;
use Carbon\Carbon;
use App\User;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function changePassword(Request $request)
    {
        $validator = $this->validate($request, [
            'reset_code' => 'required',
            'password' => 'required|min:6|max:12|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/',
            'cf_password' => 'required|same:password'
        ]);

        $user = User::where('reset_code', $request->input('reset_code'))
            ->where('reset_code_valid_at', '>=', Carbon::now())
            ->first();

        if ($user) {
            $user->password = Hash::make($request->input('password'));
            $user->reset_code = null;
            $user->reset_code_valid_at = null;

            if ($user->save()) {
                Mail::to($user)->queue(new PasswordChanged($user));
                return response()->json(['message' => 'Kata sandi sukses dirubah']);
            }

            return response()->json(['error' => 'Gagal merubah kata sandi']);
        }

        return response()->json(['error' => 'Kode konfirmasi tidak ditemukan']);
    }
}
