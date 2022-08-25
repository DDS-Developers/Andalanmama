<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\Controller;
use App\User;

class SocialController extends Controller
{
    public function authenticate(Request $request)
    {
        $type = $request->input('type');
        $social = $request->input('social');
        $code = $request->input('code');

        if ($type === 'google') {
            //$auth = $this->google()->stateless()->user();
            $auth = (object) [
                'email' => $request->input('email'),
                'name' => $request->input('name')
            ];
        } else {
            $auth = $this->facebook()->userFromToken($code);
        }

        if (!$auth) {
            return response()->json([], 401);
        }

        $token = Str::random(80);
        $email = $auth->email ? $auth->email : ($type === 'facebook' && !isset($auth->email) ? $auth->id.'@facebook.com' : '');
        $username = explode('@', $email);

        $user = User::where('email', $email)->first();

        if (!$user) {
            $user = User::create([
                'email' => $email,
                'username' => $username[0],
                'fullname' => $auth->name,
                'password' => \Hash::make(Str::random(16)),
                'api_token' => hash('sha256', $token),
                'type' => 'user',
                'avatar' => 'users/default.png',
                'points' => 50,
                'cumulative_points' => 50
            ]);
            
            $user->logs()->create([
                'event' => 'Register',
                'point_get' => 50
            ]);
        } else {
            $user->api_token = hash('sha256', $token);
            $user->save();
        }

        $user->makeVisible(['points']);

        return response()->json(compact('user', 'token'));
    }

    protected function google()
    {
        $config = [
            'client_id'    => env('GOOGLE_CLIENT_ID'),
            'client_secret' => env('GOOGLE_CLIENT_SECRET'),
            'redirect'     => request()->input('redirect_uri')
        ];

        return Socialite::buildProvider(\Laravel\Socialite\Two\GoogleProvider::class, $config);
    }


    protected function facebook()
    {
        $config = [
            'client_id'    => env('FACEBOOK_CLIENT_ID'),
            'client_secret' => env('FACEBOOK_CLIENT_SECRET'),
            'redirect'     => request()->input('redirect_uri')
        ];

        return Socialite::buildProvider(\Laravel\Socialite\Two\FacebookProvider::class, $config);
    }
}
