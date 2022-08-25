/**
 * Explore/selectors.js
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectExplore = state => state.get('Explore', initialState);

const makeSelectWebviewCampaign = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('campaign'),
  );

const makeSelectLoadBanner = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('banner'),
  );

const makeSelectExploreHighlight = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('highlight'),
  );

const makeSelectLoadingHighlight = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('loadingHighlight'),
  );

const makeSelectExploreRecommendation = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('recommendation'),
  );

const makeSelectLoadingRecommendation = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('loadingRecommendation'),
  );

const makeSelectExplorePopularRecipe = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('popularRecipe'),
  );

const makeSelectLoadingPopularRecipe = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('loadingPopularRecipe'),
  );

const makeSelectExplorePublished = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('published'),
  );

const makeSelectLoadingPublished = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('loadingPublished'),
  );

const makeSelectExploreRecentRecipeBook = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('popularRecipeBook'),
  );

const makeSelectLoadingRecentRecipeBook = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('loadingRecentRecipeBook'),
  );

const makeSelectExploreRecent = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('recent'),
  );

const makeSelectExploreRecentData = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('recentData'),
  );

const makeSelectExploreRecentPage = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('recentPage'),
  );

const makeSelectLoadingRecent = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('loadingRecent'),
  );

const makeSelectLoadingMoreRecent = () =>
  createSelector(
    selectExplore,
    ExploreState => ExploreState.get('loadingMoreRecent'),
  );

export {
  selectExplore,
  makeSelectWebviewCampaign,
  makeSelectLoadBanner,
  makeSelectExploreHighlight,
  makeSelectLoadingHighlight,
  makeSelectExploreRecommendation,
  makeSelectLoadingRecommendation,
  makeSelectExplorePopularRecipe,
  makeSelectLoadingPopularRecipe,
  makeSelectExplorePublished,
  makeSelectLoadingPublished,
  makeSelectExploreRecentRecipeBook,
  makeSelectLoadingRecentRecipeBook,
  makeSelectExploreRecent,
  makeSelectExploreRecentData,
  makeSelectExploreRecentPage,
  makeSelectLoadingRecent,
  makeSelectLoadingMoreRecent,
};
