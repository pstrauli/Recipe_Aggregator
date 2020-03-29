<?php

namespace Tests\Feature;

use App\Http\Controllers\API\RecipeController;
use App\Recipe;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class RecipeTest extends TestCase
{
  use DatabaseTransactions;

  public function test_most_rated_recipes_method_returns_200()
  {
    factory(Recipe::class, 5)->create();
    $response = $this->get('/api/recipes');
    $response
      ->assertOk();
  }

  public function test_most_rated_recipes_method_returns_json_format()
  {
    factory(Recipe::class, 5)->create();
    $response = $this->get('/api/recipes');
    $response
      ->assertStatus(200)
      ->assertJsonStructure();
  }

  public function test_most_rated_recipes_method_returns_5_items()
  {
    factory(Recipe::class, 5)->create();
    $response = $this->get('/api/recipes');
    $response
      ->assertStatus(200)
      ->assertJsonCount(5);
  }
}
