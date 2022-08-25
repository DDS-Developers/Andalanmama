<?php

namespace App\Observers;

use App\Blog;
use Illuminate\Support\Str;

class BlogObserver
{
    /**
     * Handle the blog "saving" event.
     *
     * @param  \App\Blog  $blog
     * @return void
     */
    public function saving(Blog $blog)
    {
        if (!$blog->slug) {
            $blog->slug = Str::slug($blog->title) . '-' . Str::random(5);
        }

        if (!$blog->meta_title) {
            $blog->meta_title = $blog->title;
        }

        if (!$blog->meta_desc) {
            $blog->meta_desc = $blog->title;
        }
    }
}
