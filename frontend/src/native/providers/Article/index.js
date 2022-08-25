/**
 * providers/Article/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadArticleHighlight,
  setLoadingHighlight,
  loadArticleLatest,
  setLoadingLatest,
} from '../../store/Article/actions';
import {
  makeSelectArticleHighlight,
  makeSelectLoadingHighlight,
  makeSelectArticleLatest,
  makeSelectLoadingLatest,
} from '../../store/Article/selectors';

export const ArticleProvider = () => WrappedComponent => {
  class Article extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Article.propTypes = {
    articleHighlight: PropTypes.object,
    loadingHighlight: PropTypes.bool,
    articleLatest: PropTypes.object,
    loadingLatest: PropTypes.bool,
  };

  const mapStateToProps = createStructuredSelector({
    articleHighlight: makeSelectArticleHighlight(),
    loadingHighlight: makeSelectLoadingHighlight(),
    articleLatest: makeSelectArticleLatest(),
    loadingLatest: makeSelectLoadingLatest(),
  });

  const ArticleConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Article);

  return hoistNonReactStatics(ArticleConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadArticleHighlight: () => dispatch(loadArticleHighlight()),
    setLoadingHighlight: status => dispatch(setLoadingHighlight(status)),
    loadArticleLatest: page => dispatch(loadArticleLatest(page)),
    setLoadingLatest: status => dispatch(setLoadingLatest(status)),
  };
}

export const withArticle = ArticleProvider();
