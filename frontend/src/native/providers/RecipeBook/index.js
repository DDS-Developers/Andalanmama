/**
 * providers/RecipeBook/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadRecipeBook,
  loadRecipeBooks,
  loadMoreRecipeBooks,
  createRecipeBook,
  updateRecipeBook,
  deleteRecipeBook,
  changeFilterStatus,
  changeFilterLabel,
  setRecipeBook,
  resetData,
  changeStatus,
  changeTitle,
  setRecipes,
  addRecipe,
  removeRecipe,
  setDataChanged,
  checkInputError,
  checkAllInputErrors,
  deleteRecipe,
} from '../../store/RecipeBook/actions';
import {
  makeSelectId,
  makeSelectFilterStatus,
  makeSelectFilterLabel,
  makeSelectRecipeBook,
  makeSelectLoading,
  makeSelectRecipes,
  makeSelectRecipeIds,
  makeSelectTitle,
  makeSelectStatus,
  makeSelectDataChanged,
  makeSelectTitleError,
  makeSelectRecipeError,
  makeSelectErrorCount,
} from '../../store/RecipeBook/selectors';

export const RecipeBookProvider = () => WrappedComponent => {
  class RecipeBook extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  RecipeBook.propTypes = {
    recipeBookId: PropTypes.number,
    recipeBook: PropTypes.object,
    filterStatus: PropTypes.string,
    filterLabel: PropTypes.string,
    loadRecipeBooks: PropTypes.func,
    loadMoreRecipeBooks: PropTypes.func,
    loadRecipeBookDetail: PropTypes.func,
    createRecipeBook: PropTypes.func,
    updateRecipeBook: PropTypes.func,
    deleteRecipeBook: PropTypes.func,
    changeFilterStatus: PropTypes.func,
    changeFilterLabel: PropTypes.func,
    resetRecipeBookData: PropTypes.func,
    manageLoading: PropTypes.bool,
    setManageLoading: PropTypes.func,
    setRecipeBook: PropTypes.func,
    changeBookTitle: PropTypes.func,
    changeBookStatus: PropTypes.func,
    setBookRecipes: PropTypes.func,
    addBookRecipe: PropTypes.func,
    removeBookRecipe: PropTypes.func,
    deleteBookRecipe: PropTypes.func,
    bookTitle: PropTypes.string,
    bookStatus: PropTypes.bool,
    bookRecipes: PropTypes.object,
    bookRecipeIds: PropTypes.object,
    bookDataChanged: PropTypes.bool,
    setBookDataChanged: PropTypes.func,
    bookTitleError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    bookRecipeError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    bookErrorCount: PropTypes.number,
    checkInputError: PropTypes.func,
    checkAllInputErrors: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    filterStatus: makeSelectFilterStatus(),
    filterLabel: makeSelectFilterLabel(),
    recipeBookId: makeSelectId(),
    recipeBook: makeSelectRecipeBook(),
    manageLoading: makeSelectLoading(),
    bookRecipes: makeSelectRecipes(),
    bookRecipeIds: makeSelectRecipeIds(),
    bookTitle: makeSelectTitle(),
    bookStatus: makeSelectStatus(),
    bookDataChanged: makeSelectDataChanged(),
    bookTitleError: makeSelectTitleError(),
    bookRecipeError: makeSelectRecipeError(),
    bookErrorCount: makeSelectErrorCount(),
  });

  const RecipeBookConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(RecipeBook);

  return hoistNonReactStatics(RecipeBookConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadRecipeBooks: () => dispatch(loadRecipeBooks()),
    loadMoreRecipeBooks: () => dispatch(loadMoreRecipeBooks()),
    loadRecipeBookDetail: id => dispatch(loadRecipeBook(id)),
    setRecipeBook: recipeBook => dispatch(setRecipeBook(recipeBook)),
    createRecipeBook: (formData, saveType) => dispatch(createRecipeBook(formData, saveType)),
    updateRecipeBook: (id, formData, saveType) =>
      dispatch(updateRecipeBook(id, formData, saveType)),
    deleteRecipeBook: id => dispatch(deleteRecipeBook(id)),
    changeFilterStatus: status => dispatch(changeFilterStatus(status)),
    changeFilterLabel: label => dispatch(changeFilterLabel(label)),
    changeBookTitle: title => dispatch(changeTitle(title)),
    changeBookStatus: status => dispatch(changeStatus(status)),
    setBookDataChanged: status => dispatch(setDataChanged(status)),
    setBookRecipes: recipes => dispatch(setRecipes(recipes)),
    addBookRecipe: recipe => dispatch(addRecipe(recipe)),
    removeBookRecipe: recipeId => dispatch(removeRecipe(recipeId)),
    deleteBookRecipe: (recipeId, recipeBookId) => dispatch(deleteRecipe(recipeId, recipeBookId)),
    resetRecipeBookData: () => dispatch(resetData()),
    checkInputError: fieldName => dispatch(checkInputError(fieldName)),
    checkAllInputErrors: () => dispatch(checkAllInputErrors()),
  };
}

export const withRecipeBook = RecipeBookProvider();
