<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Vue Laravel SPA') }}</title>
    <!-- Styles -->
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <header-component></header-component>
    </div>
    <!-- Scripts -->
    <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
