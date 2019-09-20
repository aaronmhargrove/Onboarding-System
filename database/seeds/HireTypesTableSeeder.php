<?php

use \App\HireType;
use Illuminate\Database\Seeder;

class HireTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        HireType::create(array(
            'name' => 'Direct'
        ));
        HireType::create(array(
            'name' => 'Contract'
        ));
        HireType::create(array(
            'name' => 'SOW'
        ));
    }
}
