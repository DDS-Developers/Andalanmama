<?php

use Illuminate\Database\Seeder;
use App\User;
use App\RecipeBook;
use App\RecipeSchedule;
use App\Inbox;
use App\Comment;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = factory(User::class)->create([
            'username' => 'usertest',
            'fullname' => 'Test Test',
            'email' => 'bosco.kadin@example.com',
            'password' => \Hash::make('password')
        ]);

        $data = [
            [
                'recipe' => [
                    'name' => 'Kue Kepiting',
                    'description' => 'Cemilan enak untuk sore hari',
                    'time' => 60,
                    'attachment' => 'recipes/filma/salmon-bakar-lemon/Step_4.jpg',
                    'status' => 1,
                    'portion' => 2,
                    'approved' => 1,
                    'approved_at' => Carbon::now()
                ],
                'steps' => [
                    [
                        'step' => 1,
                        'description' => 'Gorenglah bawang putih, bawang bombay, seledri, jahe dan cabai merah hingga tercium wangi.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ],
                    [
                        'step' => 2,
                        'description' => 'Tambahkan daging ikan dan udang, baru masukkan kepiting. Tambahkan minyak cabai, kunyit bubuk, dan bumbui dengan Seasoning Powder dan lada hitam, aduk merata.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ],
                    [
                        'step' => 3,
                        'description' => 'Masukkan campuran tadi ke dalam mangkuk dan tunggu hingga mendidih.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ],
                    [
                        'step' => 4,
                        'description' => 'Aduk mayones, saus tomat, tepung roti hingga merata.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ],
                    [
                        'step' => 5,
                        'description' => 'Gulung campuran ini menjadi bola berukuran kurang lebih 40 gr (sekitar 15 buah) dan bentuklah menjadi kue.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ],
                    [
                        'step' => 6,
                        'description' => 'Celupkan bola kue kedalam tepung terigu dan telur kocok, lalu lapisi dengan tepung roti.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ],
                    [
                        'step' => 7,
                        'description' => 'Gorenglah bola kue hingga berwarna emas kecoklatan, keringkan dengan paper towel dan sajikan.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ]
                ],
                'ingredients' => [
                    [
                        'ingredient' => '200 gr Daging Kepiting',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Udang',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Fillet Ikan Cod',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Garam, & lada hitam',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Daun Seledri',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Bawang Putih',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Jahe',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Cabe Merah',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Minyak Cabai',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Bubuk Kunyit',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Saus Tomat',
                        'type' => 'ingredient'
                    ]
                ],
                'tags' => [1, 9]
            ],
            [
                'recipe' => [
                    'name' => 'Kue Kepiting Pending',
                    'description' => 'Cemilan enak untuk sore hari',
                    'time' => 60,
                    'attachment' => 'recipes/filma/salmon-bakar-lemon/Step_4.jpg',
                    'status' => 0,
                    'portion' => 2
                ],
                'steps' => [
                    [
                        'step' => 1,
                        'description' => 'Gorenglah bawang putih, bawang bombay, seledri, jahe dan cabai merah hingga tercium wangi.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ],
                    [
                        'step' => 2,
                        'description' => 'Tambahkan daging ikan dan udang, baru masukkan kepiting. Tambahkan minyak cabai, kunyit bubuk, dan bumbui dengan Seasoning Powder dan lada hitam, aduk merata.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ],
                    [
                        'step' => 3,
                        'description' => 'Masukkan campuran tadi ke dalam mangkuk dan tunggu hingga mendidih.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ],
                    [
                        'step' => 4,
                        'description' => 'Aduk mayones, saus tomat, tepung roti hingga merata.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ],
                    [
                        'step' => 5,
                        'description' => 'Gulung campuran ini menjadi bola berukuran kurang lebih 40 gr (sekitar 15 buah) dan bentuklah menjadi kue.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ],
                    [
                        'step' => 6,
                        'description' => 'Celupkan bola kue kedalam tepung terigu dan telur kocok, lalu lapisi dengan tepung roti.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ],
                    [
                        'step' => 7,
                        'description' => 'Gorenglah bola kue hingga berwarna emas kecoklatan, keringkan dengan paper towel dan sajikan.',
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                    ]
                ],
                'ingredients' => [
                    [
                        'ingredient' => '200 gr Daging Kepiting',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Udang',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Fillet Ikan Cod',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Garam, & lada hitam',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Daun Seledri',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Bawang Putih',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Jahe',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Cabe Merah',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Minyak Cabai',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Bubuk Kunyit',
                        'type' => 'ingredient'
                    ],
                    [
                        'ingredient' => 'Saus Tomat',
                        'type' => 'ingredient'
                    ]
                ],
                'tags' => [1, 9]
            ]
        ];

        foreach ($data as $dt) {
            $recipe = $user->recipe()->save(factory(\App\Recipe::class)->make($dt['recipe']));

            if ($recipe) {

                $recipe->createIngredient($dt['ingredients']);
                $recipe->createStep($dt['steps']);
                $recipe->tags()->sync($dt['tags']);
    
                if ($recipe->status == 1) {
                    $user->recipebook()->save(
                        factory(RecipeBook::class)->make([
                            'title' => 'Cemilan Seafood',
                            'recipes' => array($recipe->id),
                            'approved' => 1,
                            'approved_at' => Carbon::now()
                        ])
                    );
        
                    $user->recipebook()->save(
                        factory(RecipeBook::class)->make([
                            'title' => 'Cemilan Seafood Pending',
                            'recipes' => array($recipe->id),
                            'status' => 0
                        ])
                    );

                    $user->schedule()->save(
                        factory(RecipeSchedule::class)->states('today')->make([
                            'shift' => 1,
                            'main_recipe' => $recipe->id,
                            'alt_recipe' => array($recipe->id, $recipe->id)
                        ])
                    );
        
                    $user->schedule()->save(
                        factory(RecipeSchedule::class)->states('today')->make([
                            'shift' => 2,
                            'main_recipe' => $recipe->id,
                            'alt_recipe' => array($recipe->id, $recipe->id)
                        ])
                    );
        
                    $user->schedule()->save(
                        factory(RecipeSchedule::class)->make([
                            'schedule_date' => Carbon::now('+07:00')->addDay()->format('Y-m-d'),
                            'shift' => 2,
                            'main_recipe' => $recipe->id,
                            'alt_recipe' => array($recipe->id, $recipe->id)
                        ])
                    );
        
                    $user->schedule()->save(
                        factory(RecipeSchedule::class)->make([
                            'schedule_date' => Carbon::now('+07:00')->addDays(3)->format('Y-m-d'),
                            'shift' => 2,
                            'main_recipe' => $recipe->id,
                            'alt_recipe' => array($recipe->id, $recipe->id)
                        ])
                    );

                    $user->comments()->save(
                        factory(Comment::class)->make([
                            'recipe_id' => 27
                        ])
                    );
                }
            }
        }

        factory(Inbox::class)->create();
    }
}
