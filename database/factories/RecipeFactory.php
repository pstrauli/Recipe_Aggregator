<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Recipe;
use Faker\Generator as Faker;

$factory->define(Recipe::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1, 500),
        'url' => $faker->url(),
        'name' => $faker->sentence(),
        'image_url' => $faker->url(),
        'description' => $faker->sentence(),
        'rating_value' => $faker->randomFloat(1, 0, 5),
        'rating_count' => $faker->randomNumber(3),
        'servings' => $faker->numberBetween(1, 8),
        'total_time' => $faker->numberBetween(10, 300),
        'ingredients' => $faker->sentence()
    ];
});
