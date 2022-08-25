/**
 * providers/Explore/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  webviewCampaign,
  loadBanner,
  loadExploreHighlight,
  setLoadingHighlight,
  loadExploreRecommendation,
  setLoadingRecommendation,
  loadExplorePopularRecipe,
  setLoadingPopularRecipe,
  loadExplorePublished,
  setLoadingPublished,
  loadExploreRecentRecipeBook,
  setLoadingRecentRecipeBook,
  loadExploreRecent,
  loadMoreExploreRecent,
  setLoadingRecent,
  setLoadingMoreRecent,
  setExploreRecentPage,
  setExploreRecommendation,
  addItemPropCount,
} from '../../store/Explore/actions';
import {
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
  makeSelectLoadingRecent,
  makeSelectExploreRecentPage,
  makeSelectLoadingMoreRecent,
} from '../../store/Explore/selectors';

export const ExploreProvider = () => WrappedComponent => {
  class Explore extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Explore.propTypes = {
    campaign: PropTypes.object,
    banner: PropTypes.object,
    exploreHighlight: PropTypes.object,
    loadingHighlight: PropTypes.bool,
    exploreRecommendation: PropTypes.object,
    loadingRecommendation: PropTypes.bool,
    explorePopularRecipe: PropTypes.object,
    loadingPopularRecipe: PropTypes.bool,
    explorePublished: PropTypes.object,
    loadingPublished: PropTypes.bool,
    exploreRecentRecipeBook: PropTypes.object,
    loadingRecentRecipeBook: PropTypes.bool,
    exploreRecent: PropTypes.object,
    exploreRecentData: PropTypes.object,
    exploreRecentPage: PropTypes.number,
    loadingRecent: PropTypes.bool,
    loadingMoreRecent: PropTypes.bool,
  };

  const mapStateToProps = createStructuredSelector({
    campaign: makeSelectWebviewCampaign(),
    banner: makeSelectLoadBanner(),
    exploreHighlight: makeSelectExploreHighlight(),
    loadingHighlight: makeSelectLoadingHighlight(),
    exploreRecommendation: makeSelectExploreRecommendation(),
    loadingRecommendation: makeSelectLoadingRecommendation(),
    explorePopularRecipe: makeSelectExplorePopularRecipe(),
    loadingPopularRecipe: makeSelectLoadingPopularRecipe(),
    explorePublished: makeSelectExplorePublished(),
    loadingPublished: makeSelectLoadingPublished(),
    exploreRecentRecipeBook: makeSelectExploreRecentRecipeBook(),
    loadingRecentRecipeBook: makeSelectLoadingRecentRecipeBook(),
    exploreRecent: makeSelectExploreRecent(),
    exploreRecentData: makeSelectExploreRecentData(),
    exploreRecentPage: makeSelectExploreRecentPage(),
    loadingRecent: makeSelectLoadingRecent(),
    loadingMoreRecent: makeSelectLoadingMoreRecent(),
  });

  const ExploreConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Explore);

  return hoistNonReactStatics(ExploreConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    webviewCampaign: () => dispatch(webviewCampaign()),
    loadBanner: () => dispatch(loadBanner()),
    loadExploreHighlight: () => dispatch(loadExploreHighlight()),
    setLoadingHighlight: status => dispatch(setLoadingHighlight(status)),
    loadExploreRecommendation: () => dispatch(loadExploreRecommendation()),
    setExploreRecommendation: data => dispatch(setExploreRecommendation(data)),
    setLoadingRecommendation: status => dispatch(setLoadingRecommendation(status)),
    loadExplorePopularRecipe: () => dispatch(loadExplorePopularRecipe()),
    setLoadingPopularRecipe: status => dispatch(setLoadingPopularRecipe(status)),
    loadExplorePublished: () => dispatch(loadExplorePublished()),
    setLoadingPublished: status => dispatch(setLoadingPublished(status)),
    loadExploreRecentRecipeBook: () => dispatch(loadExploreRecentRecipeBook()),
    setLoadingRecentRecipeBook: status => dispatch(setLoadingRecentRecipeBook(status)),
    loadExploreRecent: () => dispatch(loadExploreRecent()),
    loadMoreExploreRecent: () => dispatch(loadMoreExploreRecent()),
    setExploreRecentPage: page => dispatch(setExploreRecentPage(page)),
    setLoadingRecent: status => dispatch(setLoadingRecent(status)),
    setLoadingMoreRecent: status => dispatch(setLoadingMoreRecent(status)),
    addItemPropCount: (itemId, propName, count) =>
      dispatch(addItemPropCount(itemId, propName, count)),
  };
}

export const withExplore = ExploreProvider();
