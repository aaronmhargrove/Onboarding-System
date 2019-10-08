<?php

use Faker\Generator as Faker;

$factory->define(App\Hire::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'manager_id' => 2,
        'admin_id' => 3,
        'start_date' => '2019-9-28'
    ];
});
