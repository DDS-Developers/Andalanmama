<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Sitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $view = \View::make('sitemap', ['data' => [
            [
                'slug' => env('APP_URL'),
                'created_at' => now()->toAtomString(),
            ],
            [
                'slug' => env('APP_URL') . '/recipe',
                'created_at' => now()->toAtomString(),
            ],
            [
                'slug' => env('APP_URL') . '/article',
                'created_at' => now()->toAtomString(),
            ],
        ]])->render();
        \Storage::disk('public_path')->put('sitemap/index.xml', $view);

        $recipe = \App\Recipe::where('user_id', 1)->published()
            ->get()
            ->map(function ($item) {
                return [
                    'slug' => env('APP_URL') . '/recipe/detail/' . ($item->slug ?: $item->id),
                    'created_at' => $item->created_at->toAtomString()
                ];
            });

        $view = \View::make('sitemap', ['data' => $recipe])->render();
        \Storage::disk('public_path')->put('sitemap/recipe.xml', $view);

        $blog = \App\Blog::published()
            ->get()
            ->map(function ($item) {
                return [
                    'slug' => env('APP_URL') . '/article/detail/' . ($item->slug ?: $item->id),
                    'created_at' => $item->created_at->toAtomString()
                ];
            });

        $view = view('sitemap', ['data' => $blog])->render();
        \Storage::disk('public_path')->put('sitemap/article.xml', $view);
    }
}
