import { Http } from '../http';

export default {
  all() {
    return Http.get('book');
  },

  detail(id) {
    return Http.get(`book/${id}`);
  },

  userCollections(status, page = 1) {
    return Http.get(`profile/collection?status=${status}&page=${page}`);
  },

  create(data) {
    return Http.post('profile/collection', data);
  },

  update(id, data) {
    return Http.put(`profile/collection/${id}`, data);
  },

  delete(id) {
    return Http.delete(`profile/collection/${id}`);
  },

  deleteRecipe(collectionId, recipeId) {
    return Http.post(`profile/collection/${collectionId}/recipe/${recipeId}`);
  },

  search(keyword) {
    return Http.post('search/book', {
      search: keyword,
    });
  },
};
