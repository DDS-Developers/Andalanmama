import { Http } from '../http';

export default {
  list(page = 1) {
    return Http.get(`profile/bookmark?page=${page}`);
  },

  add(id) {
    return Http.post(`bookmark/${id}`);
  },

  remove(id) {
    return Http.post(`bookmark/${id}`);
  },
};
