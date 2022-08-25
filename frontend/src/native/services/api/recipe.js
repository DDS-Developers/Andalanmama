import { Http } from '../http';

export default {
  myRecipe(status = 'all', page = 1) {
    return Http.get(`/profile/recipe?status=${status}&page=${page}`);
  },

  myRecipeCreate(formData) {
    return Http.post(`/profile/recipe`, formData, { 'Content-Type': 'application/json' });
  },

  myRecipeCreateGet(id) {
    return Http.get(`/profile/recipe/${id}`);
  },

  myRecipeUpdate(id, formData) {
    return Http.put(`/profile/recipe/${id}`, formData, { 'Content-Type': 'application/json' });
  },

  myRecipeRemove(id) {
    return Http.delete(`/profile/recipe/${id}`);
  },

  detail(id) {
    return Http.get(`recipe/${id}`);
  },

  filter(categories) {
    return Http.post('recipe/filter', {
      categories,
    });
  },

  like(id) {
    return Http.post(`/like/${id}`);
  },

  unlike(id) {
    return Http.post(`/like/${id}`);
  },

  search(keyword) {
    return Http.post('search/recipe', {
      search: keyword,
    });
  },

  userRecipes(page = 1) {
    return Http.get(`profile/recipe?page=${page}`);
  },
};
