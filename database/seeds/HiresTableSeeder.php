<?php

use \App\Hire;
use Illuminate\Database\Seeder;

class HiresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Hire::create(array(
            'first_name' => 'Dwight',
            'last_name' => 'Schrute',
            'regional_location' => 'STL',
            'start_date' => '2019-9-28',
            'vendor' => 'NBC',
            'role' => 'Assistant to Regional Manager',
            'team_name' => 'The Office',
            'platform' => 'Sales',
            'manager_id' => 1,
            'admin_id' => 2,
            'hire_status' => 'New',
            'onboarding_buddy' => 'Angela',
            'computer_needs' => 'Macbook'
        ));
        Hire::create(array(
            'first_name' => 'Creed',
            'last_name' => 'Bratton',
            'regional_location' => 'STL',
            'start_date' => '2019-9-28',
            'vendor' => 'NBC',
            'role' => 'Associate',
            'team_name' => 'The Office',
            'platform' => 'Sales',
            'manager_id' => 2,
            'admin_id' => 1,
            'hire_status' => 'New',
            'onboarding_buddy' => 'Pam',
            'computer_needs' => 'Macbook'
        ));
    }
}
