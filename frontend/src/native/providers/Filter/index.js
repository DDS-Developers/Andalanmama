/**
 * providers/Filter/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadCategories,
  setCategories,
  loadResult,
  setResult,
  setLoading,
  setSelectedCategories,
  addSelectedCategory,
  removeSelectedCategory,
  resetData,
  resetSelected,
  setFilterDialog,
  setUseFilter,
  setPopularCategories,
  loadPopularCategories,
} from '../../store/Filter/actions';
import {
  makeSelectCategories,
  makeSelectSelectedCategories,
  makeSelectRecipes,
  makeSelectLoading,
  makeSelectFilterDialog,
  makeSelectIsUseFilter,
  makeSelectPopularCategories,
} from '../../store/Filter/selectors';

export const FilterProvider = () => WrappedComponent => {
  class Filter extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Filter.propTypes = {
    categories: PropTypes.object,
    popularCategories: PropTypes.object,
    selectedCategories: PropTypes.object,
    recipes: PropTypes.object,
    filterLoading: PropTypes.bool,
    loadCategories: PropTypes.func,
    setCategories: PropTypes.func,
    loadPopularCategories: PropTypes.func,
    setPopularCategories: PropTypes.func,
    loadResult: PropTypes.func,
    setResult: PropTypes.func,
    setSelectedCategories: PropTypes.func,
    addSelectedCategory: PropTypes.func,
    removeSelectedCategory: PropTypes.func,
    setFilterLoading: PropTypes.func,
    setFilterDialog: PropTypes.func,
    resetFilterData: PropTypes.func,
    resetFilterSelected: PropTypes.func,
    isUseFilter: PropTypes.bool,
    setUseFilter: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    categories: makeSelectCategories(),
    popularCategories: makeSelectPopularCategories(),
    selectedCategories: makeSelectSelectedCategories(),
    recipes: makeSelectRecipes(),
    filterLoading: makeSelectLoading(),
    filterDialog: makeSelectFilterDialog(),
    isUseFilter: makeSelectIsUseFilter(),
  });

  const FilterConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Filter);

  return hoistNonReactStatics(FilterConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadCategories: () => dispatch(loadCategories()),
    setCategories: items => dispatch(setCategories(items)),
    loadPopularCategories: () => dispatch(loadPopularCategories()),
    setPopularCategories: items => dispatch(setPopularCategories(items)),
    loadResult: () => dispatch(loadResult()),
    setResult: recipes => dispatch(setResult(recipes)),
    setSelectedCategories: categories => dispatch(setSelectedCategories(categories)),
    addSelectedCategory: category => dispatch(addSelectedCategory(category)),
    removeSelectedCategory: id => dispatch(removeSelectedCategory(id)),
    setFilterLoading: status => dispatch(setLoading(status)),
    setFilterDialog: status => dispatch(setFilterDialog(status)),
    setUseFilter: status => dispatch(setUseFilter(status)),
    resetFilterData: () => dispatch(resetData()),
    resetFilterSelected: () => dispatch(resetSelected()),
  };
}

export const withFilter = FilterProvider();
