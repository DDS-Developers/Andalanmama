import { Http } from '../http';

export default {
  list(page = 1) {
    return Http.get(`/profile/inbox?page=${page}`);
  },

  remove(id) {
    return Http.delete(`/profile/inbox/${id}`);
  },
};
