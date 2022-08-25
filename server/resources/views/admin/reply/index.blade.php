@extends('layouts.base')

@section('content')
    <div class="py-3">
        <h2>Forum Reply</h2>
        <p class="lead">Komentar pengguna</p>

        <form method="GET" class="row" id="form">
            <div class="form-group col-md-8">
                <div class="input-group">
                    <input type="text" class="form-control" name="name" id="name" style="width:25%" placeholder="cari balasan" value="{{ request()->input('name') }}">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">Cari</button>
                    </div>
                </div>
            </div>
        </form>
    </div>

    @if ($message = Session::get('message'))
    <div class="alert alert-info alert-block">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <strong>{{ $message }}</strong>
    </div>
    @endif

    <div class="border-bottom py-2 mt-5 mb-2 h5">
        <h1 class="h5 mb-0">List komentar</h1>
    </div>
    @include('admin.reply._list', ['data' => $replies ])

    <div class="mt-4">
        {{ $replies->links() }}
    </div>

@stop
