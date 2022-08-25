<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Process
        $users = User::when($request->has('name'), function ($q) use ($request) {
            $q->where('fullname', 'LIKE', '%' . $request->input('name') . '%')
                ->orWhere('username', 'LIKE', '%' . $request->input('name') . '%');
        })
        ->paginate();

        return view('admin.user.index', compact('users'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $admin = Auth::guard('web')->user();
        $token = $admin->roleToken();
        $user->makeVisible(['email', 'birthday', 'description', 'phone', 'address']);
        $user->description = strip_tags($user->description);

        return view('admin.user.edit', compact('user', 'token'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
         // Validate
         $request->validate([
            'username' => 'required',
            'fullname' => 'required',
            'new_password' => 'present|same:newcf_password',
            'newcf_password' => 'required_with:new_password|same:new_password'
         ]);

        // Given
        $data = $request->only('username', 'fullname');

        if ($request->has('new_password')) {
            $data['password'] = Hash::make($request->input('new_password'));
        }

        if ($request->has('address')) {
            $data['address'] = $request->input('address');
        }

        if ($request->has('description')) {
            $data['description'] = $request->input('description');
        }

        if ($request->input('selection') == 1) {
            $data['avatar'] = 'users/default.png';
        }

        // Process
        $user->fill($data);

        if ($user->save()) {
            // Response
            return redirect()->back()->with('message', 'Simpan data berhasil');
        }

        // Response
        return redirect()->back()->with('error', 'Tidak dapat menyimpan');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->back()->with('message', 'Hapus data berhasil');
    }

    public function addRegisterPoints()
    {
        $users = User::where('type', 'user')->get();

        foreach ($users as $user) {
            $user->points = $user->points + 50;
            $user->cumulative_points = $user->cumulative_points + 50;

            if ($user->save()) {
                $user->logs()->create([
                    'event' => 'Register',
                    'point_get' => 50
                ]);
            }
        }

        return redirect()->back()->with('message', 'Point berhasil ditambah');
    }

    public function addRegisterPointsGoogle()
    {
        $users = User::where('type', 'user')
            ->where('points', 0)
            ->get();

        foreach ($users as $user) {
            $user->points = $user->points + 50;
            $user->cumulative_points = $user->cumulative_points + 50;

            if ($user->save()) {
                $user->logs()->create([
                    'event' => 'Register',
                    'point_get' => 50
                ]);
            }
        }

        return redirect()->back()->with('message', 'Point berhasil ditambah');
    }

    public function checkPointHistory(User $user)
    {
        $logs = $user->logs()->orderBy('created_at', 'desc')->paginate(10);

        $user->makeVisible(['points', 'cumulative_points']);

        return view('admin.user.points', compact('user', 'logs'));
    }
}
