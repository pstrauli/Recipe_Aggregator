<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        

        <title>Recipeazy</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700|Spicy+Rice&display=swap" rel="stylesheet"> 
        <link href="{{ mix('css/app.css')}}" rel="stylesheet" >
        

    </head>
    <body>
        <div id="root"></div>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
