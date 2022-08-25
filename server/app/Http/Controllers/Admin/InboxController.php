<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Jobs\NotificationGeneral;
use App\Inbox;

class InboxController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $inboxes = Inbox::orderBy('created_at', 'DESC')
            ->paginate();

        return view('admin.inbox.index', compact('inboxes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();

        return view('admin.inbox.create', compact('token'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'message' => 'required|string'
        ]);

        $user = Auth::guard('web')->user();

        $data = $request->only('title', 'message');

        // $data['sender_id'] = $user->id;

        $inbox = Inbox::create($data);

        if ($inbox) {
            NotificationGeneral::dispatch($request->input('title'), $request->input('message'));

            return redirect()->back()->with('message', 'Kirim pesan berhasil');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Inbox $inbox
     * @return \Illuminate\Http\Response
     */
    public function show(Inbox $inbox)
    {
        $user = Auth::guard('web')->user();
        $token = $user->roleToken();
        
        return view('admin.inbox.show', compact('token', 'inbox'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Inbox $inbox
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inbox $inbox)
    {
        $inbox->delete();
        return redirect()->back()->with('message', 'Hapus data berhasil');
    }
}
