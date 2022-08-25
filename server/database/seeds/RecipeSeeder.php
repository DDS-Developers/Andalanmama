<?php

use Illuminate\Database\Seeder;
use App\Recipe;
use App\RecipeIngredient;
use App\RecipeStep;
use App\User;
use Carbon\Carbon;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (env('APP_ENV') == 'staging') {
            $admin = factory(User::class)->states('admin')->create([
                'username' => 'filma',
                'fullname' => 'Filma',
                'email' => 'admin@andalanmama.com',
                'password' => \Hash::make('password')
            ]);

            $data = [
                [
                    'recipes' => [
                        'name' => 'Salmon bakar dengan sauce lemon margarine Filma',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/salmon-bakar-lemon/Step_4.jpg',
                        'status' => 1,
                        'portion' => 2,
                        'highlight' => 1,
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Panaskan panci.',
                            'attachment' => 'recipes/filma/salmon-bakar-lemon/Step_2.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Bumbui salmon fillet dengan Cajun powder, Garam, & lada hitam',
                            'attachment' => 'recipes/filma/salmon-bakar-lemon/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Pan fried salmon dengan sedikit minyak hingga matang.',
                            'attachment' => 'recipes/filma/salmon-bakar-lemon/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Sajikan dengan sauce lemon margarine',
                            'attachment' => 'recipes/filma/salmon-bakar-lemon/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Untuk sauce, tumis bawang putih dengan margarine filma hingga harum di sauce pan',
                            'attachment' => 'recipes/filma/salmon-bakar-lemon/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Setelah itu masukan lemon juice, air, rosemary fresh dan tomato cherry. Masak hingga reduce.',
                            'attachment' => 'recipes/filma/salmon-bakar-lemon/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tambahkan Garam, Gula, bubuk kaldu ayam & lada hitam sesuai selera.',
                            'attachment' => 'recipes/filma/salmon-bakar-lemon/Step_7.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '200 gr Salmon fillet',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tsp Cajun powder',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3 tbsp Filma minyak goreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garam, & lada hitam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Sauce',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '2 pcs bawang putih, sliced',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5 pcs tomato cherry',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 pcs lemon juice',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ cup air',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 cup Filma margarine',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 pcs rosemary fresh',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garam, Gula, bubuk kaldu ayam & lada hitam',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 9]
                ],
                [
                    'recipes' => [
                        'name' => 'Daging Sirloin Bakar dengan Chimicuri Sauce',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/sirloin-chimicuri/Step_3.jpg',
                        'status' => 1,
                        'portion' => 2,
                        'recommend' => 1
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Bumbui daging sirloin dengan filma minyak goreng, kecap manis, Cajun powder, ketumbar bubuk, garam, gula, bubuk kaldu sapi, dan lada hitam hingga merata',
                            'attachment' => 'recipes/filma/sirloin-chimicuri/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Panaskan panggangan, lalu bakar daging dengan tingkat kematengan
                            - Well done 9-10 menit
                            - Medium well 7-8 menit
                            - Medium 5-6 menit
                            - Medium rare 3-4 menit
                            - Rare 1-2 menit
                            sambil di oles dengan filma margarine dan kecap manis diatasnya.',
                            'attachment' => 'recipes/filma/sirloin-chimicuri/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Angkat dan sajikan dengan sauce chimicuri',
                            'attachment' => 'recipes/filma/sirloin-chimicuri/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Untuk sauce, masukan semua bahan sauce kedalam food prosesor/ blender setengah kasar',
                            'attachment' => 'recipes/filma/sirloin-chimicuri/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Angkat dan siap sajikan dengan daging bakar',
                            'attachment' => 'recipes/filma/sirloin-chimicuri/Step_5.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '200 gr	daging sirloin',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 tbsp	filma minyak goreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tbsp	Cajun powder',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tsp	ketumbar bubuk',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garam, Gula, bubuk kaldu sapi & lada hitam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 tbsp filma margarine',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ cup filma kecap manis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Sauce',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '2 pcs bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3 pcs bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3 pcs cabe hijau besar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 pcs jeruk nipis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ cup daun ketumbar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '¼ cup parsley',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tbsp	oregano',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '¾ cup Filma minyak sayur',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garam, Gula, & lada putih',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 2, 3]

                ],
                [
                    'recipes' => [
                        'name' => 'Cumi Pelangi',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/cumi-pelangi/plating.jpg',
                        'status' => 1,
                        'portion' => 2,
                        'recommend' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Potong Cumi asin yang sudah dicuci jadi 2 bagian',
                            'attachment' => 'recipes/filma/cumi-pelangi/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Iris Cabe Ijo besar, cabe merah bsar, cabe keriting cabe rawit',
                            'attachment' => 'recipes/filma/cumi-pelangi/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Iris bawang putih, bawang merah',
                            'attachment' => 'recipes/filma/cumi-pelangi/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Belah 2 pete',
                            'attachment' => 'recipes/filma/cumi-pelangi/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Kemudian Rebus Cumi Asin selama 5 menit agar mengurangi rasa asin.',
                            'attachment' => 'recipes/filma/cumi-pelangi/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tumis bawang merah, bawang putih dengan Minyak Filma hingga harum',
                            'attachment' => 'recipes/filma/cumi-pelangi/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu masukkan cumi asin dan pete, aduk aduk hingga pete ½ matang,',
                            'attachment' => 'recipes/filma/cumi-pelangi/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu masukkan cabe ijo besar, cabe keriting, cabe rawit, lalu beri rasa dengan gula, garam, dan lada sesuai selera.',
                            'attachment' => 'recipes/filma/cumi-pelangi/Step_8.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '200gr Cumi Asin',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5bh Cabe ijo besar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3bh Cabe merah besar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5bh Cabe Keriting',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2bh Cabe Rawit',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '6b Bawang Putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '7bh Bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3papan Pete',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4sdm Minyak Filma',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Gula, garam, lada',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garnish: 1/2bh Jeruk Nipis',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 2]

                ],
                [
                    'recipes' => [
                        'name' => 'Opor Ayam',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/opor-ayam/Step_8.jpg',
                        'status' => 1,
                        'portion' => 2,
                        'recommend' => 3
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Memarkan Jahe,',
                            'attachment' => 'recipes/filma/opor-ayam/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Memarkan lengkuas',
                            'attachment' => 'recipes/filma/opor-ayam/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Memarkan serai',
                            'attachment' => 'recipes/filma/opor-ayam/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Blender bumbu halus dengan air',
                            'attachment' => 'recipes/filma/opor-ayam/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tumis bumbu halus hingga harum,',
                            'attachment' => 'recipes/filma/opor-ayam/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu tambahkan Kaldu Ayam, lengkuas, sereh, daun salam, ayam. Masak hingga ayam matang.',
                            'attachment' => 'recipes/filma/opor-ayam/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tuang santan kental, gula jawa, garam, lalu masak kembali dengan api kecil hingga kuah menyusut, dan sekali kali diaduk agar santan tidak pecah.',
                            'attachment' => 'recipes/filma/opor-ayam/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Sajikan dengan taburan bawang goreng',
                            'attachment' => 'recipes/filma/opor-ayam/Step_8.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '1ekor Ayam potong 12',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '500ml Santan kental',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '500ml Kaldu ayam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2ruas Lengkuas',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2btg serai',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2ruas Jahe',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1batang Kayu manis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 Bunga pekak',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5bh Kapulaga',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3lmbr daun salam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ sdm gula jawa',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdt Gula pasir',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ sdm garam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4sdm Minyak',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bumbu halus',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '10siung bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5siung bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5btr kemiri sangrai',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1½ sdt lada',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ sdm Ketumbar sangrai',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdt jinten sangrai',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukupnya air',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 2, 3]
                ],
                [
                    'recipes' => [
                        'name' => 'Lemper Goreng Abon',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/lemper-abon/Platting.jpg',
                        'status' => 1,
                        'portion' => 2,
                        'recommend' => 4
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Memarkan Serai',
                            'attachment' => ''
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Kukus Beras ketan selama 15 menit, lalu angkat.',
                            'attachment' => 'recipes/filma/lemper-abon/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Pada panci rebus air, santan kental, batang serai, daun salam, garam hingga mendidih,',
                            'attachment' => 'recipes/filma/lemper-abon/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'lalu masukkan beras ketan masak hingga air abis atau saat dengan api kecil. angkat',
                            'attachment' => 'recipes/filma/lemper-abon/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Kemudian kukus beras ketan selama 30 menit hingga nasi matang. Lalu angkat.',
                            'attachment' => 'recipes/filma/lemper-abon/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu cetak diisi dengan abon,',
                            'attachment' => 'recipes/filma/lemper-abon/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lapisi permukaan lemper dengan tepung panir,',
                            'attachment' => 'recipes/filma/lemper-abon/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Dan goreng hingga berubah warna menjadi kecoklatan.',
                            'attachment' => 'recipes/filma/lemper-abon/Step_8.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '250gr Beras Ketan yang sudah direndam 1jam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2lmbr daun Salam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 batang serai (memar)',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100ml Santan kental',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '50ml Air kaldu ayam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukupnya Garam dan lada',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '250gr Abon Ayam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '200gr Tepung Panir',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '250ml Minyak untuk menggoreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garnish Daun Pisang',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [7, 8, 9]
                ],
                [
                    'recipes' => [
                        'name' => 'Ikan Dory Goreng Tepung',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/dory-tepung/Step_6.jpg',
                        'status' => 1,
                        'portion' => 2,
                        'recommend' => 5
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Bumbui ikan dory dengan Cajun powder, salt & black pepper',
                            'attachment' => 'recipes/filma/dory-tepung/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tuang air soda & air dingin di mixing bowl, lalu masukan tepung terigu, garam, bubuk kaldu ayam. Aduk rata menggunakan ballon whisk.',
                            'attachment' => 'recipes/filma/dory-tepung/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Baluri ikan dory yang sudah di bumbui dengan tepung kering, lalu masukan ikan dori tersebut kedalam adonan basah.',
                            'attachment' => 'recipes/filma/dory-tepung/Step_4.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Panaskan minyak goreng Filma di panci. Setelah panas masak ikan dory tersebut hingga berwarna coklat keemas an. Angkat dan tiriskan.',
                            'attachment' => 'recipes/filma/dory-tepung/Step_5.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Sajikan dengan sauce tar tar dan slice lemon.',
                            'attachment' => 'recipes/filma/dory-tepung/Step_6.jpg'
                        ],
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '200 gr dory fillet',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tsp Cajun powder',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 can air soda',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '200 gr tepung terigu',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 cup air dingin',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100 ml Filma minyak goreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '250gr Beras Ketan yang sudah direndam 1jam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 sachet tar tar sauce / mayonaise',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garam, bubuk kaldu ayam & lada hitam',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [4, 5, 6]
                ],
                [
                    'recipes' => [
                        'name' => 'Ikan Kakap Goreng dengan Thai Basil Sauce',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/kakap-goreng-thai/Step_5.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Bumbui ikan kakap dengan bawang putih, minyak wijen, Garam, Gula, bubuk kaldu ayam & lada putih',
                            'attachment' => 'recipes/filma/kakap-goreng-thai/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Setelah tercampur rata masukan sedikit tepung terigu dan telor lalu aduk rata.',
                            'attachment' => 'recipes/filma/kakap-goreng-thai/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Campur tepung terigu dan tepung sagu di mixing bowl. Lalu masukan ikan yang sudah dicampur telor kedalam mixing bowl. Baluri semua ikan dengan tepung.',
                            'attachment' => 'recipes/filma/kakap-goreng-thai/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Panaskan Filma minyak goreng di wajan, setelah panas goreng  ikan yang sudah tercampur tepung tadi hingga matang berwarna coklat keemas an. Angkat dan tiriskan.',
                            'attachment' => 'recipes/filma/kakap-goreng-thai/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Sajikan, siram dengan sauce thai basil dan garnish daun ketumbar diatasnya.',
                            'attachment' => 'recipes/filma/kakap-goreng-thai/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Untuk sauce, tumis bawang putih dan jamur shintake dengan Filma margarine hingga harum.',
                            'attachment' => 'recipes/filma/kakap-goreng-thai/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Setelah itu masukan air, sambal Bangkok, plum sauce, daun basil, dan daun bawang. Masak hingga mendidih.',
                            'attachment' => 'recipes/filma/kakap-goreng-thai/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tambahkan Garam, Gula, bubuk kaldu ayam & lada putih sesuai selera.',
                            'attachment' => 'recipes/filma/kakap-goreng-thai/Step_8.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '200 gr ikan kakap fillet',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tbsp minyak wijen',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tsp bawang putih, chop',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 cup tepung terigu',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3 cup tepung sagu',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 pcs telor ayam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '500 ml Filma minyak goreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garam, Gula, bubuk kaldu ayam & lada putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Sauce',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '2 pcs bawang putih, chop',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 cup sambal Bangkok',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 tbsp plum sauce',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '8 pcs daun basil, sliced',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 cup air kaldu',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 pcs daun bawang, potong miring',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 pack jamur shintake, sliced',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tbsp Filma Margarine',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garam, Gula, bubuk kaldu ayam & lada putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garnish daun ketumbar',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 2, 3]
                ],
                [
                    'recipes' => [
                        'name' => 'Ayam Goreng Tepung Corn Flakes',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/ayam-goreng-cornflakes/Step_7.jpg',
                        'status' => 1,
                        'portion' => 2,
                        'youtube' => 'https://www.youtube.com/embed/5KhEdxuJC5E'
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Bumbui ayam dengan Cajun powder, L&P sauce, mustard, oregano, Garam, bubuk kaldu ayam & lada hitam. Aduk sampai rata.',
                            'attachment' => 'recipes/filma/ayam-goreng-cornflakes/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Pecahkan telor di mangkuk terpisah. Kocok sampai cair.',
                            'attachment' => ''
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Blender kasar corn flakes dan tepung roti taruh di mangkuk.',
                            'attachment' => 'recipes/filma/ayam-goreng-cornflakes/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tuang tepung terigu di mangkuk terpisah dan tuang ayam yang sudah dibumbui tadi kedalamnya. Aduk rata.',
                            'attachment' => 'recipes/filma/ayam-goreng-cornflakes/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu masukan ke dalam mangkok yang berisi telor, baluri sampai rata. Tuang satu per satu ayam ke dalam mangkok berisi tepung roti dan corn flakes, panir lagi sampai habis.',
                            'attachment' => 'recipes/filma/ayam-goreng-cornflakes/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Panaskan Filma minyak goreng didalam panci hingga panas lalu goreng ayam tadi sampai mateng berwarna coklat keemas an. Tiriskan',
                            'attachment' => 'recipes/filma/ayam-goreng-cornflakes/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Siap disajikan dengan sauce honey mustard mayo.',
                            'attachment' => 'recipes/filma/ayam-goreng-cornflakes/Step_7.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '200 gr	dada ayam fillet',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 pcs telor ayam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100 gr corn flakes',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '30 gr tepung roti',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tbsp	Cajun powder',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tsp oregano dry',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 tbsp	mustard',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tsp lea and perin sauce',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 cup tepung terigu',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 cup mayonnaise',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tbsp	madu',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '500 ml	filma minyak goreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garam, Gula, bubuk kaldu ayam & lada hitam',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [7, 8, 9]
                ],
                [
                    'recipes' => [
                        'name' => 'Ayam Goreng Gulung isi Bayam, Ham, dan Keju',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/ayam-goreng-gulung/Step_8.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Bumbui ayam dengan Cajun powder, L&P sauce, mustard, oregano, Garam, Gula, Bubuk kaldu ayam & lada putih. Aduk sampai rata.',
                            'attachment' => 'recipes/filma/ayam-goreng-gulung/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tumis bawang putih dengan filma margarine, bayam jepang dan cream hingga mateng. Sisihkan.',
                            'attachment' => 'recipes/filma/ayam-goreng-gulung/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Siapkan ayam yang sudah di bumbui tadi di cutting board, lalu taruh smoked beef sliced, tumisan bayam jepang dan mozarella ditengah tengah lalu gulung hingga semua tertutup.',
                            'attachment' => 'recipes/filma/ayam-goreng-gulung/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Pecahkan telor di mangkuk terpisah. Kocok sampai cair.',
                            'attachment' => ''
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Taruh tepung roti di mangkuk terpisah dan satukan dengan tepung roti.',
                            'attachment' => 'recipes/filma/ayam-goreng-gulung/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tuang tepung terigu di mangkuk terpisah dan tuang ayam yang sudah digulung tadi kedalamnya. Aduk rata.',
                            'attachment' => 'recipes/filma/ayam-goreng-gulung/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu masukan ke dalam mangkok yang berisi telor, baluri sampai rata. Tuang gulungan ayam ke dalam mangkok berisi tepung roti, panir sampai rata.',
                            'attachment' => 'recipes/filma/ayam-goreng-gulung/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Panaskan Filma minyak goreng didalam panci hingga panas lalu goreng ayam tadi sampai mateng berwarna coklat keemas an. Tiriskan dan siap disajikan.',
                            'attachment' => 'recipes/filma/ayam-goreng-gulung/Step_8.jpg'
                        ],
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '200 gr	dada ayam fillet',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 pcs telor ayam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100 gr	corn flakes',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tbsp	Cajun powder',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tsp oregano dry',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 tbsp	mustard',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tsp lea and perin sauce',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 cup tepung terigu',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ cup bayam jepang',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 pcs bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ cup cream cooking',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 pcs smoked beef slice',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ cup mozzarella cheese',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '500 ml	filma minyak goreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garam, Gula, bubuk kaldu ayam & lada putih',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [5, 6, 8]
                ],
                [
                    'recipes' => [
                        'name' => 'Dendeng Suwir Balado',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/dendeng-suwir-balado/Platting.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Ulek ketumbar, bawang putih dan garam. ',
                            'attachment' => 'recipes/filma/dendeng-suwir-balado/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Rebus daging dengan bumbu ulek hingga stgh matang. angkat',
                            'attachment' => 'recipes/filma/dendeng-suwir-balado/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Iris daging tipis tipis',
                            'attachment' => ''
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Goreng daging sampai matang. ',
                            'attachment' => ''
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Suwir suwir dendeng',
                            'attachment' => 'recipes/filma/dendeng-suwir-balado/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Blender cabe keriting, cabe rawit, bawang merah, dengan air .',
                            'attachment' => 'recipes/filma/dendeng-suwir-balado/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tumis bumbu halus dan daun jeruk hingga berubah warna',
                            'attachment' => 'recipes/filma/dendeng-suwir-balado/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'lalu masukan suwiran dendeng, beri rasa dengan garam dan gula, aduk jadi satu.',
                            'attachment' => 'recipes/filma/dendeng-suwir-balado/Platting.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '500gr daging sapi has',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdt ketumbar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2bh bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2sdt garam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '500ml air Kaldu sapi',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '250ml Minyak untuk menggoreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bumbu Balado',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '3lmbr daun jeruk',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Haluskan',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '8btr bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '60gr cabe Keriting',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '20gr cabe rawit',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukupnya air',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 2, 3]
                ],
                [
                    'recipes' => [
                        'name' => 'Soto Banjar',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/soto-banjar/Step_8.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Blender bumbu halus',
                            'attachment' => 'recipes/filma/soto-banjar/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tumis bumbu halus , cengkeh, daun salam, daun jeruk, biji pala hingga harum dengan minyak Filma',
                            'attachment' => 'recipes/filma/soto-banjar/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tambahkan air kaldu ayam. Rebus hingga mendidih, ',
                            'attachment' => 'recipes/filma/soto-banjar/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'lalu masukkan ayam, masak ayam hingga matang, lalu angkat. ',
                            'attachment' => 'recipes/filma/soto-banjar/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Kemudian beri rasa pada kuah dengan gula, garam, lada. Setelah mendidih, angkat.',
                            'attachment' => 'recipes/filma/soto-banjar/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Goreng dada ayam hingga berubah warna jd kecoklatan. Lalu angkat',
                            'attachment' => 'recipes/filma/soto-banjar/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Suwir ayam.',
                            'attachment' => 'recipes/filma/soto-banjar/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Susun di mangkok, soun, ketupat, ayam suwir, perkedel, dan telur rebus. Taburi seledri dan bawang goreng, sajikan bersama sambal dan jeruk nipis',
                            'attachment' => 'recipes/filma/soto-banjar/Step_8.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '250gr Dada ayam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '600ml Kaldu Ayam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '22btr Cengkeh',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1btg kayu manis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2lmbr daun salam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2lmbr daun jeruk',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ biji pala',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '200ml Minyak untuk menggoreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bumbu Halus',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '10btr Bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5btr Bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2ruas lengkuas',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1ruas jahe',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4btr Kemiri sangrai',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '20ml minyak',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Pelengkap',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '1 butir Telur Ayam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 buah Ketupat',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 buah Perkedel Kentang',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '30 gr Soun',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bawang Goreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Seledri',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Air jeruk nipis',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [8, 9]
                ],
                [
                    'recipes' => [
                        'name' => 'Perkedel Tempe Kornet',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/perkedel-tempe-kornet/Platting.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Kukus tempe selama 10 menit',
                            'attachment' => 'recipes/filma/perkedel-tempe-kornet/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Rebus cabe, bawang, dan kencur agar rasanya tidak mentah,',
                            'attachment' => 'recipes/filma/perkedel-tempe-kornet/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Ulek bumbu halus, ',
                            'attachment' => 'recipes/filma/perkedel-tempe-kornet/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Haluskan tempe dengan garpu, ',
                            'attachment' => 'recipes/filma/perkedel-tempe-kornet/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu campurkan dengan tepung maizena, putih telur, kornet, irisan daun jeruk, dan bumbu halus, aduk rata.',
                            'attachment' => 'recipes/filma/perkedel-tempe-kornet/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Bentuk adonan jadi lonjong',
                            'attachment' => 'recipes/filma/perkedel-tempe-kornet/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lapisi adonan dengan putih telur',
                            'attachment' => 'recipes/filma/perkedel-tempe-kornet/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu goreng hingga bewarna kecoklatan.',
                            'attachment' => 'recipes/filma/perkedel-tempe-kornet/Step_8.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '300gr Tempe kukus 10 menit',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2sdm Tepung Maizena',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1btr Putih Telur',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3lmbr daun jeruk iris',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100gr kornet',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '200ml Minyak untuk menggoreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1btr putih telur untuk pelapis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bumbu halus',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '2bh Cabe rawit',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '6bh Cabe keriting',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4siung Bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2siung bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2cm kencur',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdt terasi',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ sdt garam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdt gula',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ sdt lada',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [8, 9]

                ],
                [
                    'recipes' => [
                        'name' => 'Tahu Cabe Garam',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/tahu-cabe-garam/Platting.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Potong tahu jadi kotak- kotak',
                            'attachment' => 'recipes/filma/tahu-cabe-garam/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Cincang bawang putih, ',
                            'attachment' => 'recipes/filma/tahu-cabe-garam/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Iris cabe rawit,',
                            'attachment' => 'recipes/filma/tahu-cabe-garam/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Pada wadah campurkan lada, garam, tepung jadi satu,',
                            'attachment' => 'recipes/filma/tahu-cabe-garam/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'lalu gulingkan tahu diatasnya',
                            'attachment' => 'recipes/filma/tahu-cabe-garam/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Goreng tahu dgn minyak panas hingga berubah kecoklatan dan tiriskan.',
                            'attachment' => 'recipes/filma/tahu-cabe-garam/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tumis bawang putih hingga harum, ',
                            'attachment' => 'recipes/filma/tahu-cabe-garam/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu masuk rawit, aduk aduk. Masukan tahu yang sudah digoreng. Kemudian beri rasa dengan garam, gula, lada sesuai selera. Sajikan dengan taburan daun bawang',
                            'attachment' => 'recipes/filma/tahu-cabe-garam/Step_8.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '1bh Tahu putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100gr Tepung terigu',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5siung bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '7bh rawit',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garam, gula, lada',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '200ml Minyak untuk Menggoreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garnish 1btg daun bawang',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [6, 7, 8]

                ],
                [
                    'recipes' => [
                        'name' => 'Ekado Ikan',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/ekado-ikan/platting.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tumis bawang putih, lalu angkat.',
                            'attachment' => 'recipes/filma/ekado-ikan/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Pada food processor masukan semua bahan isi, lalu blend hingga halus,',
                            'attachment' => 'recipes/filma/ekado-ikan/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Rendam kulit tahu dalam air, lalu tiriskan.',
                            'attachment' => 'recipes/filma/ekado-ikan/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Cetak ekado  dengan kulit kembang tahu, lalu ikat dengan kucai. ',
                            'attachment' => 'recipes/filma/ekado-ikan/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Kukus ekado selama 10menit',
                            'attachment' => 'recipes/filma/ekado-ikan/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu Goreng dengan minyak panas hingga kecoklatan.',
                            'attachment' => 'recipes/filma/ekado-ikan/Step_6.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '6lmbr kulit kembang tahu, cuci, lalu potong persegi',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Kucai untuk mengikat',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '250ml Minyak untuk menggoreng,',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4sdm minyak filma',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '6 butir Telur puyuh rebus',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Isi',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '350gr daging ikan tenggiri',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '65gr tepung sagu',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5siung bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1btr Telur',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ sdt kecap ikan',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ sdm minyak wijen',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garam dan lada',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 4, 7]
                ],
                [
                    'recipes' => [
                        'name' => 'Nasi Pindang Daging',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/nasi-pindang-daging/Platting.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Rebus Babat dengan daun jeruk, dan daun salam',
                            'attachment' => 'recipes/filma/nasi-pindang-daging/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Memarkan jahe,',
                            'attachment' => 'recipes/filma/nasi-pindang-daging/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Memarkan serai,',
                            'attachment' => 'recipes/filma/nasi-pindang-daging/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Memarkan lengkuas',
                            'attachment' => 'recipes/filma/nasi-pindang-daging/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Blender bumbu halus dengan air',
                            'attachment' => 'recipes/filma/nasi-pindang-daging/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tumis bumbu halus, daun jerukm daun salam, sereh, lengkuas, jahe hingga harum',
                            'attachment' => 'recipes/filma/nasi-pindang-daging/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu masukan air kaldu sapi, daging sapi, babat, kecap manis, masak hingga daging matang.',
                            'attachment' => 'recipes/filma/nasi-pindang-daging/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Masukkan santan, air asam, daun melinjo lalu masak hingga daun melinjo matang, lalu angkat.',
                            'attachment' => 'recipes/filma/nasi-pindang-daging/Step_8.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '250gr Daging Sapi sandung lamur potong dadu',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '250gr babat sapi, rebus matang, potong dadu',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Rebus dengan 2lmbr daun jeruk dan 1 lmbr daun salam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2lmbr daun salam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3lmbr daun Jeruk',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1btg Serai',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1ruas Jahe',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1ruas lengkuas',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdm Air asam jawa',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2sdm Kecap manis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '200ml Santan kental',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '250ml Air kaldu Sapi',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '150gr daun melinjo muda',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3sdm minyak filma',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bumbu halus',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '6siung Bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5siung bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ sdm ketumbar. Sangrai',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ sdt jintan, sangrai',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3bh Keluwek (rendam air hangat)',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2sdm Gula merah iris',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garam, lada',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Pelengkap',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => 'bawang putih goreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Nasi putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'kerupuk kulit sapi',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [6, 7]
                ],
                [
                    'recipes' => [
                        'name' => 'Daging Masak Kurma dengan Rothi Paratha',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/daging-masak-kurma/Step_4.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Blender halus bawang putih, bawang merah, bawang bombai, kunyit, ketumbar, pala, sereh, dan jahe dengan Filma minyak goreng. Lalu masak hingga matang.',
                            'attachment' => 'recipes/filma/daging-masak-kurma/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu masukan kayu manis, cengkeh, kapolaga, star annis, tomato paste, kecap manis, daun kari, air, santan, wortel, kentang, kurma, dan daging tenderloin kedalam panci. Aduk hingga rata dan masak sampai daging empuk.',
                            'attachment' => 'recipes/filma/daging-masak-kurma/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Kasih Garam, Gula, Penyedap & lada putih sesuai selera dan tambahkan kacang polong.',
                            'attachment' => 'recipes/filma/daging-masak-kurma/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Aduk -aduk. Masak lagi hingga bumbu meresap. Sajikan dengan rothi canai/paratha.',
                            'attachment' => 'recipes/filma/daging-masak-kurma/Step_4.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '25 gr kunyit',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '70 gr bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '50 gr bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '30 gr bawang bombay',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '60 gr ketumbar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '60 ml minyak',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tsp Cengkeh',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 pcs pala',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '30 gr jahe',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '60 gr Curry Powder madras',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tsp Star Anise',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '15 gr batang sereh',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tsp kapolaga',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tbsp	daun kari',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 cm kayu manis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 tbsp	tomato paste',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 tbsp	kecap manis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 cup santan',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100 ml	air',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '200 gr	beef tenderloin',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '50 gr kurma',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 pcs wortel',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 pcs kentang',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 cup kacang polong',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 2, 3, 9]
                ],
                [
                    'recipes' => [
                        'name' => 'Sup Konro',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/sup-konro/Step_5.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Rebus iga hingga lunak dan sisihkan.',
                            'attachment' => 'recipes/filma/sup-konro/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Blender bumbu halus,',
                            'attachment' => 'recipes/filma/sup-konro/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tumis bumbu halus, kapulaga, bunga pekak, cengkeh, daun jeruk, kayu manis hingga harum',
                            'attachment' => 'recipes/filma/sup-konro/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tambahkan air kaldu dari rebusan iga sapi, daging iga sapi, kecap manis, air asam, rebus kembali hingga mendidih.',
                            'attachment' => 'recipes/filma/sup-konro/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Sajikan dan beri pelengkap',
                            'attachment' => 'recipes/filma/sup-konro/Step_5.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '1kg Iga Sapi',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2L air untuk merebus iga',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3sdm Kecap Manis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5sdm Air asam Jawa',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '8biji Cengkeh',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5bh kapulaga',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3bh Bunga pekak',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1btg Kayu manis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4lmbr Daun Jeruk',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4sdm Minyak Filma',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bumbu Halus',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '6bh Keluwak ( rendam dalam air panas sebentar lalu tiriskan)',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '8siung Bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdm Ketumbar sangrai',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2ruas Kunyit Bakar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukupnya Air',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 2, 3, 8, 9]
                ],
                [
                    'recipes' => [
                        'name' => 'Tempe Bumbu Bali',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/tempe-bumbu-bali/Platting.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Potong tempe menjadi kotak kotak kecil',
                            'attachment' => 'recipes/filma/tempe-bumbu-bali/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Iris serai,',
                            'attachment' => 'recipes/filma/tempe-bumbu-bali/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Iris daun jeruk',
                            'attachment' => 'recipes/filma/tempe-bumbu-bali/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Blender bumbu halus',
                            'attachment' => 'recipes/filma/tempe-bumbu-bali/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Goreng tempe hingga kecoklatan',
                            'attachment' => 'recipes/filma/tempe-bumbu-bali/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tumis bumbu halus dan sereh, daun jeruk  hingga harum dan matang, ',
                            'attachment' => 'recipes/filma/tempe-bumbu-bali/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu tambahkan kecap manis, garam, lada aduk hingga kental, ',
                            'attachment' => 'recipes/filma/tempe-bumbu-bali/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Kemudian tambahkan tempe, aduk semua jadi satu. Sajikan',
                            'attachment' => 'recipes/filma/tempe-bumbu-bali/Platting.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '250gr Tempe',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1btg Serai Iris',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2lmbr daun jeruk',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '200ml Minyak untuk menumis dan menggoreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3sdm minyak goreng filma',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3sdm Kecap manis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukupnya garam lada',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bumbu halus',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '3bh Cabe merah besar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '6siung bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4siung bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3cm jahe',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukpnya air',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 2, 3, 4, 7, 8]

                ],
                [
                    'recipes' => [
                        'name' => 'Soto Tangkar Kambing',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/soto-tangkar-kambing/Step_8.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Rebus daging kambing hingga lunak, angkat. ',
                            'attachment' => 'recipes/filma/soto-tangkar-kambing/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Blender bumbu halus dengan minyak.',
                            'attachment' => 'recipes/filma/soto-tangkar-kambing/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Memarkan Serai',
                            'attachment' => 'recipes/filma/soto-tangkar-kambing/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Memarkan Jahe',
                            'attachment' => 'recipes/filma/soto-tangkar-kambing/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Memarkan Lengkuas',
                            'attachment' => 'recipes/filma/soto-tangkar-kambing/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tumis bumbu halus, lengkuas, daunjeruk, daun salam, serai, jahe, kayu manis, cengkeh. Hingga harum. ',
                            'attachment' => 'recipes/filma/soto-tangkar-kambing/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu tambahkan air rebusan daging kambing, biarkan mendidih.',
                            'attachment' => 'recipes/filma/soto-tangkar-kambing/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tambahkan santan dan daging. Mendidih, angkat. Sajikan',
                            'attachment' => 'recipes/filma/soto-tangkar-kambing/Step_8.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '500gr daging kambing',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '700ml Air untuk merebus daging',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '300ml santan kental',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2sdm Kecap OJS',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2ruas lengkuas memar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3lmbr daun jeruk',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2lmbr daun salam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2btg serai memar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3ruas jahe memar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '8cm kayu manis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '8btr cengkeh',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukupnya gula, garam,lada',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bumbu halus',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '8btr Bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4btr bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3bh cabe merah besar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '7bh Cabe keriting',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4ruas kunyit',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4btr kemiri sangrai',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdt jinten sangrai',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdm ketumbar sangrai',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '50ml Minyak',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 6, 7]

                ],
                [
                    'recipes' => [
                        'name' => 'Rendang Bola Daging Telur Puyuh',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Campurkan daging dengan gula,garam, lada, bubuk pala, kecap, telur, tepung panir, bawang merah. Aduk jadi satu,',
                            'attachment' => 'recipes/filma/rendang-bola-daging/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu bulatkan dan isi dengan telur puyuh.',
                            'attachment' => 'recipes/filma/rendang-bola-daging/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Panaskan minyak Filma lalu goreng bola bola daging hingga kecoklatan.',
                            'attachment' => 'recipes/filma/rendang-bola-daging/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Blender bumbu halus.',
                            'attachment' => 'recipes/filma/rendang-bola-daging/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu semua bumbu rendang dan santan dimasak dengan api kecil selama 3jam atau hingga berubah warna.',
                            'attachment' => 'recipes/filma/rendang-bola-daging/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Beri rasa dengan gula, garam dan lada,',
                            'attachment' => 'recipes/filma/rendang-bola-daging/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Siram bola bola daging dengan bumbu rendang.',
                            'attachment' => 'recipes/filma/rendang-bola-daging/Step_7.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '500gr daging sapi giling',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1btr telur',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2sdm bawang goreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdm Kecap manis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdt bubuk pala',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2sdm tepung panir',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '15btr Telur puyuh rebus',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100ml minyak untuk menggoreng',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukupnya garam, lada',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bumbu rendang',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '1L Santan',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2lmbr daun kunyit',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4lmbr daun jeruk',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2btg sere memar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukupnya garam, lada',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bumbu halus',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '14bh bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '8bh bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100gr cabe keriting',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '50gr Cabe rawit',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2ruas jahe',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2ruas lengkuas',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukupnya minyak',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdt Ketumbar sangrai',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [4, 5, 9]

                ],
                [
                    'recipes' => [
                        'name' => 'Tongkol Suwir Kemangi',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/tongkol-suwir-kemangi/Platting.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Goreng ikan hingga matang dengan minyak Filma, ',
                            'attachment' => 'recipes/filma/tongkol-suwir-kemangi/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'lalu suir dagingnya.',
                            'attachment' => 'recipes/filma/tongkol-suwir-kemangi/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Iris cabe merah besar, ',
                            'attachment' => 'recipes/filma/tongkol-suwir-kemangi/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Potong tomat, ',
                            'attachment' => 'recipes/filma/tongkol-suwir-kemangi/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Blender bumbu halus ',
                            'attachment' => 'recipes/filma/tongkol-suwir-kemangi/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tumis bumbu halus, daun jeruk hingga harum. ',
                            'attachment' => 'recipes/filma/tongkol-suwir-kemangi/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu masukkan ikan suir, gula,garam,lada, kecap manis aduk hingga tercampur rata.',
                            'attachment' => 'recipes/filma/tongkol-suwir-kemangi/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Terakhir daun kemangi, tomat,dan cabe merah besar . Aduk. angkat.',
                            'attachment' => 'recipes/filma/tongkol-suwir-kemangi/Step_8.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '1ekor ikan Tongkol yang sudah di cuci bersih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2ikat daun kemangi',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1bh Cabe merah besar iris',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4lmbr daun jeruk iris',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1bh tomat iris',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdm Kecap manis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3sdm Minyak',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bumbu halus',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '5bh bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4bh bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1bh cabe merah besar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4bh cabe keriting',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1ruas lengkuas',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Air',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 4, 6]

                ],
                [
                    'recipes' => [
                        'name' => 'Ayam Taliwang',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/ayam-taliwang/Step_5.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tusuk-tusuk ayam dengan garpu agar bumbu lebih meresap pada saat diungkep dengan bumbu.',
                            'attachment' => 'recipes/filma/ayam-taliwang/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Blender bumbu halus dengan air',
                            'attachment' => 'recipes/filma/ayam-taliwang/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Ungkep ayam dengan bumbu halus, gula merah, kecap manis, garam, gula, lada, dan air kaldu ayam hingga air berkurang.',
                            'attachment' => 'recipes/filma/ayam-taliwang/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Panggang ayam diatas teflon sambil diolesi bumbu sisa ungkepan',
                            'attachment' => 'recipes/filma/ayam-taliwang/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Garnish dengan jeruk limau',
                            'attachment' => 'recipes/filma/ayam-taliwang/Step_5.jpg'
                        ],
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '1 ekor ayam potong 4',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2sdm kecap manis',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdm gula merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '400ml Air Kaldu Ayam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukupnya gula, garam, lada',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '4sdm Minyak',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bumbu halus',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '12siung bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '10siung bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '10bh cabe keriting',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5bh cabe merah besar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '10bh cabe rawit',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdt teras',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2ruas kencur',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1sdt ketumbar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Air',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1bh tomat',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [7, 8, 9]
                ],
                [
                    'recipes' => [
                        'name' => 'Black Pancake',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/black-pancake/Platting.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Campurkan semua bahan tepung segitiga, susu segar, baking powder, cocoa powder, telor, dan gula. Aduk sampai rata menggunakan ballon whisk.',
                            'attachment' => 'recipes/filma/black-pancake/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Cairkan filma margarine di panci, lalu masukan ke adonan tadi. Aduk rata.',
                            'attachment' => 'recipes/filma/black-pancake/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Panaskan Teflon dan tuang adonan diatasnya. Masak sampai matang. Sisihkan.',
                            'attachment' => 'recipes/filma/black-pancake/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Siapkan cream cheese dan cream cooking di mangkok dan aduk sampai tercampur rata dengan ballon whisk.',
                            'attachment' => 'recipes/filma/black-pancake/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Oleskan adonan cream cheese ke pancake yang sudah matang.',
                            'attachment' => 'recipes/filma/black-pancake/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Sajikan dengan garnish strawberry, ice cream, dan madu diatasnya',
                            'attachment' => 'recipes/filma/black-pancake/Platting.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '200 gr	tepung segitiga',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '250 ml	susu segar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '8 gr baking powder',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '110 gr	sugar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '50 gr cocoa powder',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3 pcs telor',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Filling',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '100 gr	filma margarine',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100 gr	cream cheese',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100 gr	cream cooking',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Topping',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '1 cup Strawberry ice cream',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100 gr	strawberry fresh',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100 gr	madu',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [6, 7, 8]

                ],
                [
                    'recipes' => [
                        'name' => 'Durian Puff with Coconut Cream Sauce',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/durian-puff/Platting.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Rebus filma margarine dan air sampai mendidih.',
                            'attachment' => 'recipes/filma/durian-puff/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Matikan api dan Tuang tepung, gula, baking powder, garam lalu aduk sampai kalis.',
                            'attachment' => ''
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Diamkan adonan sampai dingin lalu masukan telor. Aduk lagi hingga rata.',
                            'attachment' => ''
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Masukan adonan ke dalam plastic segitiga dan cetak bulat di Loyang oven.',
                            'attachment' => 'recipes/filma/durian-puff/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Panaskan oven 185 c dan panggang kurang lebih 20 menit sampai adonan menggembang.',
                            'attachment' => 'recipes/filma/durian-puff/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Untuk filling puff, campur daging durian dengan parutan keju dan masukan kedalam plastic segitiga dan tusuk masuk kedalam adonan puff yang sudah mengembang tadi.',
                            'attachment' => 'recipes/filma/durian-puff/Step_6.jpg'
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Untuk saucenya, blender daging durian, santan, gula pasir dan air sampai halus. ',
                            'attachment' => 'recipes/filma/durian-puff/Step_7.jpg'
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Sajikan dengan puff durian.',
                            'attachment' => 'recipes/filma/durian-puff/Step_8.jpg'
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '100 gr filma margarine',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '250 ml	air',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '125 gr	tepung segitiga',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3 pcs telor',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 sdm gula',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ sdt baking powder',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'garam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Filling',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '2 cup daging durian',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ cup keju cheddar parut',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Sauce',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '250 ml santan',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '250 ml	air',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '½ cup daging durian',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 tbsp	gula pasir',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 7, 9]

                ],
                [
                    'recipes' => [
                        'name' => 'Matcha Chocolate Lava Cake',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/macha-cake/Step_6.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lelehkan margarine dan dark chocolate di atas air mendidih sampai meleleh. Sisihkan.',
                            'attachment' => 'recipes/filma/macha-cake/Step_1.jpg'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Aduk telor, kuning telor, dan gula sampai mengembang dengan hand mixer',
                            'attachment' => 'recipes/filma/macha-cake/Step_2.jpg'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Masukan baking powder, tepung segitiga dan tepung matcha kedalam adonan. Aduk rata.',
                            'attachment' => 'recipes/filma/macha-cake/Step_3.jpg'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Lalu aduk perlahan sambil masukan adonan coklat yang meleleh tadi ke dalamnya.',
                            'attachment' => 'recipes/filma/macha-cake/Step_4.jpg'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tuang adonan ke dalam mangkok kecil anti panas dan masukan coklat blok matcha ditengahnya. Panggang didalam oven dengan suhu 185 c selama 15 menit sampai adonan menggembang.',
                            'attachment' => 'recipes/filma/macha-cake/Step_5.jpg'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Tuang di piring saji. Garnish dengan tepung matcha, gula bubuk, strawberry dan ice cream vanilla di sampingnya.',
                            'attachment' => 'recipes/filma/macha-cake/Step_6.jpg'
                        ],
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '250 gr	Filma margarine',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '250 gr	dark chocolate compound',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '8 gr baking powder',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5 pcs telor',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '5 pcs kuning telor',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '150 gr	gula',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '60 gr tepung segitiga',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '25 gr tepung matcha/ green tea',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 cup coklat matcha blok',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Topping',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '1 cup vanilla ice cream',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 pcs strawberry, garnish',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tbsp	gula bubuk',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 tbsp	matcha bubuk',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [4, 5, 6]

                ],
                [
                    'recipes' => [
                        'name' => 'Pie Es Teler',
                        'description' => 'Lorem Ipsum Dolor Sit Amet',
                        'time' => 12,
                        'attachment' => 'recipes/filma/pie-es-teler/Platting.jpg',
                        'status' => 1,
                        'portion' => 2
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Buat tart dengan mengaduk margarine, gula halus, kuning telur hingga rata',
                            'attachment' => ''
                        ],
                        [
                            'step' => 2,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Beri tepung terigu pada adonan dan aduk hingga rata. Uleni dengan menggunakan tangan. Setelah rata, wrap adonan dan diamkan hingga 15menit',
                            'attachment' => ''
                        ],
                        [
                            'step' => 3,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Bagi adonan untuk di cetak pada cetakan pie sebanyak 35gram. Bentuk adonan menggunakan tangan pada cetakan',
                            'attachment' => ''
                        ],
                        [
                            'step' => 4,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Panggang adonan pada suhu 160c dengan waktu 40 menit hingga kecoklatan',
                            'attachment' => ''
                        ],
                        [
                            'step' => 5,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Untuk isian, masukkan dan aduk bahan-bahan isian hingga mengental dan mendidih. Masukkan margarine dan kelapa muda. Aduk, sisihkan dan dinginkan',
                            'attachment' => ''
                        ],
                        [
                            'step' => 6,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Susun dengan urutan adonan tart, isi dengan filling dan ratakan. Kemudian tunggu hingga setengah dingin',
                            'attachment' => ''
                        ],
                        [
                            'step' => 7,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Beri topping alpukat, nangka dan nata de coco ke atas pie',
                            'attachment' => ''
                        ],
                        [
                            'step' => 8,
                            'title' => 'Lorem Ipsum',
                            'description' => 'Garnish dengan daun pandan dan ceri merah',
                            'attachment' => ''
                        ]
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '125gr Margarine FILMA',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '60gr Gula Halus',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukupnya Garam',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2buah Kuning Telur',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '200gr Tepung',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Bahan Isian',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '200gr Santan',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100gr Susu Cair',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2buah Kuning Telur',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '100gr Gula Pasir',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '12gr Tepung Maisena',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '30gr Margarine FILMA',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Topping',
                            'type' => 'group'
                        ],
                        [
                            'ingredient' => '75gr Daging Kelapa Muda Segar',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '75gr Nata de Coco',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '75gr Alpukat',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '75gr Buah Nangka',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukupnya Daun Pandan',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Secukupnya	Ceri Merah',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 2, 3]
                ],
                [
                    'recipes' => [
                        'name' => 'Krengsengan Iga Sapi',
                        'description' => 'Masakan khas Jawa Timur yang membuat Anda serasa berada di daerah asalnya. Lembut Iga sapi dengan kuah gurih berbalut kecap manis akan menjadi hidangan yang pas untuk disantap dengan nasi putih yang hangat.',
                        'time' => 140,
                        'attachment' => 'recipes/filma/krengsengan-iga-sapi/krengsengan-iga-sapi.jpg',
                        'status' => 1,
                        'portion' => 2,
                        'youtube' => 'https://www.youtube.com/embed/hKN0gzCEPqs'
                    ],
                    'steps' => [
                        [
                            'step' => 1,
                            'title' => 'Marinasi dan Diamkan',
                            'description' => 'Masukkan iga sapi ke dalam wadah dan campurkan secara perlahan kecap, marinasi sampai merata kemudian diamkan di dalam lemari es selama 30 menit',
                            'attachment' => 'recipes/filma/krengsengan-iga-sapi/step-1.png'
                        ],
                        [
                            'step' => 2,
                            'title' => 'Blender hingga halus bumbu',
                            'description' => 'Bawang merah, bawah putih, cabai merah keriting, kunyit, jahe, minyak.',
                            'attachment' => 'recipes/filma/krengsengan-iga-sapi/step-2.png'
                        ],
                        [
                            'step' => 3,
                            'title' => 'Masak bumbu halus',
                            'description' => 'Gunakan wajan untuk memasak bumbu halus lalu masukkan kunyit yang sudah dimemarkan lalu masukkan marinasi iga sapi dan aduk hingga merata dan masak hingga matang',
                            'attachment' => 'recipes/filma/krengsengan-iga-sapi/step-3.png'
                        ],
                        [
                            'step' => 4,
                            'title' => 'Rebus iga hingga lunak',
                            'description' => 'Tambahkan air ke dalam wajan, lalu rebus hingga lunak selama kurang lebih 90 menit.',
                            'attachment' => 'recipes/filma/krengsengan-iga-sapi/step-4.png'
                        ],
                        [
                            'step' => 5,
                            'title' => 'Tambahkan bumbu penyedap rasa',
                            'description' => 'Potong tomat kotak, Tambahkan garam dan lada secukupnya. ',
                            'attachment' => 'recipes/filma/krengsengan-iga-sapi/step-5.png'
                        ],
                        [
                            'step' => 6,
                            'title' => 'Sajikan',
                            'description' => 'Krengsengan Iga Sapi siap disajikan',
                            'attachment' => 'recipes/filma/krengsengan-iga-sapi/step-6.png'
                        ],
                    ],
                    'ingredients' => [
                        [
                            'ingredient' => '8 potong iga sapi',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '150 ml Kecap Cap Orang Jual Sate',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '10 siung bawang merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '6 siung bawang putih',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '10 buah cabai merah keriting',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 cm kunyit',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3 cm jahe',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '90 ml Minyak Goreng Filma',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '3 cm lengkuas utuh',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '2 buah tomat merah',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => '1 liter air mineral',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Garam secukupnya',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Lada secukupnya',
                            'type' => 'ingredient'
                        ],
                        [
                            'ingredient' => 'Cabai rawit secukupnya',
                            'type' => 'ingredient'
                        ]
                    ],
                    'tags' => [1, 2, 3]
                ]
            ];

            foreach ($data as $dt) {
                $dt['recipes']['approved'] = 1;
                $dt['recipes']['approved_at'] = Carbon::now();
                $recipe = $admin->recipe()->save(factory(\App\Recipe::class)->make($dt['recipes']));

                if ($recipe) {

                    $recipe->createIngredient($dt['ingredients']);
                    $recipe->createStep($dt['steps']);
                    $recipe->tags()->sync($dt['tags']);
                }
            }
        } else {
            $user = factory(User::class)->create();

            $recipe = $user->recipe()->save(
                factory(Recipe::class)->make()
            );

            $recipe->ingredient()->saveMany(
                factory(\App\RecipeIngredient::class, 3)->make()
            );

            $recipe->step()->saveMany(
                factory(\App\RecipeStep::class, 7)->make()
            );

            $user->recipe()->saveMany(factory(Recipe::class, 20)->make());

            $admin = factory(User::class)->states('admin')->create();
            $admin->recipe()->saveMany(factory(Recipe::class, 50)->make());
        }
    }
}
