/**
 * scenes/MyRecipeEdit/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Image } from 'react-native';
import { Container } from 'native-base';
import { withAuth } from '../../providers/Auth';
import { withMyRecipe } from '../../providers/MyRecipe';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Form from '../MyRecipeCreate_v1/Form';
import EmptyWrapper from '../MyRecipe/EmptyWrapper';
import IconCooking from '../../images/icon-cooking.png';

export class MyRecipeEditScene extends PureComponent {
  static navigationOptions = {
    title: 'Edit My Recipe',
    header: null,
  };

  componentDidMount() {
    const { loggedIn, navigation, loadMyRecipeDetail } = this.props;
    if (!loggedIn) {
      navigation.navigate('Login');
    }

    const id = navigation.getParam('id');
    if (id) {
      loadMyRecipeDetail(id);
    }
  }

  saveRecipe = () => {
    this.props.updateMyRecipe();
  };

  renderEmpty = () => (
    <EmptyWrapper>
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        My recipe not found
      </Paragraph>
    </EmptyWrapper>
  );

  render() {
    const { recipe } = this.props;
    let rightSettings = null;
    if (recipe) {
      rightSettings = { label: 'Done', handler: () => this.saveRecipe() };
    }
    return (
      <Container>
        <Header
          title="Edit My Recipe"
          leftSettings={{ type: 'back' }}
          rightSettings={rightSettings}
        />
        <Content nospace clean>
          {recipe ? <Form /> : this.renderEmpty()}
        </Content>
      </Container>
    );
    // return <React.Fragment>{recipe ? <Form /> : this.renderEmpty()}</React.Fragment>;
  }
}

MyRecipeEditScene.propTypes = {
  loadMyRecipeDetail: PropTypes.func,
  updateMyRecipe: PropTypes.func,
  loggedIn: PropTypes.bool,
  navigation: PropTypes.object,
  recipe: PropTypes.object,
};

export default compose(
  withAuth,
  withMyRecipe,
)(MyRecipeEditScene);
