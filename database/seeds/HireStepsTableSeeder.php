<?php

use \App\HireStep;
use Illuminate\Database\Seeder;

class HireStepsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 1,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 2,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 3,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 4,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 5,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 6,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 7,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 8,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 9,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 1,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 2,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 3,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 4,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 5,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 6,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 7,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 8,
            'status' => "Incomplete"
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 9,
            'status' => "Incomplete"
        ));
    }
}
