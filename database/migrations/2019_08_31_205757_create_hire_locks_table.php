<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHireLocksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hire_locks', function (Blueprint $table) {
            $table->bigInteger('hire_id')->unsigned()->unique();
            $table->boolean('locked')->default(0);

            $table->foreign('hire_id')->references('id')->on('hires')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hire_locks');
    }
}
