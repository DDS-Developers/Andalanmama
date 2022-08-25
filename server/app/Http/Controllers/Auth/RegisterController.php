<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Mail;
use App\User;
use App\Mail\WelcomeMail;
use Hash;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(Request $request)
    {
        // Validate
        $request->validate([
            'fullname' => 'required|min:5|max:20',
            'username' => 'required|min:5|max:12|unique:users,username',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6|max:12|regex:/^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/',
            'cf_password' => 'required|same:password'
        ]);

        $data = $request->only('fullname', 'username', 'email');

        $data['password'] = Hash::make($request->input('password'));
        $token = Str::random(80);
        $data['api_token'] = hash('sha256', $token);
        $data['avatar'] = 'users/default.png';
        $data['points'] = 50;
        $data['cumulative_points'] = 50;
        
        $user = User::create($data);

        if ($user) {
            Mail::to($user)->queue(new WelcomeMail($user));
            $user->logs()->create([
                'event' => 'Register',
                'point_get' => 50
            ]);
            return response()->json(['user' => $user, 'token' => $token], 200);
        }

        return response()->json(['error' => 'Terjadi kesalahan pada server'], 401);
    }
}
