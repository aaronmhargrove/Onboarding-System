<?php

use Faker\Generator as Faker;

$factory->define(App\HireStep::class, function (Faker $faker) {
    return [
        'hire_id' => 1,
        'step_id' => 1,
        'step_name' => "Step Name",
        'status' => 0
    ];
});
