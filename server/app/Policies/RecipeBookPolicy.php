<?php

namespace App\Policies;

use App\User;
use App\RecipeBook;
use Illuminate\Auth\Access\HandlesAuthorization;

class RecipeBookPolicy
{
    use HandlesAuthorization;

    public function show(User $user, RecipeBook $recipebook)
    {
        return $user->id == $recipebook->user_id;
    }

    public function store(User $user)
    {
        return true;
    }

    public function update(User $user, RecipeBook $recipebook)
    {
        return $user->id == $recipebook->user_id;
    }

    public function destroy(User $user, RecipeBook $recipebook)
    {
        return $user->id == $recipebook->user_id;
    }
}
