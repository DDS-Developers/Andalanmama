@extends('layouts.base')

@section('content')

@include('helpers.form')
<form action="{{ route('blog.update', ['blog' => $blog ]) }}" method="POST" class="col-8 mx-auto" id="form" @submit="onFormSubmit">
    {{ csrf_field() }}
    @method('PUT')

    <div class="form-group">
        <label for="title">Name artikel</label>
        <input type="text" class="form-control" name="title" id="title" v-model="blog.title">
    </div>

    <div class="form-group">
        <label for="title">URL artikel</label>
        <input type="text" class="form-control" name="slug" id="slug" v-model="blog.slug">
    </div>

    <div class="form-group">
        <label for="attachment d-block">Attachment</label>
        <img class="img-fluid d-block mb-1" :src="blog.image" v-show="blog.image != ''" style="max-width: 200px">
        <input type="hidden" name="attachment" v-model="blog.attachment">
        <fileupload
            target="/upload-blog?api_token={{ $token }}"
            action="POST"
            class="d-block"
            v-on:finish="finishUploadAttachment" />
    </div>
    <small>ukuran maksimum gambar 500kb</small><br />

    <div class="form-group">
        <label for="body">Body</label>
        <input type="hidden" name="body" v-model="blog.body" />
        <div class="editor">
           {!! json_decode($blog->body) !!}
        </div>
    </div>

    <div class="form-group">
        <label for="publish_at">Published Date</label>
        <input type="date" name="publish_at" id="publish_at" v-model="publish_at" class="form-control">
    </div>

    <div class="form-group custom-control custom-switch">
        <input type="hidden" name="status" value="0"/>
        <input type="checkbox" value="1" class="custom-control-input" v-model="blog.status" name="status" id="status" true-value="1" false-value="0" checked>
        <label class="custom-control-label" for="status">Published The Post?</label>
    </div>

    <div class="form-group custom-control custom-switch">
        <input type="hidden" name="highlight" value="0"/>
        <input type="checkbox" value="1" class="custom-control-input" v-model="blog.highlight" name="highlight" id="highlight" true-value="1" false-value="0">
        <label class="custom-control-label" for="highlight">Is The Post Highlighted?</label>
    </div>

    <div class="form-group">
        <label for="highlight_attachment d-block">Highlight Attachment (if highlighted)</label>
        <img class="img-fluid d-block mb-1" :src="blog.highlight_image" v-show="blog.highlight_image != ''" style="max-width: 200px">
        <input type="hidden" name="highlight_attachment" v-model="blog.highlight_attachment">
        <fileupload
            target="/upload-blog?api_token={{ $token }}"
            action="POST"
            class="d-block"
            v-on:finish="finishHighlightAttachment" />
        <br />
    </div>

    <div class="form-group">
        <label for="title">Meta Title</label>
        <input type="text" class="form-control" name="meta_title" id="meta_title" v-model="blog.meta_title">
    </div>

    <div class="form-group">
        <label for="title">Meta Description</label>
        <input type="text" class="form-control" name="meta_desc" id="meta_desc" v-model="blog.meta_desc">
    </div>

    <div class="form-group">
        <button class="btn btn-primary">Simpan perubahan</button>
        <a href="{{ route('blog.index') }}" class="btn btn-link">Batal</a>
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
                    blog: {!! json_encode($blog) !!},
                    publish_at: '{{ $blog->publish_at->format("Y-m-d") }}',
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
                    xhr.open('POST', '/upload?api_token={{ $token }}', true);
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
                    this.blog.attachment = filename;
                    this.blog.image = url;
                },

                finishHighlightAttachment(e) {
                    const { filename, url } = JSON.parse(e.currentTarget.response)
                    this.blog.highlight_attachment = filename;
                    this.blog.highlight_image = url;
                },

                onFormSubmit (e) {
                    this.blog.body = JSON.stringify(this.editor.getHtml());
                }
            }
        });
    </script>
@stop
