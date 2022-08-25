<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\Recipe::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->sentence,
        'time' => $faker->randomDigitNotNull,
        'attachment' => 'test.jpg',
        'status' => 1,
        'portion' => 2,
        'slug' => ''
    ];
});
