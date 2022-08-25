<?php

namespace App\Policies;

use App\User;
use App\Recipe;
use Illuminate\Auth\Access\HandlesAuthorization;

class RecipePolicy
{
    use HandlesAuthorization;

    public function show(User $user)
    {
        return true;
    }

    public function store(User $user)
    {
        return true;
    }

    public function update(User $user, Recipe $recipe)
    {
        return $user->id == $recipe->user_id;
    }

    public function destroy(User $user, Recipe $recipe)
    {
        return $user->id == $recipe->user_id;
    }
}
