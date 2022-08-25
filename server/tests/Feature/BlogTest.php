<?php

namespace Tests\Feature;

use Illuminate\Support\Arr;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BlogTest extends TestCase
{
    use RefreshDatabase;

    public function test_as_user_i_can_only_see_published_data()
    {
        // Given
        $user = factory(\App\User::class)->create();
        $admin = factory(\App\User::class)->state('admin')->create();
        $token = $user->roleToken();

        // Draft
        $admin->blog()->saveMany(factory(\App\Blog::class, 7)->make());
        $admin->blog()->saveMany(factory(\App\Blog::class, 5)->state('published')->make());

        // When
        $response = $this->apiAs($token, 'GET', 'article');

        // Then
        $response->assertStatus(200);
        $response->assertJsonCount(5, 'data');
    }

    public function test_as_user_i_can_see_single_published_blog()
    {
        // Given
        $user = factory(\App\User::class)->create();
        $admin = factory(\App\User::class)->state('admin')->create();
        $token = $user->roleToken();

        $published = $admin->blog()->save(factory(\App\Blog::class)->state('published')->make());
        $draft = $admin->blog()->save(factory(\App\Blog::class)->make());

        // When published
        $response = $this->json('GET', 'article/'. $published->id);

        // Then
        $response->assertStatus(200);
        $response->assertJson($published->toArray());

        // When draft
        $response = $this->json('GET', 'article/'. $draft->id);

        // Then
        $response->assertStatus(404);
    }

    public function test_as_a_user_i_can_see_highlighter_blog()
    {
        // Given
        $user = factory(\App\User::class)->create();
        $admin = factory(\App\User::class)->state('admin')->create();
        $token = $user->roleToken();

        // Draft
        $admin->blog()->saveMany(factory(\App\Blog::class, 7)->make());
        $admin->blog()->saveMany(factory(\App\Blog::class, 5)->state('highlighted')->make());

        // When
        $response = $this->apiAs($token, 'GET', 'article/?highlight=true');

        // Then
        $response->assertStatus(200);
        $response->assertJsonCount(5, 'data');
    }
}
