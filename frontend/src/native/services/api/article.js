import { Http } from '../http';

export default {
  getArticleHighlight() {
    return Http.get('article?highlight=true');
  },

  getArticleLatest(page) {
    return Http.get(`article?page=${page}`);
  },
};
