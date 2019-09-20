<?php

use Faker\Generator as Faker;

$factory->define(App\HireType::class, function (Faker $faker) {
    return [
        'name' => 'Direct'
    ];
});
