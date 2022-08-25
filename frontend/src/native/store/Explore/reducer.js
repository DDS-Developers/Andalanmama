/**
 * Explore/reducer.js
 */
import { fromJS } from 'immutable';
// import Debugger from '../../helpers/Debugger';
import {
  SET_LOAD_WEBVIEW_CAMPAIGN,
  SET_LOAD_BANNER,
  SET_EXPLORE_HIGHLIGHT,
  SET_LOADING_HIGHLIGHT,
  SET_EXPLORE_RECOMMENDATION,
  SET_LOADING_RECOMMENDATION,
  SET_EXPLORE_POPULAR_RECIPE,
  SET_LOADING_POPULAR_RECIPE,
  SET_EXPLORE_PUBLISHED,
  SET_LOADING_PUBLISHED,
  SET_EXPLORE_POPULAR_RECIPE_BOOK,
  SET_LOADING_POPULAR_RECIPE_BOOK,
  LOAD_MORE_EXPLORE_RECENT,
  SET_EXPLORE_RECENT,
  ADD_EXPLORE_RECENT,
  SET_EXPLORE_RECENT_PAGE,
  SET_LOADING_RECENT,
  SET_LOADING_MORE_RECENT,
  ADD_ITEM_PROP_COUNT,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  highlight: null,
  loadingHighlight: false,
  campaign: null,
  banner: [],
  recommendation: [],
  loadingRecommendation: false,
  popularRecipe: [],
  loadingPopularRecipe: false,
  published: [],
  loadingPublished: false,
  popularRecipeBook: [],
  loadingRecentRecipeBook: false,
  recent: [],
  recentData: {},
  recentPage: 1,
  loadingRecent: false,
  loadingMoreRecent: false,
});

function myExploreReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOAD_WEBVIEW_CAMPAIGN:
      return state.set('campaign', action.data);
    case SET_LOAD_BANNER:
      return state.set('banner', fromJS(action.data));
    case SET_EXPLORE_HIGHLIGHT:
      return state.set('highlight', fromJS(action.data));
    case SET_LOADING_HIGHLIGHT:
      return state.set('loadingHighlight', action.status);
    case SET_EXPLORE_RECOMMENDATION:
      return state.set('recommendation', fromJS(action.data));
    case SET_LOADING_RECOMMENDATION:
      return state.set('loadingRecommendation', action.status);
    case SET_EXPLORE_POPULAR_RECIPE:
      return state.set('popularRecipe', fromJS(action.data));
    case SET_LOADING_POPULAR_RECIPE:
      return state.set('loadingPopularRecipe', action.status);
    case SET_EXPLORE_PUBLISHED:
      return state.set('published', fromJS(action.data));
    case SET_LOADING_PUBLISHED:
      return state.set('loadingPublished', action.status);
    case SET_EXPLORE_POPULAR_RECIPE_BOOK:
      return state.set('popularRecipeBook', fromJS(action.data));
    case SET_LOADING_POPULAR_RECIPE_BOOK:
      return state.set('loadingRecentRecipeBook', action.status);
    case LOAD_MORE_EXPLORE_RECENT:
      return state.set('recentPage', state.get('recentPage') + 1);
    case SET_EXPLORE_RECENT:
      return state.set('recentData', fromJS(action.data)).set('recent', fromJS(action.data.data));
    case ADD_EXPLORE_RECENT: {
      const { data } = action;
      const items = fromJS(data.data);
      let stateItems = state.get('recent');
      stateItems = stateItems.concat(items);
      return state.set('recent', stateItems).set('recentData', fromJS(action.data));
    }
    case SET_EXPLORE_RECENT_PAGE:
      return state.set('recentPage', action.page);
    case SET_LOADING_RECENT:
      return state.set('loadingRecent', action.status);
    case SET_LOADING_MORE_RECENT:
      return state.set('loadingMoreRecent', action.status);
    case ADD_ITEM_PROP_COUNT: {
      let newState = state;
      const { itemId, propName, count } = action;

      // Highlights
      // newState = addPropCount(itemId, propName, count, 'highlight', newState);
      // Recommendation
      newState = addPropCount(itemId, propName, count, 'recommendation', newState);
      // Popular Recipe
      newState = addPropCount(itemId, propName, count, 'popularRecipe', newState);
      // Published
      newState = addPropCount(itemId, propName, count, 'published', newState);
      // Recent
      newState = addPropCount(itemId, propName, count, 'recent', newState);

      return newState;
    }
    default:
      return state;
  }
}

function addPropCount(itemId, propName, count, stateName, state) {
  let items = state.get(stateName);
  if (items && items.count() > 0) {
    const index = items.findKey(item => item.get('id') === itemId);
    if (index !== undefined) {
      const item = items.get(index);
      let newCount = parseInt(item.get(propName), 10);
      newCount += count;
      const newItem = item.set(propName, newCount);
      items = items.set(index, newItem);
    }
  }
  return state.set(stateName, items);
}

export default myExploreReducer;
