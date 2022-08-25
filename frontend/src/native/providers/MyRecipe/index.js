/**
 * providers/MyRecipe/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadRecipe,
  loadRecipes,
  loadMoreRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  changeFilterStatus,
  changeFilterLabel,
  setLoading,
  resetRecipe,
} from '../../store/MyRecipe/actions';
import {
  makeSelectId,
  makeSelectFilterStatus,
  makeSelectFilterLabel,
  makeSelectFormData,
  makeSelectRecipe,
  makeSelectLoading,
} from '../../store/MyRecipe/selectors';

export const MyRecipeProvider = () => WrappedComponent => {
  class MyRecipe extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  MyRecipe.propTypes = {
    recipeId: PropTypes.number,
    recipe: PropTypes.object,
    filterStatus: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    filterLabel: PropTypes.string,
    loadMyRecipes: PropTypes.func,
    loadMoreMyRecipes: PropTypes.func,
    loadMyRecipeDetail: PropTypes.func,
    createMyRecipe: PropTypes.func,
    updateMyRecipe: PropTypes.func,
    deleteMyRecipe: PropTypes.func,
    changeMyRecipeFilterStatus: PropTypes.func,
    manageLoading: PropTypes.bool,
    setManageLoading: PropTypes.func,
    resetMyRecipeDetail: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    filterStatus: makeSelectFilterStatus(),
    filterLabel: makeSelectFilterLabel(),
    recipeId: makeSelectId(),
    recipe: makeSelectRecipe(),
    formData: makeSelectFormData(),
    manageLoading: makeSelectLoading(),
  });

  const MyRecipeConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MyRecipe);

  return hoistNonReactStatics(MyRecipeConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadMyRecipes: () => dispatch(loadRecipes()),
    loadMoreMyRecipes: () => dispatch(loadMoreRecipes()),
    loadMyRecipeDetail: id => dispatch(loadRecipe(id)),
    createMyRecipe: (formData, saveType) => dispatch(createRecipe(formData, saveType)),
    updateMyRecipe: (id, formData, saveType) => dispatch(updateRecipe(id, formData, saveType)),
    deleteMyRecipe: id => dispatch(deleteRecipe(id)),
    resetMyRecipeDetail: () => dispatch(resetRecipe()),
    changeMyRecipeFilterStatus: status => dispatch(changeFilterStatus(status)),
    changeMyRecipeFilterLabel: label => dispatch(changeFilterLabel(label)),
    setManageLoading: status => dispatch(setLoading(status)),
  };
}

export const withMyRecipe = MyRecipeProvider();
