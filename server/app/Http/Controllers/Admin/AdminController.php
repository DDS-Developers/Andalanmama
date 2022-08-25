<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\User;

class AdminController extends Controller
{
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

        return view('admin.admin.edit', compact('user', 'token'));
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
            'fullname' => 'required',
            'new_password' => 'present|same:newcf_password',
            'newcf_password' => 'required_with:new_password|same:new_password'
         ]);

        // Given
        $data = $request->only('fullname');

        // Process
        $user->fill($data);
        if ($request->input('new_password')) {
            $user->password = Hash::make($request->input('new_password'));
        }

        if ($user->save()) {
            // Response
            return redirect()->back()->with('message', 'Simpan data berhasil');
        }

        // Response
        return redirect()->back()->with('error', 'Tidak dapat menyimpan');
    }
}
