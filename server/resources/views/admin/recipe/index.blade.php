@extends('layouts.base')

@section('content')
    <div class="py-3">
        @if (Request::segment(3) == 'admin')
        <h2>Resep Admin</h2>

        <p class="lead">List resep andalah mama.</p>
        @elseif (Request::segment(3) == 'pending')
        <h2>Resep Pending</h2>
        <p class="lead">List resep pengguna yang belum approved.</p>
        @else
        <h2>Resep Pengguna</h2>
        <p class="lead">List resep pengguna.</p>
        @endif

        <form method="GET" class="row" id="form">
            <div class="form-group col-md-8">
                <div class="input-group">
                    <input type="text" class="form-control" name="name" id="name" style="width:25%" placeholder="cari resep" value="{{ request()->input('name') }}">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">Cari</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <a href="{{ route('recipe.create') }}" class="btn btn-primary">Tambah resep</a>
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
        <h1 class="h5 mb-0">Highlight resep</h1>
        <p class="text-muted small mb-0">Merupakan list yang di higlight untuk ditampilkan pada beranda artikel</p>
    </div>
    @include('admin.recipe._list', ['data' => $highlights ])

    <div class="border-bottom py-2 my-2 ">
        <h1 class="h5 mb-0">Rekomendasi resep</h1>
        <p class="text-muted small mb-0">Merupakan list resep yang di rekomendasikan admin</p>
    </div>
    @include('admin.recipe._list', ['data' => $recommends ])

    <div class="border-bottom py-2 my-2 ">
        <h1 class="h5 mb-0">List resep</h1>
        <p class="text-muted small mb-0">Merupakan list resep yang dibuat admin</p>
    </div>
    @include('admin.recipe._list', ['data' => $recipes])

    <div class="mt-4">
        {{ $recipes->links() }}
    </div>

@stop
