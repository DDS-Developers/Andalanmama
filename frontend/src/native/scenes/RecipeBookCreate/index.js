/**
 * scenes/RecipeBookCreate/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withAuth } from '../../providers/Auth';
import { withRecipeBook } from '../../providers/RecipeBook';

import Main from './Main';

export class RecipeBookCreate extends PureComponent {
  static navigationOptions = {
    title: 'Buat Buku Resep',
    header: null,
  };

  componentDidMount() {
    const { loggedIn, navigation } = this.props;
    if (!loggedIn) {
      navigation.navigate('Login');
    }
    this.props.resetRecipeBookData();
  }

  render() {
    return <Main sceneTitle="Buat Buku Resep" />;
  }
}

RecipeBookCreate.propTypes = {
  loggedIn: PropTypes.bool,
  navigation: PropTypes.object,
  resetRecipeBookData: PropTypes.func,
};

export default compose(
  withAuth,
  withRecipeBook,
)(RecipeBookCreate);
