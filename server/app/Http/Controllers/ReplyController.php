<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Reply;

class ReplyController extends ApiController
{
    public function postReply(Request $request, $id)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $data['body'] = $this->stripHtml($request->input('body'));
        $data['forum_id'] = $id;

        $reply = $user->replies()->create($data);

        $reply->created_at = $reply->created_at->addHours(7);
        $reply->updated_at = $reply->updated_at->addHours(7);

        return response()->json($reply);
    }

    public function deleteReply(Request $request, Reply $reply)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        if ($user->type != 'admin') {
            if ($user->id != $reply->user_id) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        }
        
        $reply->delete();

        return response()->json(['message' => 'komentar berhasil dihapus']);
    }
}
