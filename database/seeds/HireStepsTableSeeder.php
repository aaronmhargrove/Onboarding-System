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
            'step_name' => "Assign Admin",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_name' => "Assign CWID",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_name' => "Assign NEID",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_name' => "Assign New/Rehire Ticket",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_name' => "Assign Mac Ticket",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_name' => "Laptop Delivered?",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_name' => "Send Onboarding Buddy Email",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_name' => "Add to DL's and PD Org",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_name' => "Send Welcome Email",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_name' => "Assign Admin",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_name' => "Assign CWID",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_name' => "Assign NEID",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_name' => "Assign New/Rehire Ticket",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_name' => "Assign Mac Ticket",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_name' => "Laptop Delivered?",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_name' => "Send Onboarding Buddy Email",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_name' => "Add to DL's and PD Org",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_name' => "Send Welcome Email",
            'status' => 0
        ));
    }
}
