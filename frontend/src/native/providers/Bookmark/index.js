/**
 * providers/Bookmark/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadBookmarks,
  loadMoreBookmarks,
  addBookmark,
  removeBookmark,
  setLoading,
  setMarked,
  setBookmarks,
} from '../../store/Bookmark/actions';
import {
  makeSelectRecipeId,
  makeSelectLoading,
  makeSelectMarked,
  makeSelectBookmarks,
} from '../../store/Bookmark/selectors';

export const BookmarkProvider = () => WrappedComponent => {
  class Bookmark extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Bookmark.propTypes = {
    bookmarkRecipeId: PropTypes.number,
    bookmarkLoading: PropTypes.bool,
    loadBookmarks: PropTypes.func,
    loadMoreBookmarks: PropTypes.func,
    addBookmark: PropTypes.func,
    removeBookmark: PropTypes.func,
    setBookmarks: PropTypes.func,
    setBookmarkLoading: PropTypes.func,
    setMarked: PropTypes.func,
    marked: PropTypes.bool,
  };

  const mapStateToProps = createStructuredSelector({
    bookmarkRecipeId: makeSelectRecipeId(),
    bookmarkLoading: makeSelectLoading(),
    marked: makeSelectMarked(),
    bookmarks: makeSelectBookmarks(),
  });

  const BookmarkConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Bookmark);

  return hoistNonReactStatics(BookmarkConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadBookmarks: () => dispatch(loadBookmarks()),
    loadMoreBookmarks: () => dispatch(loadMoreBookmarks()),
    setBookmarks: bookmarks => dispatch(setBookmarks(bookmarks)),
    addBookmark: recipe => dispatch(addBookmark(recipe)),
    removeBookmark: id => dispatch(removeBookmark(id)),
    setMarked: status => dispatch(setMarked(status)),
    setBookmarkLoading: status => dispatch(setLoading(status)),
  };
}

export const withBookmark = BookmarkProvider();
