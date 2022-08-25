<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BookmarkTest extends TestCase
{
    use RefreshDatabase;

    public function test_as_a_user_i_can_bookmark_recipe()
    {
        // Given
        $user = factory(\App\User::class)->create();
        $token = $user->roleToken();
        $admin = factory(\App\User::class)->state('admin')->create();
        $recipe = $admin->recipe()->save(
            factory(\App\Recipe::class)->make()
        );

        // When
        $response = $this->apiAs($token, 'POST', 'bookmark/'.$recipe->id);

        // Then
        $response->assertStatus(200);

        $this->assertDatabaseHas('bookmarks', [
            'user_id' => $user->id,
            'recipe_id' => $recipe->id
        ]);
    }

    public function test_as_a_user_i_can_unbookmark_recipe()
    {
        // Given
        $user = factory(\App\User::class)->create();
        $token = $user->roleToken();
        $admin = factory(\App\User::class)->state('admin')->create();
        $recipe = $admin->recipe()->save(
            factory(\App\Recipe::class)->make()
        );
        $user->bookmark()->toggle($recipe);

        // When
        $response = $this->apiAs($token, 'POST', 'bookmark/'.$recipe->id);

        // Then
        $response->assertStatus(200);

        $this->assertDatabaseMissing('bookmarks', [
            'user_id' => $user->id,
            'recipe_id' => $recipe->id
        ]);
    }

    public function test_as_a_guest_i_cant_bookmark_recipe()
    {
        // Given
        $admin = factory(\App\User::class)->state('admin')->create();
        $recipe = $admin->recipe()->save(
            factory(\App\Recipe::class)->make()
        );

        // When
        $response = $this->apiAs(null, 'POST', 'bookmark/'.$recipe->id);

        // Then
        $response->assertStatus(401);
    }
}
