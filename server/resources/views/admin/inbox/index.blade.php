@extends('layouts.base')

@section('content')
    <div class="py-3">
        <h2>Push Notifikasi</h2>
        <a href="{{ route('inbox.create') }}" class="btn btn-primary float-right">Buat notifikasi</a>
        <p class="lead">List pesan notifikasi yang pernah dikirim.</p>
    </div>

    @if ($message = Session::get('message'))
    <div class="alert alert-info alert-block">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <strong>{{ $message }}</strong>
    </div>
    @endif

    @foreach($inboxes as $inbox)
    <div class="border-bottom py-2">
        <div class="row">
            <div class="col-8">
                <p class="mb-0">{{ $inbox->title }}</p>
                <p>Created at : {{ $inbox->created_at->timezone('Asia/Jakarta')->format('d F Y H:i:s') }}</p>
            </div>
            <div class="col-4 text-right">
                <a href="{{ route('inbox.show', ['inbox' => $inbox ]) }}" class="btn btn-link">Lihat</a>
                <form action="{{ route('inbox.destroy', ['inbox' => $inbox ]) }}" method="POST">
                    @method('DELETE')
                    @csrf
                    <button class="btn btn-link text-danger">Delete</button>
                </form>
            </div>
        </div>
    </div>
    @endforeach

    <div class="mt-4">
        {{ $inboxes->links() }}
    </div>

@stop
