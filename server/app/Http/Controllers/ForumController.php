<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Forum;

class ForumController extends ApiController
{
    public function index()
    {
        $list = Forum::withCount('replies')
            ->orderBy('created_at', 'DESC')
            ->paginate();
        
        $list->map(function ($q) {
            $q->created_at = $q->created_at->addHours(7);
            $q->updated_at = $q->updated_at->addHours(7);

            return $q;
        });

        return response()->json($list);
    }

    public function getHighlight()
    {
        $list = Forum::withCount('replies')
            ->where('highlight', 1)
            ->first();
        
        $list->created_at = $list->created_at->addHours(7);
        $list->updated_at = $list->updated_at->addHours(7);

        return response()->json($list);
    }

    public function show(Request $request, $id)
    {
        $user = $request->user();

        if (is_numeric($id)) {
            $forum = Forum::withCount('replies')
                ->find($id);
        } else {
            $forum = Forum::withCount('replies')
                ->where('slug', $id)
                ->first();
        }

        if (!$forum) {
            return response()->json(['error' => 'Forum tidak ditemukan'], 404);
        }

        $forum->replies = $forum->replies()->with('user')->paginate();

        $forum->replies->map(function ($q) use ($user) {
            if ($q->user_id == $user->id || $user->type == 'admin') {
                $q->deletable = "yes";
            }

            $q->created_at = $q->created_at->addHours(7);
            $q->updated_at = $q->updated_at->addHours(7);

            return $q;
        });

        return response()->json($forum);
    }
}
