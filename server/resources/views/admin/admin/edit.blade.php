@extends('layouts.base')

@section('content')

@include('helpers.form')
<form action="{{ route('admin.update', ['user' => $user ]) }}" method="POST" class="col-8 mx-auto" id="form" @submit="onFormSubmit">
    {{ csrf_field() }}
    @method('PUT')

    <div class="form-group">
        <label for="fullname">Full name</label>
        <input type="text" class="form-control" name="fullname" id="fullname" v-model="user.fullname">
    </div>

    <div class="form-group">
        <label for="new_password">New Password</label>
        <input type="password" class="form-control" name="new_password" id="new_password" v-model="user.new_password">
    </div>

    <div class="form-group">
        <label for="newcf_password">Confirm New Password</label>
        <input type="password" class="form-control" name="newcf_password" id="newcf_password" v-model="user.newcf_password">
    </div>

    <div class="form-group">
        <input type="hidden" class="form-control" name="username" id="username" v-model="user.username">
    </div>

    <div class="form-group">
        <button class="btn btn-primary">Simpan perubahan</button>
        <a href="{{ route('user.index') }}" class="btn btn-link">Batal</a>
    </div>
</form>

@stop


@section('js')
    @parent
    <script>
        var app = new Vue({
            el: '#form',
            data () {
                return {
                    user: {!! json_encode($user) !!},
                    new_password: '',
                    newcf_password: ''
                }
            },
            methods: {
                onFormSubmit (e) {
                    
                }
            }
        });
    </script>
@stop
