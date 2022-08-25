@extends('layouts.base')

@section('content')
@include('helpers.form')
<form action="{{ route('tag.update', ['tag' => $tag]) }}" method="POST" class="col-6 mx-auto" id="form">
    {{ csrf_field() }}
    @method('PUT')

    <div class="form-group">
        <label for="name">Nama tag</label>
        <input type="text" class="form-control" name="name" v-model="tag.name">
    </div>

    <div class="form-group">
        <label for="slug">Url tag</label>
        <input type="text" class="form-control" name="slug" v-model="tag.slug">
    </div>

    <div class="form-group">
        <label for="attachment d-block">Attachment</label>
        <img class="img-fluid d-block mb-1" :src="tag.image" v-show="tag.image != ''" style="max-width: 200px">
        <input type="hidden" name="attachment" v-model="tag.attachment">
        <fileupload
            target="/upload-tag?api_token={{ $token }}"
            action="POST"
            class="d-block"
            v-on:finish="finishUploadAttachment"></fileupload>
        <small class="form-text text-muted">ukuran maksimum gambar 500kb</small>
    </div>

    <div class="form-group">
        <input type="hidden" name="status" value="1"/>
    </div>

    <div class="form-group">
        <button class="btn btn-primary">Simpan perubahan</button>
        <a href="{{ route('tag.index') }}" class="btn btn-link">Batal</a>
    </div>
</form>
@stop

@section('js')
    @parent
    <script>
        var app = new Vue({
            el: '#form',
            components: {
                'fileupload': FileUpload.FileUpload
            },
            data () {
                return {
                    tag: {!! $tag !!}
                }
            },
            methods: {
                finishUploadAttachment(e) {
                    const { filename, url } = JSON.parse(e.currentTarget.response)
                    this.tag.attachment = filename;
                    this.tag.image = url;
                }
            }
        })
    </script>
@stop
