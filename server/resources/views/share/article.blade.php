<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"><![endif]-->
    <title>{{$blog->title}}</title>
    <meta name="title" content="{{$blog->meta_title}}">
    <meta name="description" content="{{$blog->meta_desc}}">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui, user-scalable=no">
    <link rel="icon" href="favicon.png" type="image/x-icon" sizes="16x16">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="{{$url}}">
    <meta name="twitter:creator" content="{{$blog->user->fullname}}">
    <meta name="twitter:title" content="{{$blog->meta_title}}">
    <meta property="twitter:description" content="{{$blog->meta_desc}}">
    <meta property="twitter:image" content="{{$blog->image}}">
    <meta property="og:site_name" content="{{$blog->title}}">
    <meta property="og:locale" content="en_ID">
    <meta property="og:title" content="{{$blog->meta_title}}">
    <meta property="og:description" content="{{$blog->meta_desc}}">
    <meta property="og:url" content="{{$url}}">
    <meta property="og:image" content="{{$blog->image}}">
  </head>
  <body>
    <div class="form-group">
      <h1>{{ $blog->title }}</h1>
    </div>

    <div class="form-group">
      <img class="img-fluid d-block mb-1" src="{{$blog->image}}" style="max-width: 200px">
    </div>

    <div class="form-group">
      <p>{!! json_decode($blog->body) !!}</p>
    </div>

    <div class="form-group">
      <p>Published at {{ $blog->publish_at }}</p>
    </div>

    <div class="form-group">
      <p>Meta title : {{ $blog->meta_title }}</p>
    </div>

    <div class="form-group">
      <p>Meta description : {{ $blog->meta_desc }}</p>
    </div>

    <div class="form-group">
      <p>Related :</p>
      <ul>
        @foreach ($blog->related as $rel)
        <ol>
          <p>{{ $rel->title }}</p>
          <p>{{ $rel->meta_desc }}</p>
        </ol>
        @endforeach
      </ul>
    </div>
  </body>
</html>
