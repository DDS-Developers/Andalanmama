<?php

namespace App\Jobs;

use App\Recipe;
use Illuminate\Http\File;
use App\Helpers\PdfGenerator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class Recipetopdf implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $recipe;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Recipe $recipe)
    {
        $this->recipe = $recipe;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $pdf_info = PdfGenerator::generatePDF($this->recipe->id);

        if ($pdf_info) {
            if ($this->recipe->user->type == 'admin') {
                $path = 'recipes/filma';
            } else {
                $path = 'recipes/user/' . $this->recipe->user->id;
            }
            
            $filename = preg_replace('/\s+/', '_', $this->recipe->name.'.pdf');

            $upload = Storage::cloud()->putFileAs($path, new File($pdf_info), $filename, 'public');

            if ($upload) {
                unlink($pdf_info);
                $this->recipe->pdflink = $upload;
                $this->recipe->save();
            }
        }
    }
}
