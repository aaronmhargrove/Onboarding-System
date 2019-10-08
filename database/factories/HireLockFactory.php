<?php

use Faker\Generator as Faker;

$factory->define(App\HireLock::class, function (Faker $faker) {
    return [
        'hire_id' => 1,
        'locked' => 0
    ];
});
