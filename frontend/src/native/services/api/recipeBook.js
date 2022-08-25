import { Http } from '../http';

export default {
  detail(id) {
    return Http.get(`book/${id}`);
  },
};
