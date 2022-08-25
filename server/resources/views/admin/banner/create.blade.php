@extends('layouts.base')

@section('content')

@include('helpers.form')
<form action="{{ route('banner.store') }}" method="POST" class="col-8 mx-auto" id="form">
    {{ csrf_field() }}

    <div class="form-group">
        <label for="title">Judul banner</label>
        <input type="text" class="form-control" name="title" id="title">
    </div>

    <div class="form-group">
        <label for="title">URL banner</label>
        <input type="text" class="form-control" name="url" id="url">
    </div>

    <div class="form-group">
        <label for="attachment d-block">Attachment</label>
        <img class="img-fluid d-block mb-1" :src="banner.image" v-show="banner.image != ''" style="max-width: 200px">
        <input type="hidden" name="attachment" v-model="banner.attachment">
        <fileupload
            target="/upload-banner?api_token={{ $token }}"
            action="POST"
            class="d-block"
            v-on:finish="finishUploadAttachment" />
    </div>
    <small>ukuran maksimum gambar 500kb</small><br /><br />

    <div class="form-group custom-control custom-switch">
        <input type="hidden" name="app" value="0"/>
        <input type="checkbox" value="1" class="custom-control-input" name="app" id="app" true-value="1" false-value="0" checked>
        <label class="custom-control-label" for="app">Publish on Mobile app</label>
    </div>

    <div class="form-group custom-control custom-switch">
        <input type="hidden" name="status" value="0"/>
        <input type="checkbox" value="1" class="custom-control-input" name="status" id="status" true-value="1" false-value="0" checked>
        <label class="custom-control-label" for="status">Publish Banner?</label>
    </div>

    <div class="form-group">
        <button class="btn btn-primary">Simpan perubahan</button>
        <a href="{{ route('banner.index') }}" class="btn btn-link">Batal</a>
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
                    banner: {
                        title: '',
                        url: '',
                        attachment: '',
                        image: '',
                        status: 1
                    }
                }
            },
            methods: {
                finishUploadAttachment(e) {
                    const { filename, url } = JSON.parse(e.currentTarget.response)
                    this.banner.attachment = filename;
                    this.banner.image = url;
                }
            }
        })
    </script>
@stop


