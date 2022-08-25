@extends('layouts.base')

@section('content')

@include('helpers.form')
<form action="{{ route('inbox.store') }}" method="POST" class="col-8 mx-auto" id="form" @submit="onFormSubmit">
    {{ csrf_field() }}

    <div class="form-group">
        <label for="title">Judul pesan</label>
        <input type="text" class="form-control" name="title" id="title">
    </div>

    <div class="form-group">
        <label for="message">Pesan</label>
        <textarea name="message" col="100" rows="4" class="form-control"></textarea>
    </div>

    <div class="form-group">
        <button class="btn btn-primary">Simpan perubahan</button>
        <a href="{{ route('inbox.index') }}" class="btn btn-link">Batal</a>
    </div>
</form>
@stop


