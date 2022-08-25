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
  loadRecipe,
  setRecipe,
  setLoading,
  addLike,
  removeLike,
  setLiked,
  deleteRecipeComment,
  updateComment,
  showVideoModal,
} from '../../store/Recipe/actions';
import {
  makeSelectId,
  makeSelectRecipe,
  makeSelectLoading,
  makeSelectLiked,
  makeSelectLikeCount,
  makeSelectRecipeComments,
  makeSelectVideoModal,
} from '../../store/Recipe/selectors';

export const RecipeProvider = () => WrappedComponent => {
  class Recipe extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Recipe.propTypes = {
    recipeId: PropTypes.number,
    recipe: PropTypes.object,
    detailLoading: PropTypes.bool,
    loadRecipe: PropTypes.func,
    setRecipe: PropTypes.func,
    setDetailLoading: PropTypes.func,
    setLiked: PropTypes.func,
    liked: PropTypes.bool,
    likeCount: PropTypes.number,
    addLike: PropTypes.func,
    removeLike: PropTypes.func,
    recipeDetailComments: PropTypes.object,
    deleteComment: PropTypes.func,
    recipeUpdateComment: PropTypes.func,
    showVideoModal: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    recipeId: makeSelectId(),
    recipe: makeSelectRecipe(),
    detailLoading: makeSelectLoading(),
    liked: makeSelectLiked(),
    likeCount: makeSelectLikeCount(),
    recipeDetailComments: makeSelectRecipeComments(),
    videoModal: makeSelectVideoModal(),
  });

  const RecipeConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Recipe);

  return hoistNonReactStatics(RecipeConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadRecipe: (id, restricted) => dispatch(loadRecipe(id, restricted)),
    setRecipe: recipe => dispatch(setRecipe(recipe)),
    deleteRecipeComment: id => dispatch(deleteRecipeComment(id)),
    setDetailLoading: status => dispatch(setLoading(status)),
    addLike: id => dispatch(addLike(id)),
    removeLike: id => dispatch(removeLike(id)),
    setLiked: status => dispatch(setLiked(status)),
    recipeUpdateComment: id => dispatch(updateComment(id)),
    showVideoModal: status => dispatch(showVideoModal(status)),
  };
}

export const withRecipe = RecipeProvider();
