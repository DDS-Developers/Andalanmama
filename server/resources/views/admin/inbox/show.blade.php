@extends('layouts.base')

@section('content')
<style>.in-group { font-weight: 600;}</style>

<div class="form-group">
    <label for="name">Judul pesan : </label>
    {{ $inbox->title }}
</div>
<div class="form-group">
    <label for="message">Pesan : </label>
    <p>{{ $inbox->message }}</p>
</div>

<div class="form-group">
    <a href="{{ route('inbox.index') }}" class="btn btn-link">Kembali</a>
</div>
@stop