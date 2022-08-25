<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\User;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('username');
            $table->string('fullname');
            $table->string('email')->unique();
            $table->date('birthday')->nullable();
            $table->text('description')->nullable();
            $table->string('phone')->nullable();
            $table->string('avatar')->nullable()->default(null);
            $table->string('password');
            $table->string('type')->default('user');
            $table->string('api_token', 80)->nullable()->unique()->default(null);
            $table->string('device_token')->nullable();
            $table->string('reset_code')->nullable();
            $table->datetime('reset_code_valid_at')->nullable();
            $table->boolean('newsletter')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
