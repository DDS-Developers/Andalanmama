@extends('layouts.base')

@section('content')
    <div class="py-3">
        <h2>Resep Tag</h2>
        <a href="{{ route('tag.create') }}" class="btn btn-primary float-right">Tambah tag</a>
        <p class="lead">List resep tag andalah mama.</p>

        <form method="GET" id="form">
            {{ csrf_field() }}

            <div class="form-group">
                <label for="name">Cari tag</label>
                <input type="text" class="form-control" name="name" id="name" style="width:25%">
                <br />
                <button class="btn btn-primary">Cari</button>
            </div>
        </form>
        <a href="{{ route('tag.main') }}" class="btn btn-primary">Atur tag utama</a>
    </div>

    @foreach($tags as $tag)
    <div class="border-bottom py-2">
        <div class="row">
            <div class="col-3">
                <img src="{{ $tag->image }}" style="max-width: 200px">
            </div>
            <div class="col-2">
                <p class="mb-0">{{ $tag->name }}</p>
            </div>
            <div class="col-2">
                @if ($tag->main == 1)
                <p class="mb-0">Tag Utama</p>
                @endif
            </div>
            <div class="col-2">
                <p class="mb-0">{{ $tag->total_recipe }} resep</p>
            </div>
            <div class="col-3 text-right">
                <a href="{{ route('tag.edit', ['tag' => $tag ]) }}" class="btn btn-link">Edit</a>
                <form action="{{ route('tag.destroy', ['tag' => $tag ]) }}" method="POST">
                    @method('DELETE')
                    @csrf
                    <button class="btn btn-link text-danger">Delete</button>
                </form>
            </div>
        </div>
    </div>
    @endforeach

    <div class="mt-4">
        {{ $tags->links() }}
    </div>

@stop
