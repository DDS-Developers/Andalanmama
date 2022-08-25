<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Recipe;
use App\Like;

class LikeController extends ApiController
{
    public function __invoke(Request $request, $id)
    {
        $user = $request->user();

        $recipe = Recipe::findOrFail($id);

        if ($recipe->user_id == $user->id) {
            return response()->json(['message' => 'tidak bisa suka resep sendiri']);
        }

        $liked = Like::where('user_id', $user->id)
            ->where('recipe_id', $recipe->id)
            ->get();

        if (count($liked) != 0) {
            if ($recipe->like_count != 0) {
                $recipe->decrement('like_count');
            }
        } else {
            $recipe->increment('like_count');

            // add points for like
            // $dailies = $user->logs()->where('event', 'Like Recipe')
            //     ->whereDate('created_at', '=', Carbon::today()->toDateString())
            //     ->count();

            // if ($dailies < 2) {
            //     $user->points = $user->points + 1;
            //     $user->cumulative_points = $user->cumulative_points + 1;

            //     if ($user->save()) {
            //         $user->logs()->create([
            //             'event' => 'Like Recipe',
            //             'point_get' => 1
            //         ]);
            //     }
            // }
        }

        $user->like()->toggle($recipe);

        return response()->json([
            'message' => 'suka berhasil dirubah',
            'points' => $user->points
        ]);
    }
}
