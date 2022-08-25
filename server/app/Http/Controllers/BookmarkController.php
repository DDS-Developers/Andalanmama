<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Recipe;
use App\Bookmark;

class BookmarkController extends ApiController
{
    public function __invoke(Request $request, $id)
    {
        $user = $request->user();

        $recipe = Recipe::findOrFail($id);
        $user->bookmark()->toggle($recipe);

        $checker = Bookmark::where('recipe_id', $recipe->id)
            ->where('user_id', $user->id)
            ->first();

        //points
        if ($checker) {
            $dailies = $user->logs()->where('event', 'Bookmark')
                ->whereDate('created_at', '=', Carbon::today()
                ->toDateString())
                ->count();

            if ($dailies < 3) {
                $user->points = $user->points + 1;
                $user->cumulative_points = $user->cumulative_points + 1;

                if ($user->save()) {
                    $user->logs()->create([
                        'event' => 'Bookmark',
                        'point_get' => 1
                    ]);
                }
            }
        }

        return response()->json([
            'message' => 'penanda berhasil dirubah',
            'points' => $user->points
        ]);
    }
}
