import { Http } from '../http';

export default {
  getBanner() {
    return Http.get('/banner');
  },
};
