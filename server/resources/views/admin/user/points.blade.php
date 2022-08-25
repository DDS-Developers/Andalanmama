@extends('layouts.base')

@section('content')
    <div class="py-3">
        <h2>{{ $user->fullname }} Point History</h2>
        <p class="lead">List history point user</p>
        <p>Total point : {{ $user->points }}</p>
        <p>Total point cumulative : {{ $user->cumulative_points }}</p>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Point Get</th>
                <th>Point Spend</th>
                <th>Event</th>
            </tr>
        </thead>
        <tbody>
            @foreach($logs as $log)
            <tr>
                <td>{{ $log->created_at->timezone('Asia/Jakarta')->format('d F Y H:i:s') }}</td>
                <td>{{ $log->point_get }}</td>
                <td>{{ $log->point_spend }}</td>
                <td>{{ $log->event }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    {{ $logs->links() }}

    <div class="form-group">
        <a href="{{ route('user.index') }}" class="btn btn-link">Kembali</a>
    </div>
@stop