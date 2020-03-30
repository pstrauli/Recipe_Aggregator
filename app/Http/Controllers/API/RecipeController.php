<?php

namespace App\Http\Controllers\API;

use App\Recipe;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RecipeController extends Controller
{

  // exclude columns with 0 value
  protected $excluded_columns_with_possible_zero = [
    ['total_time', '<>', '0'],
    ['servings', '<>', '0'],
    ['rating_count', '<>', '0'],

  ];

  public function getMostRated()
  {
    $recipes = Recipe::where($this->excluded_columns_with_possible_zero)
      ->orderBy('rating_count', 'desc')
      ->limit(10)
      ->get();
    return $recipes;
  }
}
