<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Recipe;
use App\Jobs\Recipetopdf;

class UpdateRecipeAddPdflink extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('recipes', function (Blueprint $table) {
            $table->string('pdflink')->nullable()->after('like_count');
        });

        $recipes = Recipe::all();

        foreach ($recipes as $recipe) {
            Recipetopdf::dispatch($recipe);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('recipes', function (Blueprint $table) {
            $table->dropColumn('pdflink');
        });
    }
}
