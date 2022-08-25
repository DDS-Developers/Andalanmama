<?php

namespace App\Policies;

use App\User;
use App\RecipeSchedule;
use Illuminate\Auth\Access\HandlesAuthorization;

class RecipeSchedulePolicy
{
    use HandlesAuthorization;

    public function store(User $user)
    {
        return true;
    }
    
    public function update(User $user, RecipeSchedule $schedule)
    {
        return $user->id == $schedule->user_id;
    }

    public function destroy(User $user, RecipeSchedule $schedule)
    {
        return $user->id == $schedule->user_id;
    }
}
