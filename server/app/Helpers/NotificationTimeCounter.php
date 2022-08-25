<?php

namespace App\Helpers;

use Carbon\Carbon;
use App\Recipe;

class NotificationTimeCounter
{
    public static function countTime($alt_recipe, $schedule_date, $schedule_time)
    {
        if (!$alt_recipe || count($alt_recipe) == 0) {
            return "";
        } else {
            $date = Carbon::parse($schedule_date)->format('Y-m-d');

            $fulldate = Carbon::parse($date.' '.$schedule_time);

            if (count($alt_recipe) == 1) {
                $recipe = Recipe::find($alt_recipe[0]);

                $fulldate->subMinutes((int) $recipe[0]['time']);
            } else {
                $recipes = Recipe::findMany($alt_recipe)->keyBy('id');

                $time_list = array_map(function ($id) use ($recipes) {
                    return $recipes[$id]['time'];
                }, $alt_recipe);

                foreach ($time_list as $time) {
                    $fulldate->subMinutes((int) $time);
                }
            }

            return $fulldate->format('Y-m-d H:i:s');
        }
    }
}
