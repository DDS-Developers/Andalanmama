@extends('layouts.base')

@section('content')
<div class="form-group">
    <label for="name">Nama buku resep : </label>
    {{ $book->title }}
</div>
<div class="form-group">
    <label for="resep">Resep List</label>
    <ul>
    @foreach ($book->recipes as $recipe)
    <ol><a href="{{ route('recipe.edit', ['recipe' => $recipe ]) }}" target="_blank">{{ $recipe->name }}</a></ol>
    @endforeach
    </ul>
</div>
<div class="form-group">
    <label for="status">Status : {{ $book->status == 1 ? 'Published' : 'Pending' }}</label>
</div>
@if ($book->status == 0)
<div class="form-group">
    <form action="{{ route('pending.publish', ['book' => $book ]) }}" method="POST">
        @method('PUT')
        @csrf
        <button class="btn btn-link">Approve buku resep</button>
    </form>
</div>
@endif
<div class="form-group">
    <a href="{{ route('pending') }}" class="btn btn-link">Kembali</a>
</div>
@stop