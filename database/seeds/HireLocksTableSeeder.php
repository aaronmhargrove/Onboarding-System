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
            'locked' => 0,
            'locked_at' => date('Y-m-d H:i:s')
        ));
        HireLock::create(array(
            'hire_id' => 2,
            'locked' => 1,
            'locked_at' => date('2019-9-21 11:15:32')
        ));
    }
}
