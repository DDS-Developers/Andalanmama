/**
 * RecipeBook/saga.js
 */
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { responseError } from '../App/actions';
import exploreServices from '../../services/api/explore';
import {
  LOAD_WEBVIEW_CAMPAIGN,
  LOAD_BANNER,
  LOAD_EXPLORE_HIGHLIGHT,
  LOAD_EXPLORE_RECOMMENDATION,
  LOAD_EXPLORE_POPULAR_RECIPE,
  LOAD_EXPLORE_PUBLISHED,
  LOAD_EXPLORE_POPULAR_RECIPE_BOOK,
  LOAD_EXPLORE_RECENT,
  LOAD_MORE_EXPLORE_RECENT,
} from './constants';
import {
  setWebviewCampaign,
  setLoadBanner,
  setExploreHighlight,
  setLoadingHighlight,
  setExploreRecommendation,
  setLoadingRecommendation,
  setExplorePopularRecipe,
  setLoadingPopularRecipe,
  setExplorePublished,
  setLoadingPublished,
  setExploreRecentRecipeBook,
  setLoadingRecentRecipeBook,
  setExploreRecent,
  setLoadingRecent,
  setLoadingMoreRecent,
  addExploreRecent,
} from './actions';
import { makeSelectExploreRecentPage } from './selectors';

/**
 * Init load Explore Webview Campaign
 */
export function* initWebviewCampaign() {
  try {
    const response = yield call(exploreServices.getWebviewCampaign);
    yield put(setWebviewCampaign(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get campaign'));
  } finally {
  }
}

/**
 * Init load Explore Banner
 */
export function* initLoadBanner() {
  try {
    const response = yield call(exploreServices.getBanner);
    yield put(setLoadBanner(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get banner'));
  } finally {
  }
}

/**
 * Init load Explore Highlight
 */
export function* initLoadExploreHighlight() {
  yield put(setLoadingHighlight(true));
  try {
    const response = yield call(exploreServices.getExploreHighlight);
    yield put(setExploreHighlight(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get highlight recipe'));
  } finally {
    yield put(setLoadingHighlight(false));
  }
}

/**
 * Init load Explore Recommendation
 */
export function* initLoadExploreRecommendation() {
  yield put(setLoadingRecommendation(true));
  try {
    const response = yield call(exploreServices.getExploreRecommendation);
    yield put(setExploreRecommendation(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recommendation recipe'));
  } finally {
    yield put(setLoadingRecommendation(false));
  }
}

/**
 * Init load Explore Popular Recipe
 */
export function* initLoadExplorePopularRecipe() {
  yield put(setLoadingPopularRecipe(true));
  try {
    const response = yield call(exploreServices.getExplorePopularRecipe);
    yield put(setExplorePopularRecipe(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get popular recipe'));
  } finally {
    yield put(setLoadingPopularRecipe(false));
  }
}

/**
 * Init load Explore Pubilished
 */
export function* initLoadExplorePublished() {
  yield put(setLoadingPublished(true));
  try {
    const response = yield call(exploreServices.getExplorePublished);
    yield put(setExplorePublished(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get publised recipe'));
  } finally {
    yield put(setLoadingPublished(false));
  }
}

/**
 * Init load Explore Popular Recipa Book
 */
export function* initLoadExploreRecentRecipeBook() {
  yield put(setLoadingRecentRecipeBook(true));
  try {
    const response = yield call(exploreServices.getExploreRecentRecipeBook);
    yield put(setExploreRecentRecipeBook(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get popular recipe book'));
  } finally {
    yield put(setLoadingRecentRecipeBook(false));
  }
}

/**
 * Init load Explore Recent
 */
export function* initLoadExploreRecent() {
  yield put(setLoadingRecent(true));
  try {
    const response = yield call(exploreServices.getExploreRecent);
    yield put(setExploreRecent(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recent recipe'));
  } finally {
    yield put(setLoadingRecent(false));
  }
}

/**
 * Init load more Explore Recent
 */
export function* initLoadMoreExploreRecent() {
  yield put(setLoadingMoreRecent(true));
  try {
    const page = yield select(makeSelectExploreRecentPage());
    const response = yield call(exploreServices.getExploreRecent, page);
    yield put(addExploreRecent(response.data));
  } catch (err) {
    yield put(responseError(err, 'Error get recent recipe'));
  } finally {
    yield put(setLoadingMoreRecent(false));
  }
}

export default [
  takeLatest(LOAD_WEBVIEW_CAMPAIGN, initWebviewCampaign),
  takeLatest(LOAD_BANNER, initLoadBanner),
  takeLatest(LOAD_EXPLORE_HIGHLIGHT, initLoadExploreHighlight),
  takeLatest(LOAD_EXPLORE_RECOMMENDATION, initLoadExploreRecommendation),
  takeLatest(LOAD_EXPLORE_POPULAR_RECIPE, initLoadExplorePopularRecipe),
  takeLatest(LOAD_EXPLORE_PUBLISHED, initLoadExplorePublished),
  takeLatest(LOAD_EXPLORE_POPULAR_RECIPE_BOOK, initLoadExploreRecentRecipeBook),
  takeLatest(LOAD_EXPLORE_RECENT, initLoadExploreRecent),
  takeLatest(LOAD_MORE_EXPLORE_RECENT, initLoadMoreExploreRecent),
];
