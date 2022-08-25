import { Http } from '../http';

export default {
  getComment(id, page) {
    if (page) {
      return Http.get(`recipe/comment/${id}?page=${page}`);
    }
    return Http.get(`recipe/comment/${id}`);
  },

  create(id, formData) {
    return Http.post(`recipe/comment/${id}`, formData);
  },

  delete(id) {
    return Http.delete(`comment/${id}`);
  },
  update(id, formData) {
    return Http.put(`comment/${id}`, formData);
  },
};
