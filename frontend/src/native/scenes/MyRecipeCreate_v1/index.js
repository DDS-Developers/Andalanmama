/**
 * scenes/MyRecipeCreate/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Container } from 'native-base';
import { withAuth } from '../../providers/Auth';
import { withMyRecipe } from '../../providers/MyRecipe';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Form from './Form';

export class MyRecipeCreateScene extends PureComponent {
  static navigationOptions = {
    title: 'Create My Recipe',
    header: null,
  };

  componentDidMount() {
    const { loggedIn, navigation } = this.props;
    if (!loggedIn) {
      navigation.navigate('Login');
    }
  }

  saveRecipe = () => {
    this.props.createMyRecipe();
  };

  render() {
    return (
      <Container>
        <Header
          title="Create My Recipe"
          leftSettings={{ type: 'back' }}
          rightSettings={{ label: 'Done', handler: () => this.saveRecipe() }}
        />
        <Content nospace clean>
          <Form />
        </Content>
      </Container>
    );
  }
}

MyRecipeCreateScene.propTypes = {
  createMyRecipe: PropTypes.func,
  loggedIn: PropTypes.bool,
  navigation: PropTypes.object,
};

export default compose(
  withAuth,
  withMyRecipe,
)(MyRecipeCreateScene);
