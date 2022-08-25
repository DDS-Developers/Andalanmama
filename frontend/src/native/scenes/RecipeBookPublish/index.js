/**
 * scenes/RecipeBookPublish/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, CardItem, Body, View } from 'native-base';
import { withRecipeBook } from '../../providers/RecipeBook';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import ButtonPrimary from '../../components/ButtonPrimary';
import Text from '../../components/Text';
import Paragraph from '../../components/Paragraph';
import TopWrapper from './TopWrapper';
import BottomWrapper from './BottomWrapper';
import IconWrapper from './IconWrapper';
import ListTextWrapper from './ListTextWrapper';

export class MyRecipePublishScene extends PureComponent {
  static navigationOptions = {
    title: 'Permohonan publikasi',
    header: null,
  };

  doSaveRecipe = () => {
    const { recipeBook } = this.props;

    if (recipeBook) {
      this.props.updateRecipeBook(recipeBook.get('id'));
    } else {
      this.props.createRecipeBook('publish');
    }
  };

  render() {
    const { manageLoading } = this.props;
    let leftSettings = {};
    if (!manageLoading) {
      leftSettings = { type: 'back' };
    }

    return (
      <Container>
        <Header title="Permohonan publikasi" leftSettings={leftSettings} />
        <View style={{ flex: 1 }}>
          <Loader visible={manageLoading} />
          <Content>
            <TopWrapper>
              <Paragraph center>
                Ini adalah pengajuan untuk menerbitkan buku resep Anda, pastikan sudah sesuai dengan
                syarat dan ketentuan berikut
              </Paragraph>
            </TopWrapper>
            <Card style={{ marginBottom: 25 }}>
              <CardItem header bordered>
                <Text>Ketentuan</Text>
              </CardItem>
              <CardItem bordered>
                <IconWrapper type="MaterialIcons" name="developer-board" />
                <ListTextWrapper>Complete Form Recipe (Make Sure it doesn’t empty)</ListTextWrapper>
              </CardItem>
              <CardItem bordered>
                <IconWrapper type="MaterialIcons" name="image" />
                <ListTextWrapper>Complete Photo/Video (Make Sure it doesn’t empty)</ListTextWrapper>
              </CardItem>
              <CardItem bordered>
                <IconWrapper type="MaterialIcons" name="copyright" />
                <ListTextWrapper>Recipe Must be Original</ListTextWrapper>
              </CardItem>
            </Card>
            <Card>
              <CardItem header bordered>
                <Text>Syarat</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                    As you following and complete the requirements above, your recipe will be
                    assessed with our professional chef within 3 days and you will get notify the
                    result, however you still can choose not to publish your recipe in keep it for
                    you
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <BottomWrapper>
              <ButtonPrimary onPress={() => this.doSaveRecipe()}>Setuju</ButtonPrimary>
            </BottomWrapper>
          </Content>
        </View>
      </Container>
    );
  }
}

MyRecipePublishScene.propTypes = {
  createRecipeBook: PropTypes.func,
  updateRecipeBook: PropTypes.func,
  manageLoading: PropTypes.bool,
  recipeBook: PropTypes.object,
};

export default withRecipeBook(MyRecipePublishScene);
