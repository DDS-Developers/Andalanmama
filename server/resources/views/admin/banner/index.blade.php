@extends('layouts.base')

@section('content')
    <div class="py-3">
        <h2>Banner</h2>
        <p class="lead">List banner andalah mama.</p>
        <div class="col-md-8">
            <a href="{{ route('banner.create') }}" class="btn btn-primary">Tambah banner</a>
        </div>
    </div>

    @if ($message = Session::get('message'))
    <div class="alert alert-info alert-block">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <strong>{{ $message }}</strong>
    </div>
    @endif

    <div class="border-bottom py-2 mt-5 mb-2 h5">
        <h1 class="h5 mb-0">List banner</h1>
    </div>
    @include('admin.banner._list', ['data' => $banners ])

    <div class="mt-4">
        {{ $banners->links() }}
    </div>

@stop
