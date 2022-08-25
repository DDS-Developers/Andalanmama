import { Http } from '../http';

export default {
  userPublicProfile(id) {
    return Http.get(`user/${id}/profile`);
  },

  userPublicRecipeBook(id) {
    return Http.get(`user/${id}/collection`);
  },

  userPublicRecipes(id) {
    return Http.get(`user/${id}/recipe`);
  },

  search(keyword) {
    return Http.post('search/user', {
      search: keyword,
    });
  },
};
