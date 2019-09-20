<?php

use Faker\Generator as Faker;

$factory->define(App\Step::class, function (Faker $faker) {
    return [
        'name' => 'Step Name',
        'order' => 1
    ];
});
