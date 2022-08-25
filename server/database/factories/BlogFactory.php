<?php

use Faker\Generator as Faker;

$factory->define(App\Blog::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'body' => $faker->paragraph(20),
        'attachment' => 'test.jpg',
        'publish_at' => $faker->dateTime(),
        'status' => 0,
        'highlight' => 0
    ];
});

$factory->state(App\Blog::class, 'published', function (Faker $faker) {
    return [
        'status' => 1
    ];
});

$factory->state(App\Blog::class, 'highlighted', function (Faker $faker) {
    return [
        'status' => 1,
        'highlight' => 1
    ];
});
