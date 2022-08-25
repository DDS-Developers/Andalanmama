<?php

use Faker\Generator as Faker;
use Carbon\Carbon;

$factory->define(App\RecipeSchedule::class, function (Faker $faker) {
    return [
        'schedule_date' => $faker->date(),
        'schedule_time' => $faker->time('H:i')
    ];
});

$factory->state(App\RecipeSchedule::class, 'today', function(Faker $faker) {
    return [
        'schedule_date' => Carbon::now()->format('Y-m-d')
    ];
});
