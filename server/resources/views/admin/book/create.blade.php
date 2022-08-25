@extends('layouts.base')

@section('content')
<div id="create-book">
    @include('helpers.form')
    <form action="{{ route('book.store') }}" method="POST" class="col-6 mx-auto">
        {{ csrf_field() }}
        <div class="form-group">
            <label for="name">Nama buku resep</label>
            <input type="text" class="form-control" name="title" placeholder="Nama buku resep">
        </div>
        <div class="form-group border-bottom">
            <div class="float-right">
                <a href="" class="btn btn-link"  data-toggle="modal" data-target="#modal-resep">Tambah resep</a>
            </div>
            <label for="resep">Resep</label>
        </div>

        <div class="pb-3">
            <div class="row border-bottom py-2" v-for="(recipe, key) in recipesForm" :key="recipe.id">
                <input type="hidden" name="recipe_id[]" :value="recipe.id" />
                <div class="col-2">
                    <img :src="recipe.image" class="img-fluid" :alt="recipe.name">
                </div>
                <div class="col-7">
                    <p class="mb-0 inline-search">@{{ recipe.name }}</p>
                    <small class="text-gray">@{{ recipe.name ? recipe.name : recipe.description }}</small>
                </div>
                <div class="col-3 text-right">
                    <button type="button" class="btn btn-sm btn-danger" @click="onDeleteRecipe(key)">Delete</button>
                </div>
            </div>
        </div>

        <div class="form-group custom-control custom-switch">
            <input type="hidden" name="status" value="0"/>
            <input type="checkbox" value="1" class="custom-control-input" name="status" id="status" true-value="1" false-value="0" checked>
            <label class="custom-control-label" for="status">Published The Recipe Book?</label>
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Simpan perubahan</button>
            <a href="{{ route('book.index') }}" class="btn btn-link">Batal</a>
        </div>
    </form>
    @include('admin.book.modal')
</div>
@stop

@section('css')
    @parent
    <style>
        p.inline-search {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    </style>
@stop

@section('js')
    @parent
    <script>
        var app = new Vue({
            el: '#create-book',
            data () {
                return {
                    query: '',
                    page: 0,
                    lastPage: 0,
                    recipes: {!! json_encode($recipes) !!},
                    recipesForm: []
                }
            },
            mounted () {
                this.fetchApi();
            },
            methods: {
                fetchApi (page) {
                    const currentPage = this.page >= 1 ? this.page + page : 1;
                    fetch(`/web-admin/recipe/admin?page=${currentPage}&name=${this.query}`, {
                        method: 'GET',
                        withCredentials: true,
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer {{ $token }}',
                        }
                    })
                    .then(response => response.json())
                    .then(response => {
                        this.recipes = response.data;
                        this.page = response.current_page;
                        this.lastPage = response.last_page;
                    })
                },

                nextPage (event) {
                    event.preventDefault();
                    this.fetchApi(1)
                },

                prevPage (event) {
                    event.preventDefault();
                    this.fetchApi(-1)
                },

                onSearch (event) {
                    this.fetchApi(0);
                    event.preventDefault();
                },

                checked (recipe) {
                    var index = this.recipesForm.findIndex(item => recipe.id === item.id);
                    if (index < 0) {
                        // append array if recipe form is not exists
                        this.recipesForm.push(recipe);
                    } else {
                        // remove array if recipe form is exists
                        this.recipesForm.splice(index, 1);
                    }

                },

                inRecipeForm(recipe) {
                    return this.recipesForm.find(item => recipe.id === item.id);
                },

                onDeleteRecipe(key) {
                    this.recipesForm.splice(key, 1)
                },

                onSearch(event) {
                    this.fetchApi(0);
                    event.preventDefault();
                }
            }
        })
    </script>
@stop
