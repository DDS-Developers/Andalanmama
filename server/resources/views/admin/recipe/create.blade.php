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
        margin: -7px 20px 0px 3px;
    }
</style>

@include('helpers.form')
<form action="{{ route('recipe.store') }}" method="POST" class="col-8 mx-auto" id="form">
    {{ csrf_field() }}

    <div class="form-group">
        <label for="name">Name resep</label>
        <input type="text" class="form-control" name="name" id="name" v-model="recipe.name">
    </div>
    <div class="form-group">
        <label for="title">URL resep</label>
        <input type="text" class="form-control" name="slug" id="slug">
    </div>
    <div class="form-group">
        <label for="attachment">Attachment</label>
        <img class="img-fluid d-block mb-1" :src="recipe.image" v-show="recipe.image != ''" :alt="recipe.description" style="max-width: 200px">
        <input type="hidden" name="attachment" v-model="recipe.attachment" />
        <fileupload
            target="/upload-recipe-admin?api_token={{ $token }}"
            action="POST"
            v-on:finish="finishUploadAttachment" />
    </div>
    <small>ukuran maksimum gambar 500kb</small><br />
    <div class="form-group">
        <label for="attachment">Youtube iframe</label>
        <input type="text" class="form-control" name="youtube" id="youtube" v-model="recipe.youtube">
    </div>
    <div class="form-group">
        <label for="name">Deskripsi resep</label>
        <input type="text" class="form-control" name="description" id="description" v-model="recipe.description">
    </div>
    <div class="form-group">
        <label for="taglist">Tag resep</label>
        <div class="input-group checkboxes">
            <template v-for="tag in tags">
                <input type="checkbox" name="taglist[]" :id="tag.name" v-model="recipe.taglist" v-bind:value="tag.id">
                <label for="tag.name">@{{ tag.name }}</label>
            </template>
        </div>
    </div>
    <div class="row">
        <div class="col-4">
            <div class="form-group">
                <label for="porsi">Porsi untuk berapa orang?</label>
                <input type="text" class="form-control" name="portion" v-model="recipe.portion" id="porsi">
            </div>
        </div>
        <div class="col-4">
            <div class="form-group">
                <label for="duration">Durasi lama memasak (dalam menit)</label>
                <input type="text" class="form-control" name="time" v-model="recipe.time" id="duration" placeholder="Ex: 125">
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="ingredient">Bahan-bahan</label>
        <div class="input-group" v-for="(ing, key) in recipe.ingredient" :key="key">
            <input type="text" class="form-control in-group" v-if="ing.type === 'group'" v-model="ing.ingredient" placeholder="Judul Pengelompokkan">
            <input type="text" class="form-control" v-else v-model="ing.ingredient" placeholder="Ex: 1 sendok makan gula">
            <div class="input-group-append">
                <button type="button" class="input-group-text" id="basic-addon2" @click="onRemoveIngredient(key)">&times;</button>
            </div>
        </div>
        <input type="hidden" name="ingredients" v-bind:value="recipe.ingredient | json">
        <div class="clearfix">
            <button type="button" class="btn btn-link btn-sm" @click="onAddGroup">Tambah group</button> -
            <button type="button" class="btn btn-link btn-sm" @click="onAddIngredient">Tambah bahan</button>
        </div>
    </div>
    <div class="form-group">
        <label for="ingredient">Langkah-langkah (maksimal 8 langkah)</label>
        <div class="row mb-2" v-for="(step, key) in recipe.step" :key="key">
            <div class="col-8">
                <input type="text" class="form-control" id="title" name="title" v-model="step.title" placeholder="Judul Langkah">
            </div>
            <div class="col-4"><button type="button" class="input-group-text float-right" id="basic-addon2" @click="onRemoveStep(key)">&times;</button></div>
            <div class="col-8">
                <textarea id="" rows="4" class="form-control" v-model="step.description" placeholder="Detil Langkah-langkah"></textarea>
            </div>
            <div class="col-4">
                <img class="img-fluid mb-1" :src="step.image" v-show="step.image != ''" :alt="step.description">
                <fileupload
                    target="/upload-recipe-admin?api_token={{ $token }}"
                    action="POST"
                    v-on:finish="finishUpload($event, step)" />
            </div>
        </div>
        <input type="hidden" name="steps" v-bind:value="recipe.step | json">
        <div class="clearfix">
            <button type="button" class="btn btn-link btn-sm" @click="onAddStep">Tambah langkah</button>
        </div>
    </div>
    <div class="form-group">
        <label for="title">Meta Title</label>
        <input type="text" class="form-control" name="meta_title" id="meta_title">
    </div>

    <div class="form-group">
        <label for="title">Meta Description</label>
        <input type="text" class="form-control" name="meta_desc" id="meta_desc">
    </div>
    <div class="form-group custom-control custom-switch">
        <input type="hidden" name="status" value="0"/>
        <input type="checkbox" value="1" class="custom-control-input" name="status" id="status" true-value="1" false-value="0" checked>
        <label class="custom-control-label" for="status">Published The Recipe?</label>
    </div>

    <div class="form-group custom-control custom-switch">
        <input type="hidden" name="highlight" value="0"/>
        <input type="checkbox" value="1" class="custom-control-input" name="highlight" id="highlight" true-value="1" false-value="0">
        <label class="custom-control-label" for="highlight">Highlight The Recipe?</label>
    </div>

    <div class="form-group">
        <label for="recommend">Recommend Position</label><br />
        <select v-model="recipe.recommend" name="recommend">
            <option value="">None</option>
            <option v-for="id in lists" :bind-value="id">@{{ id }}</option>
        </select>
    </div>

    <div class="form-group">
        <button class="btn btn-primary">Simpan perubahan</button>
        <a href="{{ route('recipe.index') }}" class="btn btn-link">Batal</a>
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
                    recipe: {
                        ingredient: [
                            { ingredient: '', type: 'ingredient' },
                            { ingredient: '', type: 'ingredient' },
                        ],
                        step: [
                            { description: '', title: '', step: '', attachment: null }
                        ],
                        taglist: [

                        ],
                        recommend: ""
                    },
                    tags: {!! json_encode($tags) !!},
                    lists: {!! json_encode($list) !!}
                };
            },
            filters: {
                json: function (value) {
                    return JSON.stringify(value)
                }
            },
            methods: {
                onAddStep () {
                    this.recipe.step.push({ step: '', title: '', description: '', attachment: '' });
                },
                onAddGroup () {
                    this.recipe.ingredient.push({ ingredient: '', type: 'group'});
                },
                onAddIngredient () {
                    this.recipe.ingredient.push({ ingredient: '', type: 'ingredient'});
                },
                onRemoveIngredient (key) {
                    this.recipe.ingredient.splice(key, 1);
                },
                onRemoveStep (key) {
                    this.recipe.step.splice(key, 1);
                },
                finishUpload(e, step) {
                    const { filename, url } = JSON.parse(e.currentTarget.response)
                    step.attachment = filename;
                    step.image = url;
                },
                finishUploadAttachment (e) {
                    const { filename, url } = JSON.parse(e.currentTarget.response)
                    this.recipe.attachment = filename;
                    this.recipe.image = url;
                }
            }
        });
    </script>
@stop

