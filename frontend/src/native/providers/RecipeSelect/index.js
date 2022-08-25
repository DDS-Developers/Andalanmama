/**
 * providers/RecipeSelect/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadMyRecipes,
  loadMoreMyRecipes,
  loadBookmarks,
  loadMoreBookmarks,
  setItemType,
  setPaged,
  setItems,
  addItems,
  setLoading,
  clearItems,
} from '../../store/RecipeSelect/actions';
import {
  makeSelectItems,
  makeSelectItemType,
  makeSelectPaged,
  makeSelectLoading,
} from '../../store/RecipeSelect/selectors';

export const RecipeSelectProvider = () => WrappedComponent => {
  class RecipeSelect extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  RecipeSelect.propTypes = {
    items: PropTypes.object,
    paged: PropTypes.number,
    itemType: PropTypes.string,
    loading: PropTypes.bool,
    loadMyRecipes: PropTypes.func,
    loadBookmarks: PropTypes.func,
    loadMoreMyRecipes: PropTypes.func,
    loadMoreBookmarks: PropTypes.func,
    setLoading: PropTypes.func,
    setPaged: PropTypes.func,
    setItemType: PropTypes.func,
    clearItems: PropTypes.func,
    setItems: PropTypes.func,
    addItems: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    items: makeSelectItems(),
    paged: makeSelectPaged(),
    itemType: makeSelectItemType(),
    loading: makeSelectLoading(),
  });

  const RecipeSelectConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(RecipeSelect);

  return hoistNonReactStatics(RecipeSelectConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadMyRecipes: () => dispatch(loadMyRecipes()),
    loadBookmarks: () => dispatch(loadBookmarks()),
    loadMoreMyRecipes: () => dispatch(loadMoreMyRecipes()),
    loadMoreBookmarks: () => dispatch(loadMoreBookmarks()),
    setItemType: type => dispatch(setItemType(type)),
    setPaged: paged => dispatch(setPaged(paged)),
    setLoading: status => dispatch(setLoading(status)),
    setItems: items => dispatch(setItems(items)),
    addItems: items => dispatch(addItems(items)),
    clearItems: () => dispatch(clearItems()),
  };
}

export const withRecipeSelect = RecipeSelectProvider();
