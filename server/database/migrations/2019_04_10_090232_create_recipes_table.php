<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('name')->nullable();
            $table->text('description')->nullable();
            $table->integer('portion')->nullable();
            $table->integer('time')->nullable();
            $table->string('attachment')->nullable();
            $table->integer('status')->default(0);
            $table->boolean('highlight')->default(0);
            $table->smallInteger('recommend')->nullable()->default(null);
            $table->string('youtube')->nullable()->default(null);
            $table->string('slug')->nullable();
            $table->string('meta_title')->nullable()->default(null);
            $table->string('meta_desc')->nullable()->default(null);
            $table->boolean('approved')->default(0);
            $table->dateTime('approved_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipes');
    }
}
