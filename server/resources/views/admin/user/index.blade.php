@extends('layouts.base')

@section('content')
    <div class="py-3">
        <h2>User</h2>
        <p class="lead">List pengguna andalah mama.</p>

        <form method="GET" id="form">
            {{ csrf_field() }}

            <div class="form-group">
                <label for="name">Cari nama</label>
                <input type="text" class="form-control" name="name" id="name" style="width:25%"  value="{{ app('request')->input('name') }}">
                <br />
                <button class="btn btn-primary">Cari</button>
            </div>
        </form>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>Username</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
            @foreach($users as $user)
            <tr>
                <td>{{ $user->id }}</td>
                <td><img src="{{ $user->image }}" style="max-width:100px"></td>
                <td>{{ $user->username }}</td>
                <td>{{ $user->fullname }}</td>
                <td>{{ $user->email }}</td>
                <td><a href="{{ route('user.points', ['user' => $user ]) }}">{{ $user->points }}</a></td>
                <td>
                <div class="col-4 text-right">
                    @if ($user->type != 'admin')
                    <a href="{{ route('user.edit', ['user' => $user ]) }}" class="btn btn-link">Edit</a>
                    <form action="{{ route('user.destroy', ['user' => $user ]) }}" method="POST">
                        @method('DELETE')
                        @csrf
                        <button class="btn btn-link text-danger">Delete</button>
                    </form>
                    @endif
                </div>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

    {{ $users->links() }}
@stop
