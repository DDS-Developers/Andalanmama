import { Http } from '../http';

export default {
  getRecentArticles(page = 1, perPage = 10) {
    return Http.get(`article?page=${page}&per_page=${perPage}`);
  },

  getHightlight() {
    return Http.get('article/highlight');
  },

  getTopHightlight() {
    return Http.get('article/highlight/single');
  },

  getArticle(id) {
    return Http.get(`article/${id}`);
  },
};
