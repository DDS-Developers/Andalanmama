<?php

namespace Tests\Feature;

use Illuminate\Support\Arr;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Carbon\Carbon;

class RecipeBookTest extends TestCase
{
    use RefreshDatabase;

    public function test_as_a_user_i_can_create_recipebook()
    {
        // Given
        $user = factory(\App\User::class)->create();
        $token = $user->roleToken();
        $recipes = $user->recipe()->saveMany(
            factory(\App\Recipe::class,6)->make([
                'status' => 1,
                'approved' => 1,
                'approved_at' => Carbon::now()
            ])
        );

        $data = factory(\App\RecipeBook::class)->make([
            'recipes' => $recipes->pluck('id')
        ]);

        // When
        $response = $this->apiAs($token, 'POST', 'profile/collection', array_merge(
            Arr::except($data->toArray(), 'recipes'), ['recipes' => $recipes->pluck('id'), 'status' => 1]
        ));

        // Then
        $response->assertStatus(200);
        $this->assertDatabaseHas('recipe_books', [
            'title' => $data->title,
            'status' => 0,
            'recipes' => json_encode($recipes->pluck('id'))
        ]);
    }

    public function test_as_a_guest_i_can_not_create_recipebook()
    {
        // Given
        $user = factory(\App\User::class)->create();
        $token = $user->roleToken();
        $recipes = $user->recipe()->saveMany(
            factory(\App\Recipe::class,6)->make()
        );

        $data = factory(\App\RecipeBook::class)->make([
            'recipes' => $recipes->pluck('id')
        ]);

        // When
        $response = $this->apiAs(null, 'POST', 'profile/collection', $data->toArray());

        // Then
        $response->assertStatus(401);
    }

    public function test_as_a_user_i_can_update_recipebook()
    {
        // Given
        $user = factory(\App\User::class)->create();
        $token = $user->roleToken();
        $recipes = $user->recipe()->saveMany(
            factory(\App\Recipe::class,6)->make([
                'status' => 1,
                'approved' => 1,
                'approved_at' => Carbon::now()
            ])
        );

        // User Recipebook
        $book = $user->recipebook()->save(
            factory(\App\RecipeBook::class)->make([
                'recipes' => $recipes->pluck('id')
            ])
        );

        $data = factory(\App\RecipeBook::class)->make([
            'recipes' => $recipes->pluck('id')
        ]);

        // When
        $response = $this->apiAs($token, 'PUT', 'profile/collection/'.$book->id, array_merge(
            Arr::except($data->toArray(), 'recipes'), ['recipes' => $recipes->pluck('id'), 'status' => 1]
        ));

        // Then
        $response->assertStatus(200);

        $this->assertDatabaseHas('recipe_books', [
            'title' => $data->title,
            'status' => 1,
            'recipes' => json_encode($recipes->pluck('id'))
        ]);
    }

    public function test_as_a_guest_i_cant_update_recipebook()
    {
        // Given
        $user = factory(\App\User::class)->create();
        $token = $user->roleToken();
        $recipes = $user->recipe()->saveMany(
            factory(\App\Recipe::class,6)->make()
        );

        // User Recipebook
        $book = $user->recipebook()->save(
            factory(\App\RecipeBook::class)->make([
                'recipes' => $recipes->pluck('id')
            ])
        );

        $data = factory(\App\RecipeBook::class)->make([
            'recipes' => $recipes->pluck('id')
        ]);

        // When
        $response = $this->apiAs(null, 'PUT', 'profile/collection/'.$book->id, $data->toArray());

        // Then
        $response->assertStatus(401);
    }

    public function test_as_a_user_i_can_delete_recipe_book()
    {
        // Given
        $user = factory(\App\User::class)->create();
        $token = $user->roleToken();
        $recipes = $user->recipe()->saveMany(
            factory(\App\Recipe::class,6)->make()
        );

        // User Recipebook
        $book = $user->recipebook()->save(
            factory(\App\RecipeBook::class)->make([
                'recipes' => $recipes->pluck('id')
            ])
        );

        // When
        $response = $this->apiAs($token, 'delete', 'profile/collection/'.$book->id);

        // Then
        $response->assertStatus(200);
    }

    public function test_as_a_guest_i_cant_delete_recipe_book()
    {
        // Given
        $user = factory(\App\User::class)->create();
        $token = $user->roleToken();
        $recipes = $user->recipe()->saveMany(
            factory(\App\Recipe::class,6)->make()
        );

        // User Recipebook
        $book = $user->recipebook()->save(
            factory(\App\RecipeBook::class)->make([
                'recipes' => $recipes->pluck('id')
            ])
        );

        // When
        $response = $this->apiAs(null, 'delete', 'profile/collection/'.$book->id);

        // Then
        $response->assertStatus(401);
    }
}
