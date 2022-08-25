<?php

namespace App\Http\Controllers\Profile;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\ApiController;
use App\Mail\PasswordChanged;
use App\User;

class UserController extends ApiController
{
    public function index(Request $request)
    {
        $user = $request->user();
        $user->makeVisible(['email', 'birthday', 'description', 'phone', 'address', 'points', 'cumulative_points']);
        return response()->json($user);
    }

    public function update(Request $request)
    {
        $request->validate([
            'fullname' => 'required|min:5|max:20',
            'birthday' => 'required',
            'email' => 'required|email',
            'phone' => 'nullable'
         ]);

        $user = $request->user();
        $data = $request->only('fullname', 'birthday', 'phone');

        return \DB::transaction(function () use ($data, $user, $request) {
            if ($user->email == $request->input('email')) {
                $data['email'] = $request->input('email');
            } else {
                if ($this->emailCheck($request->input('email'))) {
                    $data['email'] = $request->input('email');
                } else {
                    return response()->json(['error' => 'Email telah digunakan'], 422);
                }
            }

            if ($request->has('address')) {
                $data['address'] = $this->stripHtml($request->input('address'));
            }

            if ($request->has('description')) {
                $data['description'] = $this->stripHtml($request->input('description'));
            }

            if ($request->has('avatar')) {
                $data['avatar'] = $request->input('avatar');
            }

            $user->fill($data);

            if ($user->save()) {
                $user->makeVisible([
                    'email',
                    'birthday',
                    'description',
                    'phone',
                    'address',
                    'points',
                    'cumulative_points'
                ]);
                return response()->json($user);
            }

            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        });
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|min:6|max:12|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/',
            'cf_password' => 'required|same:new_password'
        ]);

        $user = $request->user();

        return \DB::transaction(function () use ($user, $request) {
            if (Hash::check($request->input('old_password'), $user->password)) {
                $user->password = Hash::make($request->input('new_password'));

                if ($user->save()) {
                    Mail::to($user)->queue(new PasswordChanged($user));
                    return response()->json($user);
                }
            } else {
                return response()->json(['error' => 'Kata sandi lama tidak benar'], 422);
            }
            return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
        });
    }

    public function redeemVoucher(Request $request)
    {
        //to be implemented
    }

    private function emailCheck($email)
    {
        $user = User::where('email', $email)->first();

        if ($user) {
            return false;
        }

        return true;
    }
}
