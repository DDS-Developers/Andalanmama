@extends('layouts.base')

@section('content')
<style>.in-group { font-weight: 600;}</style>

<div class="form-group">
    <label for="name">Name resep : </label>
    {{ $recipe->name }}
</div>
<div class="form-group">
    <label for="attachment">Image</label>
    <img src="{{ $recipe->image }}" style="width: 30%">
</div>

<div class="form-group">
    <label for="name">Deskripsi resep : </label>
    {{ $recipe->description }}
</div>
<div class="form-group">
    <label for="taglist">Tag resep</label>
    <ul>
        @foreach ($tags as $tag)
            <ol>{{ $tag->name }}</ol>
        @endforeach
    </ul>
</div>

<div class="form-group">
    <label for="porsi">Porsi : </label>
    {{ $recipe->portion }}
</div>
<div class="form-group">
    <label for="duration">Durasi lama memasak : </label>
    {{ $recipe->time }}
</div>

<div class="form-group">
    <label for="ingredient">Bahan-bahan</label>
    <ul>
    @foreach ($recipe->ingredient as $ing)
        <ol>{{ $ing->ingredient }}</ol>
    @endforeach 
    </ul>
</div>
<div class="form-group">
    <label for="ingredient">Langkah-langkah</label>
    <ul>
    @if (count($recipe->step) > 8)
    <div class="alert alert-danger" role="alert">
        Langkah resep lebih dari 8
    </div>
    @endif
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
@if ($recipe->approved == 0)
<div class="form-group">
    <form action="{{ route('recipe.pending.publish', ['recipe' => $recipe ]) }}" method="POST">
        @method('PUT')
        @csrf
        <button class="btn btn-link">Approve resep</button>
    </form>
</div>
@endif
<div class="form-group">
    <a href="{{ route('recipe.pending') }}" class="btn btn-link">Kembali</a>
</div>
@stop