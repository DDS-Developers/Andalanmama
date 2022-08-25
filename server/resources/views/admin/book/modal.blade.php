<div class="modal" id="modal-resep" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">List Resep</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body pb-0">
                <form action="" @submit="onSearch">
                    <div class="form-group">
                        <input type="text" class="form-control form-control-sm" v-model="query" placeholder="Search" >
                    </div>
                </form>

                <div class="row border-bottom py-2" v-for="(recipe, key) in recipes" :key="recipe.id">
                    <div class="col-1">
                        <input type="checkbox" @click="checked(recipe)" :checked="inRecipeForm(recipe)">
                    </div>
                    <div class="col-2">
                        <img :src="recipe.image" class="img-fluid" :alt="recipe.name">
                    </div>
                    <div class="col-9">
                        <p class="mb-0 inline-search">@{{ recipe.name }}</p>
                        <small class="text-gray">@{{ recipe.name ? recipe.name : recipe.description }}</small>
                    </div>
                </div>

                <div class="form-group text-center mb-0">
                    <a href="" :class="page == '1' ? 'btn btn-link disabled' : 'btn btn-link'" @click="prevPage">Prev</a>
                    <span class="btn btn-disabled">@{{ page }} of @{{ lastPage }}</span>
                    <a href="" :class="page == lastPage ? 'btn btn-link disabled' : 'btn btn-link'" @click="nextPage">Next</a>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
            </div>
        </div>
    </div>
</div>
