<?php

namespace App\Http\Controllers\API;

use App\Recipe;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RecipeController extends Controller
{
  public function getMostRated()
  {
    $recipes = Recipe::orderBy('rating_count')->get();
    return $recipes;
  }
}
