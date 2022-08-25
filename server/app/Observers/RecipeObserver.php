<?php

namespace App\Observers;

use App\Recipe;
use Illuminate\Support\Str;

class RecipeObserver
{
    /**
     * Handle the blog "saving" event.
     *
     * @param  \App\Recipe  $blog
     * @return void
     */
    public function saving(Recipe $recipe)
    {
        if (!$recipe->slug) {
            $recipe->slug = Str::slug($recipe->name) . '-' . Str::random(5);
        }

        if (!$recipe->meta_title) {
            $recipe->meta_title = $recipe->name;
        }

        if (!$recipe->meta_desc) {
            $recipe->meta_desc = $recipe->name;
        }
    }
}
