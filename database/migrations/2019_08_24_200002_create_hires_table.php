<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHiresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hires', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('regional_location')->nullable();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique()->nullable();
            $table->string('cwid')->unique()->nullable();
            $table->string('gender')->nullable();
            $table->bigInteger('hire_type_id')->unsigned()->nullable();
            $table->date('start_date')->nullable();
            $table->string('vendor')->nullable();
            $table->string('role')->nullable();
            $table->string('pl_ic')->nullable();
            $table->string('team_name')->nullable();
            $table->string('platform')->nullable();
            $table->bigInteger('manager_id')->unsigned()->nullable();
            $table->string('hire_status')->nullable();
            $table->string('onboarding_buddy')->nullable();
            $table->string('computer_needs')->nullable();
            $table->string('seat_number')->nullable();
            $table->string('campus')->nullable();
            $table->text('manager_comments')->nullable();
            $table->integer('neid')->nullable();
            $table->string('hire_ticket')->unique()->nullable();
            $table->string('mac_ticket')->unique()->nullable();
            $table->bigInteger('admin_id')->unsigned()->nullable();
            $table->boolean('is_active')->default(1);
            $table->timestamps();

            $table->foreign('hire_type_id')->references('id')->on('hire_types');
            $table->foreign('manager_id')->references('id')->on('users');
            $table->foreign('admin_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hires');
    }
}
