<?php

use Illuminate\Database\Seeder;
use App\User;
use App\RecipeBook;
use Carbon\Carbon;

class RecipeBookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::where('type', 'admin')->first();

        $admin->recipebook()->save(
            factory(RecipeBook::class)->make([
                'title' => 'Kumpulan Resep Sarapan Pagi',
                'recipes' => array(1, 2, 3, 4, 5),
                'approved' => 1,
                'approved_at' => Carbon::now()

            ])
        );

        $admin->recipebook()->save(
            factory(RecipeBook::class)->make([
                'title' => 'Kumpulan Resep Makan Siang',
                'recipes' => array(6, 7, 8, 9, 10),
                'approved' => 1,
                'approved_at' => Carbon::now()
            ])
        );

        $admin->recipebook()->save(
            factory(RecipeBook::class)->make([
                'title' => 'Kumpulan Resep Makan Malam',
                'recipes' => array(11, 12, 13, 14, 15),
                'approved' => 1,
                'approved_at' => Carbon::now()
            ])
        );
    }
}
