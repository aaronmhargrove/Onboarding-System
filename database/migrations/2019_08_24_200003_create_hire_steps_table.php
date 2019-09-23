<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHireStepsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hire_steps', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('hire_id')->unsigned();
            $table->bigInteger('step_id')->unsigned();
            $table->string('step_name');
            $table->integer('status')->default(0); // 0 = incomplete  1 = in-progress   2 = complete
            $table->date('date_completed')->nullable();

            $table->foreign('hire_id')->references('id')->on('hires')->onDelete('cascade');
            $table->foreign('step_id')->references('id')->on('steps')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hire_steps');
    }
}
