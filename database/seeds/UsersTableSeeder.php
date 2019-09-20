<?php

use \App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        User::create(array(
            'name'     => 'Scott, Michael',
            'email'    => 'scott@example.org',
            'password' => bcrypt('admin'),
        ));
        User::create(array(
            'name'     => 'Halpert, Jim',
            'email'    => 'jim@example.org',
            'password' => bcrypt('admin'),
        ));
        User::create(array(
            'name'     => 'B, Dr.',
            'email'    => 'bouvier@example.org',
            'password' => bcrypt('admin'),
        ));
    }
}
