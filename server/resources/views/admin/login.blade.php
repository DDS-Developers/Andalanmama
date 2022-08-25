@extends('layouts.base')

@section('content')
<style>
.form-auth {
    width: 350px;
}
</style>

<form action="" class="form-auth mx-auto" method="POST">
    {{ csrf_field() }}

    <div class="border-bottom mb-4">
        <h2>Form login</h2>
    </div>

    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" name="username">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" name="password">
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Login</button>
    </div>
</form>
@stop
