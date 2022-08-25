<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            TagSeeder::class,
            RecipeSeeder::class,
            ArticleSeeder::class,
            RecipeBookmarkSeeder::class,
            RecipeBookSeeder::class,
            UserSeeder::class
        ]);
    }
}
