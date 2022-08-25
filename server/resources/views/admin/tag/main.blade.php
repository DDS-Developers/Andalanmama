@extends('layouts.base')

@section('content')
<style>.in-group { font-weight: 600;}</style>
<style>
    .checkboxes {
        text-align:center;
    }

    .checkboxes input{
        margin: 0px 0px 0px 0px;
    }

    .checkboxes label{
        margin: 0px 20px 0px 3px;
    }
</style>

@include('helpers.form')
<form action="{{ route('tag.main.update', ['taglist' => $taglist ]) }}" method="POST" class="col-8 mx-auto" id="form">
    {{ csrf_field() }}
    @method('PUT')

    <div class="form-group">
        <label for="taglist">Tag Utama</label>
        <div class="input-group checkboxes">
            <template v-for="tag in tags">
                <div v-if="taglist.indexOf(tag.id) !== -1">
                    <input type="checkbox" name="taglist[]" id="tag.name" v-model="taglist" v-bind:value="tag.id" selected>
                    <label for="tag.name">@{{ tag.name }}</label>
                </div>
                <div v-else>
                    <input type="checkbox" name="taglist[]" id="tag.name" v-model="taglist" v-bind:value="tag.id">
                    <label for="tag.name">@{{ tag.name }}</label>
                </div>
            </template>
        </div>
    </div>
    <div class="form-group">
        <button class="btn btn-primary">Simpan perubahan</button>
        <a href="{{ route('tag.index') }}" class="btn btn-primary">Kembali</a>
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
                    tags: {!! json_encode($tags) !!},
                    taglist: {!! json_encode($taglist) !!}
                };
            }
        });
    </script>
@stop

