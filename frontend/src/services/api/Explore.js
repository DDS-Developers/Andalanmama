import { Http } from '../http';

export default {
  getExploreHighlight() {
    return Http.get('explore/highlight');
  },
};
