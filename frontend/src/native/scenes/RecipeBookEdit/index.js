/**
 * scenes/RecipeBookEdit/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Image } from 'react-native';
import { Container } from 'native-base';
import { withAuth } from '../../providers/Auth';
import { withRecipeBook } from '../../providers/RecipeBook';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Paragraph from '../../components/Paragraph';
import Main from '../RecipeBookCreate/Main';
import EmptyWrapper from '../RecipeBook/EmptyWrapper';
import IconCooking from '../../images/icon-cooking.png';

export class RecipeBookEdit extends PureComponent {
  static navigationOptions = {
    title: 'Edit My Recipe Book',
    header: null,
  };

  componentDidMount() {
    const { loggedIn, navigation, route, loadRecipeBookDetail, setRecipeBook } = this.props;
    const { id, recipeBook } = route.params;

    if (!loggedIn) {
      navigation.navigate('Login');
    }

    if (id) {
      loadRecipeBookDetail(id);
    } else if (recipeBook) {
      setRecipeBook(recipeBook);
    }
  }

  renderEmpty = () => (
    <Container>
      <Header title="Edit Resep Saya" leftSettings={{ type: 'back' }} />
      <Content nospace clean>
        <Loader visible={this.props.manageLoading} />
        <EmptyWrapper>
          <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
          <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
            My recipe book not found
          </Paragraph>
        </EmptyWrapper>
      </Content>
    </Container>
  );

  render() {
    const { recipeBook } = this.props;
    return (
      <React.Fragment>
        {recipeBook ? <Main sceneTitle="Edit Buku Resep Saya" /> : this.renderEmpty()}
      </React.Fragment>
    );
  }
}

RecipeBookEdit.propTypes = {
  loadRecipeBookDetail: PropTypes.func,
  setRecipeBook: PropTypes.func,
  loggedIn: PropTypes.bool,
  navigation: PropTypes.object,
  route: PropTypes.object,
  recipeBook: PropTypes.object,
  manageLoading: PropTypes.bool,
};

export default compose(
  withAuth,
  withRecipeBook,
)(RecipeBookEdit);
