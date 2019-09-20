<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(StepsTableSeeder::class);
        $this->call(HireTypesTableSeeder::class);
        $this->call(HiresTableSeeder::class);
        $this->call(HireStepsTableSeeder::class);
        $this->call(HireLocksTableSeeder::class);
    }
}
