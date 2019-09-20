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
            'name' => 'Assign New/Rehire Ticket',
            'order' => 4
        ));
        Step::create(array(
            'name' => 'Assign Mac Ticket',
            'order' => 5
        ));
        Step::create(array(
            'name' => 'Laptop Delivered?',
            'order' => 6
        ));
        Step::create(array(
            'name' => 'Send Onboarding Buddy Email',
            'order' => 7
        ));
        Step::create(array(
            'name' => "Add to DL's and PD Org",
            'order' => 8
        ));
        Step::create(array(
            'name' => 'Send Welcome Email',
            'order' => 9
        ));
    }
}
