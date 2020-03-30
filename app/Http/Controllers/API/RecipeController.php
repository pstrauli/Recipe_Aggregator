<?php

namespace App\Http\Controllers\API;

use App\Recipe;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RecipeController extends Controller
{

  // by default exclude 0 valued items
  private $where_statement = [
    ['total_time', '<>', '0'],
    ['servings', '<>', '0'],
    ['rating_count', '<>', '0']
  ];

  // by default sort by rating count
  private $order_by = ['rating_count', 'desc'];

  // by default, take 
  private $limit = 10;

  public function index(Request $request)
  {

    if (isset($request['query'])) {
      $query = $request['query'];
      $this->where_statement[] = ['name', 'like', "%{$query}%"];
    }

    if (isset($request['time'])) {
      $time = $request['time'];
      $this->where_statement[] = ['total_time', '<', "{$time}"];
    }

    if (isset($request['servings'])) {
      $servings = $request['servings'];
      $this->where_statement[] = ['servings', '=', "{$servings}"];
    }

    if ($request['best'] == 1) {
      $best = $request['best'];
      $this->where_statement[] = ['rating_value', '=', '5'];
    }

    if ($request['popular'] == 1) {
      $popular = $request['popular'];
      $this->order_by = ['rating_count', 'desc'];
    }

    $recipes = Recipe::where($this->where_statement)
      ->orderBy($this->order_by[0], $this->order_by[1])
      ->limit($this->limit)
      ->get();

    return ($recipes);
  }
}
