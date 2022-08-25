/**
 * providers/Search/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadRecipes,
  loadBooks,
  loadAccounts,
  setRecipes,
  setBooks,
  setAccounts,
  setRecipeLoading,
  setBookLoading,
  setAccountLoading,
  setFilterStatus,
  resetData,
  setKeyword,
} from '../../store/Search/actions';
import {
  makeSelectRecipes,
  makeSelectBooks,
  makeSelectAccounts,
  makeSelectKeyword,
  makeSelectRecipeLoading,
  makeSelectBookLoading,
  makeSelectAccountLoading,
  makeSelectFilterStatus,
} from '../../store/Search/selectors';

export const SearchProvider = () => WrappedComponent => {
  class Search extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Search.propTypes = {
    keyword: PropTypes.string,
    searchRecipes: PropTypes.object,
    searchBooks: PropTypes.object,
    searchAccounts: PropTypes.object,
    recipeLoading: PropTypes.bool,
    bookLoading: PropTypes.bool,
    accountLoading: PropTypes.bool,
    loadRecipes: PropTypes.func,
    loadBooks: PropTypes.func,
    loadAccounts: PropTypes.func,
    setRecipes: PropTypes.func,
    setBooks: PropTypes.func,
    setAccounts: PropTypes.func,
    setRecipeLoading: PropTypes.func,
    setBookLoading: PropTypes.func,
    setAccountLoading: PropTypes.func,
    resetSearchData: PropTypes.func,
    setFilterStatus: PropTypes.func,
    setKeyword: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    keyword: makeSelectKeyword(),
    searchRecipes: makeSelectRecipes(),
    searchBooks: makeSelectBooks(),
    searchAccounts: makeSelectAccounts(),
    recipeLoading: makeSelectRecipeLoading(),
    bookLoading: makeSelectBookLoading(),
    accountLoading: makeSelectAccountLoading(),
    filterStatus: makeSelectFilterStatus(),
  });

  const SearchConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Search);

  return hoistNonReactStatics(SearchConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    setKeyword: keyword => dispatch(setKeyword(keyword)),
    loadRecipes: () => dispatch(loadRecipes()),
    loadBooks: () => dispatch(loadBooks()),
    loadAccounts: () => dispatch(loadAccounts()),
    setRecipes: items => dispatch(setRecipes(items)),
    setBooks: items => dispatch(setBooks(items)),
    setAccounts: items => dispatch(setAccounts(items)),
    setRecipeLoading: status => dispatch(setRecipeLoading(status)),
    setBookLoading: status => dispatch(setBookLoading(status)),
    setAccountLoading: status => dispatch(setAccountLoading(status)),
    setFilterStatus: status => dispatch(setFilterStatus(status)),
    resetSearchData: () => dispatch(resetData()),
  };
}

export const withSearch = SearchProvider();
