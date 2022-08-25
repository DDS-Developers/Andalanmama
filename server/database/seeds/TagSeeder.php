<?php

use Illuminate\Database\Seeder;
use App\Tag;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tag::create(['name' => 'Chicken', 'attachment' => 'recipes/tags/category-chicken.png', 'status' => 1]);
        Tag::create(['name' => 'Fish', 'attachment' => 'recipes/tags/category-fish.png', 'status' => 1]);
        Tag::create(['name' => 'Meat', 'attachment' => 'recipes/tags/category-meat.png', 'status' => 1]);
        Tag::create(['name' => 'Vegetables', 'attachment' => 'recipes/tags/category-vegetables.png', 'status' => 1]);
        Tag::create(['name' => 'Pasta', 'attachment' => 'recipes/tags/category-pasta.png', 'status' => 1]);
        Tag::create(['name' => 'Egg', 'attachment' => 'recipes/tags/category-eggs.png', 'status' => 1]);
        Tag::create(['name' => 'Fruit', 'attachment' => 'recipes/tags/category-fruit.png', 'status' => 1]);
        Tag::create(['name' => 'Rice', 'attachment' => 'recipes/tags/category-rice.png', 'status' => 1]);
        Tag::create(['name' => 'Bread', 'attachment' => 'recipes/tags/category-bread.png', 'status' => 1]);
    }
}
