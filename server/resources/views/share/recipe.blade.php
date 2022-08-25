<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"><![endif]-->
    <title>{{$recipe->name}}</title>
    <meta name="title" content="{{$recipe->meta_title}}">
    <meta name="description" content="{{$recipe->meta_desc}}">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui, user-scalable=no">
    <link rel="icon" href="favicon.png" type="image/x-icon" sizes="16x16">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="{{$url}}">
    <meta name="twitter:creator" content="{{$recipe->user->fullname}}">
    <meta name="twitter:title" content="{{$recipe->meta_title}}">
    <meta property="twitter:description" content="{{$recipe->meta_desc}}">
    <meta property="twitter:image" content="{{$recipe->image}}">
    <meta property="og:site_name" content="{{$recipe->name}}">
    <meta property="og:locale" content="en_ID">
    <meta property="og:title" content="{{$recipe->meta_title}}">
    <meta property="og:description" content="{{$recipe->meta_desc}}">
    <meta property="og:url" content="{{$url}}">
    <meta property="og:image" content="{{$recipe->image}}">
  </head>
  <body>
  <div class="form-group">
    <label for="name">Recipe name : </label>
    {{ $recipe->name }}
  </div>
  <div class="form-group">
      <label for="attachment">Recipe image</label>
      <img src="{{ $recipe->image }}" style="width: 30%">
  </div>

  <div class="form-group">
      <label for="name">Recip description : </label>
      {{ $recipe->description }}
  </div>
  <div class="form-group">
      <label for="taglist">Recipe tag</label>
      <ul>
        @foreach ($recipe->tags as $tag)
            <ol>{{ $tag->name }}</ol>
        @endforeach
      </ul>
  </div>

  <div class="form-group">
      <label for="porsi">Portion : </label>
      {{ $recipe->portion }}
  </div>
  <div class="form-group">
      <label for="duration">Duration : </label>
      {{ $recipe->time }}
  </div>

  <div class="form-group">
      <label for="ingredient">Ingredients</label>
      <ul>
      @foreach ($recipe->ingredient as $ing)
          <ol>{{ $ing->ingredient }}</ol>
      @endforeach 
      </ul>
  </div>
  <div class="form-group">
      <label for="ingredient">Steps</label>
      <ul>
      @foreach ($recipe->step as $step)
          <ol>
              <p><img src="{{ $step->image }}" style="width: 30%"></p>
              <p>{{ $step->title }}</p>
              <p>{{ $step->step }} : {{ $step->description }}</p>
          </ol>
      @endforeach
      </ul>
  </div>
  <div class="form-group">
      <label for="status">Status : {{ $recipe->status == 1 ? 'Published' : 'Pending' }}</label>
  </div>
  </body>
</html>
