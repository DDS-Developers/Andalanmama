<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Blog;
use App\Recipe;
use Spatie\Browsershot\Browsershot;
use Spatie\Crawler\Crawler;
use Spatie\Sitemap\SitemapGenerator;
use Spatie\Sitemap\Tags\Url;

class SitemapController extends Controller
{
    public function createSitemap()
    {
        $browsershot = (new Browsershot())->noSandbox()->ignoreHttpsErrors();
        $path = public_path('sitemap.xml');
        $sitemap = SitemapGenerator::create(url('/'))
            ->configureCrawler(function (Crawler $crawler) use ($browsershot) {
                $crawler->setBrowsershot($browsershot);
            })
            ->hasCrawled(function (Url $url) {
                $uri = implode('/', $url->segments());
                $url->setUrl(config('app.url') . '/' . $uri);
                return $url;
            })
            ->getSitemap()
            // adding the base slug routes
            ->add(Url::create('/')->setPriority(0.9))
            ->add(Url::create('/recipe')->setPriority(0.9))
            ->add(Url::create('/article')->setPriority(0.9));

        $recipe = Recipe::where('user_id', 1)->published()->get();
        $recipe->each(function ($recipe) use (&$sitemap) {
            if ($recipe->slug != '') {
                $sitemap->add('/recipe/detail/' . $recipe->slug);
            } else {
                $sitemap->add('/recipe/detail/' . $recipe->id);
            }
        });

        $blog = Blog::published()->get();
        $blog->each(function ($blog) use (&$sitemap) {
            if ($blog->slug != '') {
                $sitemap->add('/article/detail/' . $blog->slug);
            } else {
                $sitemap->add('/article/detail/' . $blog->id);
            }
        });
        $sitemap->writeToFile($path);

        return redirect('web-admin')->with('status', 'Sitemap updated!');
    }
}
