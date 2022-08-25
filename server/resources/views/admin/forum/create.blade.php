@extends('layouts.base')

@section('content')

@include('helpers.form')
<form action="{{ route('forum.store') }}" method="POST" class="col-8 mx-auto" id="form" @submit="onFormSubmit">
    {{ csrf_field() }}

    <div class="form-group">
        <label for="title">Judul forum</label>
        <input type="text" class="form-control" name="title" id="title">
    </div>

    <div class="form-group">
        <label for="title">URL forum</label>
        <input type="text" class="form-control" name="slug" id="slug">
    </div>

    <div class="form-group">
        <label for="attachment d-block">Attachment</label>
        <img class="img-fluid d-block mb-1" :src="forum.image" v-show="forum.image != ''" style="max-width: 200px">
        <input type="hidden" name="attachment" v-model="forum.attachment">
        <fileupload
            target="/upload-forum?api_token={{ $token }}"
            action="POST"
            class="d-block"
            v-on:finish="finishUploadAttachment" />
    </div>
    <small>ukuran maksimum gambar 500kb</small><br />

    <div class="form-group">
        <label for="body">Body</label>
        <input type="hidden" name="body" v-model="forum.body" />
        <div class="editor">
        </div>
    </div>

    <div class="form-group custom-control custom-switch">
        <input type="hidden" name="highlight" value="0"/>
        <input type="checkbox" value="1" class="custom-control-input" name="highlight" id="highlight" true-value="1" false-value="0">
        <label class="custom-control-label" for="highlight">Forum Highlight?</label>
    </div>

    <div class="form-group">
        <button class="btn btn-primary">Simpan perubahan</button>
        <a href="{{ route('forum.index') }}" class="btn btn-link">Batal</a>
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
            components: {
                'fileupload': FileUpload.FileUpload
            },
            data () {
                return {
                    forum: {
                        title: '',
                        slug: '',
                        attachment: '',
                        image: '',
                        body: '',
                        highlight: ''
                    },
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
                            ['bold', 'italic', 'underline'],
                            [
                                {'list': 'ordered'},
                                {'list': 'bullet'}
                            ],
                            ['link', 'image', 'video', 'code-block']
                        ]
                    }
                });

                function selectLocalImage() {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.click();

                    // Listen upload local image and save to server
                    input.onchange = () => {
                        const file = input.files[0];

                        // file type is only image.
                        if (/^image\//.test(file.type)) {
                            saveToServer(file);
                        } else {
                            console.warn('You could only upload images.');
                        }
                    };
                }

                function saveToServer(file) {
                    const fd = new FormData();
                    fd.append('file', file);

                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', '/upload-forum?api_token={{ $token }}', true);
                    xhr.onload = () => {
                        if (xhr.status === 200) {
                            // this is callback data: url
                            const { url } = JSON.parse(xhr.responseText);
                            insertToEditor(url);
                        }
                    };
                    xhr.send(fd);
                }

                function insertToEditor(url) {
                    // push image url to rich editor.
                    const range = editor.getSelection(true);
                    editor.insertEmbed(range.index, 'image', url);
                }

                // quill editor add image handler
                editor.getModule('toolbar').addHandler('image', () => {
                    selectLocalImage();
                });

                this.editor = editor;
            },
            methods: {
                finishUploadAttachment(e) {
                    const { filename, url } = JSON.parse(e.currentTarget.response)
                    this.forum.attachment = filename;
                    this.forum.image = url;
                },

                onFormSubmit (e) {
                    this.forum.body = JSON.stringify(this.editor.getHtml());
                }
            }
        })
    </script>
@stop


