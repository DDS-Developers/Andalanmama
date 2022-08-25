@extends('layouts.base')

@section('content')
    <div class="py-3">
        @if (Request::segment(3) == 'admin')
        <h2>Buku Resep Admin</h2>
        <a href="{{ route('book.create') }}" class="btn btn-primary float-right">Tambah buku resep</a>
        <p class="lead">List buku resep andalah mama.</p>
        @elseif (Request::segment(3) == 'pending')
        <h2>Buku Resep Pending</h2>
        <p class="lead">List buku resep pengguna yang belum approved.</p>
        @else
        <h2>Buku Resep Pengguna</h2>
        <p class="lead">List buku resep pengguna.</p>
        @endif

        <form method="GET" id="form">
            {{ csrf_field() }}

            <div class="form-group">
                <label for="name">Cari buku resep</label>
                <input type="text" class="form-control" name="name" id="name" style="width:25%">
                <br />
                <button class="btn btn-primary">Cari</button>
            </div>
        </form>
    </div>

    @if ($message = Session::get('message'))
    <div class="alert alert-info alert-block">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <strong>{{ $message }}</strong>
    </div>
    @endif

    @foreach($books as $book)
    <div class="border-bottom py-2">
        <div class="row">
            <div class="col-8">
                <p class="mb-0">{{ $book->title }}</p>
                <p>{{ $book->user->username }}</p>
                <p>Views : {{ $book->views}}</p>
                <p>{{ $book->created_at->timezone('Asia/Jakarta')->format('d F Y H:i:s') }}</p>
            </div>
            <div class="col-4 text-right">
            @if ($book->approved == 0 && $book->user->type != 'admin')
            <a href="{{ route('book.show', ['book' => $book ]) }}" class="btn btn-link">Lihat</a>
            @else
            <a href="{{ route('book.edit', ['book' => $book ]) }}" class="btn btn-link">Edit</a>
            @endif
                <form action="{{ route('book.destroy', ['book' => $book ]) }}" method="POST">
                    @method('DELETE')
                    @csrf
                    <button class="btn btn-link text-danger">Delete</button>
                </form>
            </div>
        </div>
    </div>
    @endforeach

    <div class="mt-4">
        {{ $books->links() }}
    </div>
@stop
