<?php

use \App\HireLock;
use Illuminate\Database\Seeder;

class HireLocksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        HireLock::create(array(
            'hire_id' => 1,
            'locked' => 0
        ));
        HireLock::create(array(
            'hire_id' => 2,
            'locked' => 0
        ));
    }
}
