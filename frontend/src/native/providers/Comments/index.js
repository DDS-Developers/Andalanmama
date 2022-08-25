/**
 * providers/Recipe/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadComments,
  setLoadingComments,
  loadNextPage,
  loadPreviousPage,
  deleteComment,
  createComment,
  setBodyComment,
  changeBodyComment,
  checkInputError,
  checkAllInputErrors,
  updateComment,
  resetData,
} from '../../store/Comments/actions';
import {
  makeSelectComments,
  makeSelectLoadingComments,
  makeSelectCommentsData,
  makeSelectBodyComment,
  makeSelectInputErrors,
  makeSelectInputErrorCount,
} from '../../store/Comments/selectors';

export const CommentProvider = () => WrappedComponent => {
  class Comments extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Comments.propTypes = {
    comments: PropTypes.object,
    commentsData: PropTypes.object,
    loadComments: PropTypes.func,
    loadNextPage: PropTypes.func,
    loadPrevPage: PropTypes.func,
    deleteComment: PropTypes.func,
    createComment: PropTypes.func,
    setBodyComment: PropTypes.func,
    changeBodyComment: PropTypes.func,
    bodyComment: PropTypes.string,
    loadingComments: PropTypes.bool,
    checkInputError: PropTypes.func,
    checkAllInputErrors: PropTypes.func,
    inputErrors: PropTypes.object,
    inputErrorCount: PropTypes.number,
    updateComment: PropTypes.func,
    resetData: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    comments: makeSelectComments(),
    commentsData: makeSelectCommentsData(),
    loadingComments: makeSelectLoadingComments(),
    bodyComment: makeSelectBodyComment(),
    inputErrors: makeSelectInputErrors(),
    inputErroCount: makeSelectInputErrorCount(),
  });

  const CommentConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Comments);

  return hoistNonReactStatics(CommentConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadComments: id => dispatch(loadComments(id)),
    deleteComment: id => dispatch(deleteComment(id)),
    setBodyComment: body => dispatch(setBodyComment(body)),
    changeBodyComment: data => dispatch(changeBodyComment(data)),
    createComment: () => dispatch(createComment()),
    updateComment: id => dispatch(updateComment(id)),
    loadNextPage: () => dispatch(loadNextPage()),
    loadPrevPage: () => dispatch(loadPreviousPage()),
    setLoadingComments: status => dispatch(setLoadingComments(status)),
    checkInputError: fieldName => dispatch(checkInputError(fieldName)),
    checkAllInputErrors: () => dispatch(checkAllInputErrors()),
    resetData: () => dispatch(resetData()),
  };
}

export const withComments = CommentProvider();
