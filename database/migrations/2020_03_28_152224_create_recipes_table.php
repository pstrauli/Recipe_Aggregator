<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipes', function (Blueprint $table) {
            $table->id('id');
            $table->string('url', 255);
            $table->string('name', 255);
            $table->string('image_url', 255)->nullable();
            $table->text('description');
            $table->float('rating_value');
            $table->integer('rating_count');
            $table->integer('servings');
            $table->integer('total_time');
            $table->text('ingredients');
            $table->datetime('created_at');
            $table->datetime('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipes');
    }
}
