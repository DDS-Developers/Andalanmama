<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;
use App\Recipe;
use App\RecipeSchedule;

class RecipeScheduleTest extends TestCase
{
    use RefreshDatabase;

    public function test_as_a_user_i_can_make_recipe_schedule()
    {
        // Given
        $user = factory(User::class)->create();
        $token = $user->roleToken();
        $recipes = $user->recipe()->saveMany(
            factory(Recipe::class, 5)->make()
        );

        $first = $recipes->toArray();

        $data = [
            'schedule_date' => '2019-12-10',
            'schedule_time' => '12.00',
            'shift' => 2,
            'main_recipe' => $first[0]['id'],
            'alt_recipe' => $recipes->pluck('id')
        ];

        // When
        $response = $this->apiAs($token, 'POST', 'profile/schedule/', $data);

        // Then
        $response->assertStatus(200);

        $this->assertDatabaseHas('recipe_schedules', [
            'schedule_time' => $data['schedule_time'],
            'shift' => 2,
            'alt_recipe' => json_encode($data['alt_recipe'])
        ]);
    }

    public function test_as_a_guest_i_cant_create_collection()
    {
        // Given
        $user = factory(User::class)->create();
        $token = $user->roleToken();
        $recipes = $user->recipe()->saveMany(
            factory(Recipe::class, 5)->make()
        );

        $first = $recipes->toArray();

        $data = [
            'schedule_date' => '2019-12-10',
            'schedule_time' => '12.00',
            'shift' => 2,
            'main_recipe' => $first[0]['id'],
            'alt_recipe' => $recipes->pluck('id')
        ];

        // When
        $response = $this->apiAs(null, 'POST', 'profile/schedule/', $data);

        // Then
        $response->assertStatus(401);
    }

    public function test_as_a_user_i_can_update_collection()
    {
        // Given
        $user = factory(User::class)->create();
        $token = $user->roleToken();
        $recipes = $user->recipe()->saveMany(
            factory(Recipe::class, 5)->make()
        );

        $collection = $user->schedule()->save(
            factory(RecipeSchedule::class)->states('today')->make([
                'shift' => 2,
                'main_recipe' => $recipes->pluck('id')->first(),
                'alt_recipe' => $recipes->pluck('id')
            ])
        );

        $first = $recipes->toArray();

        $data = [
            'schedule_date' => '2019-12-10',
            'schedule_time' => '12.00',
            'shift' => 1,
            'main_recipe' => $first[0]['id'],
            'alt_recipe' => $recipes->pluck('id')
        ];

        // When
        $response = $this->apiAs($token, 'PUT', 'profile/schedule/'.$collection->id, $data);

        // Then
        $response->assertStatus(200);

        $this->assertDatabaseHas('recipe_schedules', [
            'schedule_time' => $data['schedule_time'],
            'shift' => 1,
            'alt_recipe' => json_encode($data['alt_recipe'])
        ]);
    }
}
