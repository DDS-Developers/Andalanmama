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
import Loader from '../../components/Loader';
import Paragraph from '../../components/Paragraph';
import Main from '../MyRecipeCreate/Main';
import EmptyWrapper from '../MyRecipe/EmptyWrapper';
import IconCooking from '../../images/icon-cooking.png';

export class MyRecipeEditScene extends PureComponent {
  static navigationOptions = {
    title: 'Ubah Resep',
    header: null,
  };

  componentDidMount() {
    const { loggedIn, navigation, route, loadMyRecipeDetail } = this.props;
    const { id } = route.params;

    if (!loggedIn) {
      navigation.navigate('Login');
    }

    if (id) {
      loadMyRecipeDetail(id);
    }
  }

  componentWillUnmount() {
    this.props.resetMyRecipeDetail();
  }

  renderEmpty = () => (
    <Container>
      <Header title="Ubah Resep" leftSettings={{ type: 'back' }} />
      <Content nospace clean>
        <Loader visible={this.props.manageLoading} />
        <EmptyWrapper>
          <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
          <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
            Resep tidak ditemukan
          </Paragraph>
        </EmptyWrapper>
      </Content>
    </Container>
  );

  render() {
    const { recipe } = this.props;
    return (
      <React.Fragment>
        {recipe ? <Main sceneTitle="Ubah Resep" recipe={recipe} /> : this.renderEmpty()}
      </React.Fragment>
    );
  }
}

MyRecipeEditScene.propTypes = {
  loadMyRecipeDetail: PropTypes.func,
  loggedIn: PropTypes.bool,
  navigation: PropTypes.object,
  route: PropTypes.object,
  recipe: PropTypes.object,
  manageLoading: PropTypes.bool,
  resetMyRecipeDetail: PropTypes.func,
};

export default compose(
  withAuth,
  withMyRecipe,
)(MyRecipeEditScene);
