<?php

use Faker\Generator as Faker;

$factory->define(App\RecipeBook::class, function (Faker $faker) {
    return [
        'title' => $faker->name,
        'status' => 1
    ];
});
