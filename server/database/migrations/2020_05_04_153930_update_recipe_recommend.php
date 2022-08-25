<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Recipe;

class UpdateRecipeRecommend extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('recipes', function (Blueprint $table) {
            $table->smallInteger('recommend')->nullable()->default(0)->change();
        });

        $recipes = Recipe::whereNull('recommend')->get();

        if ($recipes) {
            foreach ($recipes as $rec) {
                $rec->recommend = 0;
                $rec->save();
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
    }
}
