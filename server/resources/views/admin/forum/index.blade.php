@extends('layouts.base')

@section('content')
    <div class="py-3">
        <h2>Forum</h2>
        <p class="lead">List forum andalah mama.</p>

        <form method="GET" class="row" id="form">
            {{ csrf_field() }}
            <div class="form-group col-md-8">
                <div class="input-group">
                    <input type="text" class="form-control" name="name" id="name" style="width:25%" placeholder="cari forum" value="{{ request()->input('name') }}">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">Cari</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <a href="{{ route('forum.create') }}" class="btn btn-primary">Tambah forum</a>
            </div>
        </form>
    </div>

    @if ($message = Session::get('message'))
    <div class="alert alert-info alert-block">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <strong>{{ $message }}</strong>
    </div>
    @endif

    <div class="border-bottom py-2 my-2 ">
        <h1 class="h5 mb-0">Highlight forum</h1>
        <p class="text-muted small mb-0">Merupakan list yang di higlight untuk ditampilkan pada beranda forum</p>
    </div>
    @include('admin.forum._list', ['data' => $highlights ])

    <div class="border-bottom py-2 mt-5 mb-2 h5">
        <h1 class="h5 mb-0">List forum</h1>
    </div>
    @include('admin.forum._list', ['data' => $forums ])

    <div class="mt-4">
        {{ $forums->links() }}
    </div>

@stop
