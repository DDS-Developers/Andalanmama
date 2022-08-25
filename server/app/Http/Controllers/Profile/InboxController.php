<?php

namespace App\Http\Controllers\Profile;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Inbox;
use App\User;

class InboxController extends ApiController
{
    public function index(Request $request)
    {
        $user = $request->user();

        $inbox = '';
        $userbox = $user->inboxevent;

        if (count($userbox) < 1) {
            $user = $request->user();

            $user->makeVisible(['created_at']);

            $data = (object) array(
                'current_page' => 1,
                'data' => $request->page == "1" ? array(
                    array(
                        "id" => 4,
                        "title" => "Selamat Datang di Andalan Mama apps",
                        "message" => "Halo, selamat datang di andalan mama apps",
                        "created_at" => $user->created_at->format('Y-m-d H:i:s')
                    )
                ) : array(),
                "first_page_url" => null,
                "from" => 1,
                "last_page" => 1,
                "last_page_url" => null,
                "next_page_url" => null,
                "path" => null,
                "per_page" => 15,
                "prev_page_url" => null,
                "to" => 1,
                "total" => 1
            );

            return response()->json($data);
            // return response()->json(Inbox::orderBy('created_at', 'DESC')->paginate());
        } else {
            $inbox = Inbox::orderBy('created_at', 'DESC')->get();
        }

        $inbox = $inbox->merge($userbox);

        $arr = $inbox->toArray();
        $perPage = 12;
        $currentPage = 1;

        if ($request->has('page') && $request->input('page') != '') {
            $currentPage = $request->input('page');
        } else {
            $currentPage = 1;
        }

        $offset = ($currentPage * $perPage) - $perPage;
        $arr_splice = array_slice($arr, $offset, $perPage, true);

        $paginator = new \Illuminate\Pagination\Paginator($arr_splice, count($arr), $perPage, $currentPage);

        return response()->json($paginator);
    }
}
