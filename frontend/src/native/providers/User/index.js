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
  loadUserProfile,
  setUserProfile,
  setUserProfileLoading,
  resetData,
  loadUserRecipeBook,
  setUserRecipeBook,
  setUserRecipeBookLoading,
  loadUserRecipes,
  setUserRecipes,
  setUserRecipesLoading,
} from '../../store/User/actions';
import {
  makeSelectUser,
  makeSelectLoadingUser,
  makeSelectRecipeBook,
  makeSelectLoadingRecipeBook,
  makeSelectRecipes,
  makeSelectLoadingRecipes,
} from '../../store/User/selectors';

export const UserProvider = () => WrappedComponent => {
  class User extends React.Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  User.propTypes = {
    user: PropTypes.object,
    loadingUser: PropTypes.bool,
    loadUserProfile: PropTypes.func,
    recipeBook: PropTypes.object,
    loadingRecipeBook: PropTypes.bool,
    loadUserRecipeBook: PropTypes.func,
    recipes: PropTypes.object,
    loadingRecipes: PropTypes.bool,
    loadUserRecipes: PropTypes.func,
    resetData: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    user: makeSelectUser(),
    loadingUser: makeSelectLoadingUser(),
    recipeBook: makeSelectRecipeBook(),
    loadingRecipeBook: makeSelectLoadingRecipeBook(),
    recipes: makeSelectRecipes(),
    loadUserRecipes: makeSelectLoadingRecipes(),
  });

  const UserConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(User);

  return hoistNonReactStatics(UserConnect, WrappedComponent);
};

export function mapDispatchToProps(dispatch) {
  return {
    loadUserProfile: id => dispatch(loadUserProfile(id)),
    setUserProfile: user => dispatch(setUserProfile(user)),
    setUserProfileLoading: status => dispatch(setUserProfileLoading(status)),
    loadUserRecipeBook: id => dispatch(loadUserRecipeBook(id)),
    setUserRecipeBook: user => dispatch(setUserRecipeBook(user)),
    setUserRecipeBookLoading: status => dispatch(setUserRecipeBookLoading(status)),
    loadUserRecipes: id => dispatch(loadUserRecipes(id)),
    setUserRecipes: user => dispatch(setUserRecipes(user)),
    setUserRecipesLoading: status => dispatch(setUserRecipesLoading(status)),
    resetData: () => dispatch(resetData()),
  };
}

export const withUser = UserProvider();
