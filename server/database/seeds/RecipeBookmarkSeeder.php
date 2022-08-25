<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Recipe;

class RecipeBookmarkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::first();
        $recipe = Recipe::find(2);
        $user->bookmark()->toggle($recipe);
    }
}
