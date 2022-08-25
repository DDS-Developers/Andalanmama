<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Recipe;
use App\Comment;

class CommentController extends ApiController
{
    public function getCommentFromRecipe(Request $request, $id)
    {
        $user = $request->user();

        $recipe = Recipe::findOrFail($id);

        $comments = $recipe->comments()
            ->with('user')
            ->orderBy('created_at', 'desc')
            ->paginate(5);

        if ($user) {
            $comments->map(function ($q) use ($user) {
                if ($q->user_id == $user->id || $user->type == 'admin') {
                    $q->deletable = "yes";
                }

                $q->load('user');

                return $q;
            });
        }

        $comments->map(function ($q) {
            $q->created_at = $q->created_at->addHours(7);
            $q->updated_at = $q->updated_at->addHours(7);

            return $q;
        });

        return response()->json($comments);
    }

    public function postComment(Request $request, $id)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $data['body'] = $this->stripHtml($request->input('body'));
        $data['recipe_id'] = $id;

        $comment = $user->comments()->create($data);

        $comment->created_at = $comment->created_at->addHours(7);
        $comment->updated_at = $comment->updated_at->addHours(7);

        //points
        $dailies = $user->logs()->where('event', 'Comment')
            ->whereDate('created_at', '=', Carbon::today()->toDateString())
            ->count();

        if ($dailies < 2) {
            $user->points = $user->points + 1;
            $user->cumulative_points = $user->cumulative_points + 1;

            if ($user->save()) {
                $user->logs()->create([
                    'event' => 'Comment',
                    'point_get' => 1
                ]);
            }
        }

        $comment->points = $user->points;
        $comment->user = $user;

        return response()->json($comment);
    }

    public function updateComment(Request $request, Comment $comment)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        if ($user->type != 'admin') {
            if ($user->id != $comment->user_id) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        }

        $data['body'] = $this->stripHtml($request->input('body'));

        $comment->body = $data['body'];
        $comment->save();

        $comment->created_at = $comment->created_at->addHours(7);
        $comment->updated_at = $comment->updated_at->addHours(7);

        return response()->json($comment);
    }

    public function deleteComment(Request $request, Comment $comment)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        if ($user->type != 'admin') {
            if ($user->id != $comment->user_id) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        }
        
        $comment->delete();

        return response()->json(['message' => 'komentar berhasil dihapus']);
    }
}
