@extends('layouts.base')

@section('content')

@include('helpers.form')
<form action="{{ route('user.update', ['user' => $user ]) }}" method="POST" class="col-8 mx-auto" id="form" @submit="onFormSubmit">
    {{ csrf_field() }}
    @method('PUT')

    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" name="username" id="username" v-model="user.username">
    </div>

    <div class="form-group">
        <label for="highlight_attachment d-block">Avatar</label>
        <img class="img-fluid d-block mb-1" :src="user.image" v-show="user.image != ''" style="max-width: 200px">
        <input type="hidden" name="avatar" v-model="user.avatar">
        <br />
        <label for="selection">Change to default avatar?</label><br />
        <select class="selection" name="selection">
            <option value="0">No</option>
            <option value="1">Yes</option>
        </select>
    </div>

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
        <label for="fullname">Address</label>
        <input type="text" class="form-control" name="address" id="address" v-model="user.address">
    </div>

    <div class="form-group">
        <label for="description">Description</label>
        <input type="hidden" name="description" v-model="user.description" />
        <div class="editor">
            {!! $user->description !!}
        </div>
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
        Quill.prototype.getHtml = function() {
            return this.container.querySelector('.ql-editor').innerHTML;
        };
        var app = new Vue({
            el: '#form',
            data () {
                return {
                    user: {!! json_encode($user) !!},
                    new_password: '',
                    newcf_password: '',
                    editor: ''
                }
            },
            mounted  () {

                const editor = new Quill('.editor', {
                    theme: 'snow',
                    modules: {
                        toolbar: [
                            [{
                                header: [1, 2, 3, 4, false]
                            }],
                            ['bold', 'italic', 'underline']
                        ]
                    }
                });

                this.editor = editor;
            },
            methods: {
                onFormSubmit (e) {
                    this.user.description = this.editor.getHtml();
                }
            }
        });
    </script>
@stop
