import { Http } from '../http';

export default {
  all() {
    return Http.get('tag');
  },

  popular() {
    return Http.get('tag/popular');
  },
};
