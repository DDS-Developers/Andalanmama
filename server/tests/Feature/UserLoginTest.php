<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserLoginTest extends TestCase
{
    use RefreshDatabase;

    public function test_as_a_user_i_can_login()
    {
        // Given
        $user = factory(\App\User::class)->create([
            'email' => 'foo@bar.com'
        ]);

        $data = [
            'email'     => 'foo@bar.com',
            'password'  => 'password'
        ];

        // When
        $response = $this->json('POST', 'login', $data);

        // Then
        $response->assertStatus(200);

        $this->assertDatabaseHas('users', [
            'email' => 'foo@bar.com'
        ]);
    }

    public function test_as_a_user_i_cant_login_if_field_is_empty()
    {
        // Given
        $user = factory(\App\User::class)->create([
            'email' => 'foo@bar.com'
        ]);

        $data = [
            'email'     => '',
            'password'  => 'password'
        ];

        // When
        $response = $this->json('POST', 'login', $data);

        // Then
        $response->assertStatus(422);

        // Given
        $data = [
            'email'     => 'foo@bar.com',
            'password'  => ''
        ];

        // When
        $response = $this->json('POST', 'login', $data);

        // Then
        $response->assertStatus(422);
    }

    public function test_as_a_user_i_cant_login_if_credential_not_match()
    {
        // Given
        $user = factory(\App\User::class)->create([
            'email' => 'foo@bar.com'
        ]);

        $data = [
            'email'     => 'foo@bar.com',
            'password'  => 'password1'
        ];

        // When
        $response = $this->json('POST', 'login', $data);

        // Then
        $response->assertStatus(422);
    }
}
