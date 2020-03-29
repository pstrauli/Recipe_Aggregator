<?php

namespace Tests\Feature;

use App\Http\Controllers\API\RecipeController;
use App\Recipe;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RecipeTest extends TestCase
{
  use RefreshDatabase;

  public function test_most_rated_recipes_method_returns_200()
  {
    //$this->withoutExceptionHandling();
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

  public function test_most_rated_recipes_method_returns_number_of_items()
  {
    factory(Recipe::class, 100)->create();
    $response = $this->get('/api/recipes');
    $response
      ->assertStatus(200)
      ->assertJsonCount(10);
  }
}
