<!doctype html>
<html lang="en">
    <head>
    <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/min/dropzone.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue2-dropzone@3.5.9/dist/vue2Dropzone.min.css">
        <link rel="stylesheet" href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">

        <title>Andalan Mama</title>
        <style>
            label { font-weight: 500; }
            .ql-editor{ min-height:200px; }
        </style>
        @section('css')
    </head>
    <body>
        @if (Auth::guard('web')->user())
            @include('layouts.header')
        @endif

        <div class="container">
            @yield('content')
        </div>

        <hr class="mt-5">
        <div class="container">
            <p class="text-muted small my-3">Andalan Mama Admin Panel - {{ date('Y') }}</p>
        </div>

        @section('js')
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>

        @if (env('APP_ENV') === 'production')
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
        @else
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        @endif
        <script src="https://cdn.jsdelivr.net/npm/vue-simple-upload@0.1.6/dist/vue-simple-upload.min.js"></script>
        @show
    </body>
</html>
