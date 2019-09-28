<?php

use \App\Step;
use Illuminate\Database\Seeder;

class StepsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Step::create(array(
            'name' => 'Assign Admin',
            'order' => 1
        ));
        Step::create(array(
            'name' => 'Assign CWID',
            'order' => 2
        ));
        Step::create(array(
            'name' => 'Assign NEID',
            'order' => 3
        ));
        Step::create(array(
            'name' => 'Submit Hire Ticket',
            'order' => 4
        ));
        Step::create(array(
            'name' => 'Submit MAC Ticket',
            'order' => 5
        ));
        Step::create(array(
            'name' => 'Deliver Laptop',
            'order' => 6
        ));
        Step::create(array(
            'name' => 'Send Onboarding Buddy Email',
            'order' => 7
        ));
        Step::create(array(
            'name' => "Add to DLs/PD Org",
            'order' => 8
        ));
        Step::create(array(
            'name' => 'Send Welcome Email',
            'order' => 9
        ));
    }
}
