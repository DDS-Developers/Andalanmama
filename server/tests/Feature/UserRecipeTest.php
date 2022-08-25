<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserRecipeTest extends TestCase
{
    use RefreshDatabase;

    // public function test_as_a_user_i_can_create_recipe()
    // {
    //     // Given
    //     $user = factory(\App\User::class)->create();
    //     $token = $user->roleToken();

    //     $data = [
    //         'name' => 'Test1',
    //         'attachment' => 'test.png',
    //         'description' => 'description',
    //         'portion' => 1,
    //         'time' => 120,
    //         'ingredients' => [
    //             ['type' => 'ingredient', 'ingredient' => '1 ayam'],
    //             ['type' => 'ingredient', 'ingredient' => '1 gram kecap'],
    //             ['type' => 'ingredient', 'ingredient' => 'bumbu masak']
    //         ],
    //         'steps' => [
    //             [
    //                 'step' => 1,
    //                 'attachment' => 'test.png',
    //                 'description' => 'lorem ipsum'
    //             ],
    //             [
    //                 'step' => 2,
    //                 'attachment' => 'test.png',
    //                 'description' => 'dolor sit amet'
    //             ],
    //             [
    //                 'step' => 3,
    //                 'attachment' => 'test.png',
    //                 'description' => 'quo esta esa esta'
    //             ],
    //             [
    //                 'step' => 4,
    //                 'attachment' => 'test.png',
    //                 'description' => 'bigeum dolor que'
    //             ]
    //         ],
    //         'status' => 1,
    //         'tags' => [
    //             [
    //                 'id' => 1,
    //                 'name' => 'Meat'
    //             ],
    //             [
    //                 'id' => 2,
    //                 'name' => 'Fish'
    //             ]
    //         ]
    //     ];

    //     // When
    //     $response = $this->apiAs($token, 'POST', 'profile/recipe', $data);

    //     // Then
    //     $response->assertStatus(200);

    //     $this->assertDatabaseHas('recipes', [
    //         'name' => 'Test1',
    //         'description' => 'description',
    //         'portion' => 1,
    //         'time' => 120
    //     ]);

    //     $this->assertDatabaseHas('recipe_ingredients', [
    //         'ingredient' => '1 ayam'
    //     ]);

    //     $this->assertDatabaseHas('recipe_steps', [
    //         'step' => 2,
    //         'description' => 'dolor sit amet'
    //     ]);
    // }

    // public function test_as_a_user_i_can_update_my_own_recipe()
    // {
    //     // Given
    //     $user = factory(\App\User::class)->create();
    //     $token = $user->roleToken();
    //     $recipe = $user->recipe()->save(
    //         factory(\App\Recipe::class)->make()
    //     );

    //     $recipe_ingredient = $recipe->ingredient()->saveMany(
    //         factory(\App\RecipeIngredient::class, 3)->make()
    //     );

    //     $recipe_step = $recipe->step()->saveMany(
    //         factory(\App\RecipeStep::class, 7)->make()
    //     );

    //     $data = [
    //         'name' => 'Test1',
    //         'attachment' => 'test23.png',
    //         'description' => 'description',
    //         'portion' => 1,
    //         'time' => 120,
    //         'ingredients' => [
    //             ['type' => 'ingredient', 'ingredient' => '1 ayam'],
    //             ['type' => 'ingredient', 'ingredient' => '1 gram kecap'],
    //             ['type' => 'ingredient', 'ingredient' => 'bumbu masak']
    //         ],
    //         'steps' => [
    //             [
    //                 'step' => 1,
    //                 'attachment' => 'test23.png',
    //                 'description' => 'lorem ipsum'
    //             ],
    //             [
    //                 'step' => 2,
    //                 'attachment' => 'test23.png',
    //                 'description' => 'dolor sit amet'
    //             ],
    //             [
    //                 'step' => 3,
    //                 'attachment' => 'test23.png',
    //                 'description' => 'quo esta esa esta'
    //             ],
    //             [
    //                 'step' => 4,
    //                 'attachment' => 'test23.png',
    //                 'description' => 'bigeum dolor que'
    //             ]
    //         ],
    //         'status' => 1,
    //         'tags' => [
    //             [
    //                 'id' => 1,
    //                 'name' => 'Meat'
    //             ],
    //             [
    //                 'id' => 2,
    //                 'name' => 'Fish'
    //             ]
    //         ]
    //     ];

    //     // When
    //     $response = $this->apiAs($token, 'PUT', 'profile/recipe/'.$recipe->id, $data);

    //     // Then
    //     $response->assertStatus(200);

    //     $this->assertDatabaseHas('recipes', [
    //         'name' => 'Test1',
    //         'description' => 'description',
    //         'portion' => 1,
    //         'time' => 120
    //     ]);

    //     $this->assertDatabaseHas('recipe_ingredients', [
    //         'recipe_id' => $recipe->id,
    //         'ingredient' => '1 ayam'
    //     ]);

    //     $this->assertDatabaseHas('recipe_steps', [
    //         'recipe_id' => $recipe->id,
    //         'step' => 2,
    //         'description' => 'dolor sit amet'
    //     ]);
    // }
}
