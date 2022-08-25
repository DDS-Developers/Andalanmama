import { Http } from '../http';

export default {
  getCategories() {
    return Http.get('tag/popular');
  },

  getPopularCategories() {
    return Http.get('tag/popular');
  },
};
