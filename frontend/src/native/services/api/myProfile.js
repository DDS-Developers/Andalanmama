import { Http } from '../http';

export default {
  profile() {
    return Http.get(`profile`);
  },

  addSharePoint() {
    return Http.get('sharerecipepoints');
  },

  updateProfile(id, formData) {
    // return Http.put(`profile/${id}`, formData, {
    //   'Content-Type': 'application/json;charset=utf-8',
    // });
    return Http.put(`profile`, formData, {
      'Content-Type': 'application/json;charset=utf-8',
    });
  },
};
