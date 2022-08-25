<?php

use Faker\Generator as Faker;

$factory->define(App\RecipeStep::class, function (Faker $faker) {
    return [
        'step' => $faker->randomDigitNotNull,
        'description' => $faker->sentence(6, true),
        'attachment' => 'test.png'
    ];
});
