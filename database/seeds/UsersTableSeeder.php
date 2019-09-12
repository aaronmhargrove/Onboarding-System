<?php

use \App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        User::create(array(
            'name'     => 'Admin',
            'email'    => 'dvoth@siue.edu',
            'password' => bcrypt('admin'),
        ));
    }
}
