<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBlogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('slug')->nullable();
            $table->string('title');
            $table->text('body');
            $table->string('attachment')->nullable();
            $table->bigInteger('user_id');
            $table->boolean('status');
            $table->boolean('highlight')->default(0);
            $table->string('highlight_attachment')->nullable();
            $table->string('meta_title')->nullable()->default(null);
            $table->string('meta_desc')->nullable()->default(null);
            $table->dateTime('publish_at')->nullable();
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
        Schema::dropIfExists('blogs');
    }
}
