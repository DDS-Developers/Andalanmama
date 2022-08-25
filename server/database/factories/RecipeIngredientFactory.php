<?php

use Faker\Generator as Faker;

$factory->define(App\RecipeIngredient::class, function (Faker $faker) {
    return [
        'ingredient' => $faker->sentence(2, true),
        'type' => 'ingredient',
    ];
});

$factory->state(App\RecipeIngredient::class, 'group', function(Faker $faker) {
    return [
        'ingredient' => $faker->randomElement($array = array ('Toping','Bahan Isian','Sauce', 'Bumbu halus', 'Pelengkap')) ,
        'type' => 'group',
    ];
});
