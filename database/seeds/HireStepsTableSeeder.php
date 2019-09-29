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
            'step_name' => "Assign Admin",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 2,
            'step_name' => "Assign CWID",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 3,
            'step_name' => "Assign NEID",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 4,
            'step_name' => "Submit Ticket",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 5,
            'step_name' => "Submit MAC Ticket",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 6,
            'step_name' => "Deliver Laptop",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 7,
            'step_name' => "Send Onboarding Buddy Email",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 8,
            'step_name' => "Add to DLs/PD Org",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 1,
            'step_id' => 9,
            'step_name' => "Send Welcome Email",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 1,
            'step_name' => "Assign Admin",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 2,
            'step_name' => "Assign CWID",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 3,
            'step_name' => "Assign NEID",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 4,
            'step_name' => "Submit Hire Ticket",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 5,
            'step_name' => "Submit MAC Ticket",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 6,
            'step_name' => "Deliver Laptop",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 7,
            'step_name' => "Send Onboarding Buddy Email",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 8,
            'step_name' => "Add to DLs/PD Org",
            'status' => 0
        ));
        HireStep::create(array(
            'hire_id' => 2,
            'step_id' => 9,
            'step_name' => "Send Welcome Email",
            'status' => 0
        ));
    }
}
