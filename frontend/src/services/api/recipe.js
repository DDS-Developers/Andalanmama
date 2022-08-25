import { Http } from '../http';

export default {
  getFavoriteRecipes() {
    return Http.get('collection/favorite-recipe');
  },

  getRecommendedRecipes() {
    return Http.get('recipe/latest/andalan');
  },

  getRecipe(id) {
    return Http.get(`recipe/${id}`);
  },

  filterRecipe(page, tag) {
    return Http.post(`recipe/filter`, { page, categories: [tag] });
  },

  getRecipeBook() {
    return Http.get('book/latest/andalan');
  },

  search(query) {
    return Http.post(`search/recipe`, { search: query });
  },
};
