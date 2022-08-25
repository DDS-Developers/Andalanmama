import { Http } from '../http';

export default {
  getRecommendedCollection() {
    return Http.get('book');
  },
};
