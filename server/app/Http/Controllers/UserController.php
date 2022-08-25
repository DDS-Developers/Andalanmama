<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends ApiController
{
    public function search(Request $request)
    {
        if ($request->input('search')) {
            $search = $this->stripHtml($request->input('search'));
            $users = User::where('fullname', 'LIKE', "%".$search."%")
                ->orWhere('username', 'LIKE', "%".$search."%")
                ->paginate();
        } else {
            $users = User::orderBy('created_at', 'desc')
                ->paginate();
        }
        
        return response()->json($users);
    }

    public function getSetting(Request $request)
    {
        $user = $request->user();
        $user->makeVisible(['newsletter', 'notification']);

        return response()->json($user);
    }

    public function setSetting(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'newsletter' => 'required|boolean',
            'notification' => 'required|boolean',
        ]);

        if ($request->input('device_token') && $request->input('device_token') != '') {
            $user->device_token = $request->input('device_token');
        } else {
            $user->device_token = '';
        }

        $user->newsletter = $request->input('newsletter');
        $user->notification = $request->input('notification');

        if ($user->save()) {
            $user->makeVisible(['newsletter', 'notification']);

            return response()->json($user);
        }
    }

    public function updateDevice(Request $request)
    {
        $user = $request->user();

        $validate = User::where('id', $user->id)
            ->where('device_token', $request->input('device_token'))
            ->first();

        if (!$validate || $validate->id == $user->id) {
            $user->device_token = $request->input('device_token');

            if ($user->save()) {
                return response()->json(['success' => []], 200);
            }
        }
        
        return response()->json(['error' => 'Gagal merubah token'], 200);
    }
}
