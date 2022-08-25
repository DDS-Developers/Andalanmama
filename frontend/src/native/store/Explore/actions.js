/**
 * EXPLORE/actions.js
 */
import {
  LOAD_WEBVIEW_CAMPAIGN,
  SET_LOAD_WEBVIEW_CAMPAIGN,
  LOAD_BANNER,
  SET_LOAD_BANNER,
  LOAD_EXPLORE_HIGHLIGHT,
  SET_EXPLORE_HIGHLIGHT,
  SET_LOADING_HIGHLIGHT,
  LOAD_EXPLORE_RECOMMENDATION,
  SET_EXPLORE_RECOMMENDATION,
  SET_LOADING_RECOMMENDATION,
  LOAD_EXPLORE_POPULAR_RECIPE,
  SET_EXPLORE_POPULAR_RECIPE,
  SET_LOADING_POPULAR_RECIPE,
  LOAD_EXPLORE_PUBLISHED,
  SET_EXPLORE_PUBLISHED,
  SET_LOADING_PUBLISHED,
  LOAD_EXPLORE_POPULAR_RECIPE_BOOK,
  SET_EXPLORE_POPULAR_RECIPE_BOOK,
  SET_LOADING_POPULAR_RECIPE_BOOK,
  LOAD_EXPLORE_RECENT,
  LOAD_MORE_EXPLORE_RECENT,
  SET_EXPLORE_RECENT,
  ADD_EXPLORE_RECENT,
  SET_LOADING_RECENT,
  SET_EXPLORE_RECENT_PAGE,
  SET_LOADING_MORE_RECENT,
  ADD_ITEM_PROP_COUNT,
} from './constants';

/**
 * Load explore webview campaign
 *
 * @return {object}
 */
export function webviewCampaign() {
  return {
    type: LOAD_WEBVIEW_CAMPAIGN,
  };
}

export function setWebviewCampaign(data) {
  return {
    type: SET_LOAD_WEBVIEW_CAMPAIGN,
    data,
  };
}

/**
 * Load explore banner
 *
 * @return {object}
 */
export function loadBanner() {
  return {
    type: LOAD_BANNER,
  };
}

export function setLoadBanner(data) {
  return {
    type: SET_LOAD_BANNER,
    data,
  };
}

export function loadExploreHighlight() {
  return {
    type: LOAD_EXPLORE_HIGHLIGHT,
  };
}

/**
 * Set explore highlight
 *
 * @param {object} data
 * @return {object}
 */
export function setExploreHighlight(data) {
  return {
    type: SET_EXPLORE_HIGHLIGHT,
    data,
  };
}

/**
 * Set highlight loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingHighlight(status) {
  return {
    type: SET_LOADING_HIGHLIGHT,
    status,
  };
}

/**
 * Load explore Recommendation
 *
 * @return {object}
 */
export function loadExploreRecommendation() {
  return {
    type: LOAD_EXPLORE_RECOMMENDATION,
  };
}

/**
 * Set explore Recommendation
 *
 * @param {object} data
 * @return {object}
 */
export function setExploreRecommendation(data) {
  return {
    type: SET_EXPLORE_RECOMMENDATION,
    data,
  };
}

/**
 * Set recommendation loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingRecommendation(status) {
  return {
    type: SET_LOADING_RECOMMENDATION,
    status,
  };
}

/**
 * Load explore Popular Recipe
 *
 * @return {object}
 */
export function loadExplorePopularRecipe() {
  return {
    type: LOAD_EXPLORE_POPULAR_RECIPE,
  };
}

/**
 * Set explore Popular Recipe
 *
 * @param {object} data
 * @return {object}
 */
export function setExplorePopularRecipe(data) {
  return {
    type: SET_EXPLORE_POPULAR_RECIPE,
    data,
  };
}

/**
 * Set Popular Recipe loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingPopularRecipe(status) {
  return {
    type: SET_LOADING_POPULAR_RECIPE,
    status,
  };
}

/**
 * Load explore Published
 *
 * @return {object}
 */
export function loadExplorePublished() {
  return {
    type: LOAD_EXPLORE_PUBLISHED,
  };
}

/**
 * Set explore Published
 *
 * @param {object} data
 * @return {object}
 */
export function setExplorePublished(data) {
  return {
    type: SET_EXPLORE_PUBLISHED,
    data,
  };
}

/**
 * Set Published loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingPublished(status) {
  return {
    type: SET_LOADING_PUBLISHED,
    status,
  };
}

/**
 * Load explore Popular Recipe Book
 *
 * @return {object}
 */
export function loadExploreRecentRecipeBook() {
  return {
    type: LOAD_EXPLORE_POPULAR_RECIPE_BOOK,
  };
}

/**
 * Set explore Popular Recipe Book
 *
 * @param {object} data
 * @return {object}
 */
export function setExploreRecentRecipeBook(data) {
  return {
    type: SET_EXPLORE_POPULAR_RECIPE_BOOK,
    data,
  };
}

/**
 * Set Popular Recipe Book loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingRecentRecipeBook(status) {
  return {
    type: SET_LOADING_POPULAR_RECIPE_BOOK,
    status,
  };
}

/**
 * Load explore Recent
 *
 * @return {object}
 */
export function loadExploreRecent() {
  return {
    type: LOAD_EXPLORE_RECENT,
  };
}

/**
 * Load more explore Recent
 *
 * @return {object}
 */
export function loadMoreExploreRecent() {
  return {
    type: LOAD_MORE_EXPLORE_RECENT,
  };
}

/**
 * Set explore Recent page
 *
 * @param {number} page
 * @return {object}
 */
export function setExploreRecentPage(page) {
  return {
    type: SET_EXPLORE_RECENT_PAGE,
    page,
  };
}

/**
 * Set explore Recent
 *
 * @param {object} data
 * @return {object}
 */
export function setExploreRecent(data) {
  return {
    type: SET_EXPLORE_RECENT,
    data,
  };
}

/**
 * Add explore Recent
 *
 * @param {object} data
 * @return {object}
 */
export function addExploreRecent(data) {
  return {
    type: ADD_EXPLORE_RECENT,
    data,
  };
}

/**
 * Set Recent loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingRecent(status) {
  return {
    type: SET_LOADING_RECENT,
    status,
  };
}

/**
 * Set more recent loading
 *
 * @param  {string} status
 *
 * @return {object}
 */
export function setLoadingMoreRecent(status) {
  return {
    type: SET_LOADING_MORE_RECENT,
    status,
  };
}

/**
 * Update item prop count
 *
 * @param  {string} propName
 * @param  {mixed} value
 *
 * @return {object}
 */
export function addItemPropCount(itemId, propName, count) {
  return {
    type: ADD_ITEM_PROP_COUNT,
    itemId,
    propName,
    count,
  };
}
