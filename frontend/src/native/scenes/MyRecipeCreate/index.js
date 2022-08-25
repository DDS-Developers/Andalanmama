/**
 * scenes/MyRecipeCreate/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withAuth } from '../../providers/Auth';
import Main from './Main';

export class MyRecipeCreateScene extends PureComponent {
  // https://reactnavigation.org/docs/en/navigation-options.html
  static navigationOptions = {
    title: 'Buat Resep',
    header: null,
  };

  componentDidMount() {
    const { loggedIn, navigation } = this.props;
    if (!loggedIn) {
      navigation.navigate('Login');
    }
  }

  render() {
    return <Main sceneTitle="Buat Resep" />;
  }
}

MyRecipeCreateScene.propTypes = {
  loggedIn: PropTypes.bool,
  navigation: PropTypes.object,
};

export default withAuth(MyRecipeCreateScene);
