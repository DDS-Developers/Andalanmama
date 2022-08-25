<?php

use Faker\Generator as Faker;

$factory->define(App\Inbox::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'message' => $faker->paragraph(20)
    ];
});