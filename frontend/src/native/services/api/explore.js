import { Http } from '../http';

export default {
  getExploreHighlight() {
    return Http.get('explore/highlight');
  },

  getExploreRecommendation() {
    return Http.get('explore/recommend');
  },

  getExplorePopularRecipe() {
    return Http.get('explore/popular/likes');
    // return Http.get('explore/popular');
  },

  getExplorePublished() {
    return Http.get('explore/recent-publish');
  },

  getExploreRecentRecipeBook() {
    return Http.get('explore/recent-book');
  },

  getExploreRecent(page = 1) {
    return Http.get(`explore/recent?page=${page}`);
  },

  getBanner() {
    return Http.get('banner/app');
  },

  getWebviewCampaign() {
    return Http.get('campaign');
  },
};
