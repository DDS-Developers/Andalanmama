/**
 * scenes/MyRecipePublish/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, CardItem, Body, View } from 'native-base';
import { withMyRecipe } from '../../providers/MyRecipe';
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
    title: 'Pengajuan Publikasi Resep',
    header: null,
  };

  state = {
    formData: {},
    recipe: {},
  };

  componentDidMount() {
    const { navigation, route } = this.props;
    const { formData, recipe } = route.params;

    if (!formData) {
      navigation.navigate('MyRecipe');
    }
    this.setState({
      recipe,
      formData,
    });
  }

  doSaveRecipe = () => {
    const { formData, recipe } = this.state;

    if (recipe) {
      this.props.updateMyRecipe(recipe.get('id'), formData, 'publish');
    } else {
      this.props.createMyRecipe(formData, 'publish');
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
                Ini adalah pengajuan untuk menerbitkan resep Anda, pastikan sudah sesuai dengan
                syarat dan ketentuan berikut
              </Paragraph>
            </TopWrapper>
            <Card style={{ marginBottom: 25 }}>
              <CardItem header bordered>
                <Text>Ketentuan</Text>
              </CardItem>
              <CardItem bordered>
                <IconWrapper type="MaterialIcons" name="developer-board" />
                <ListTextWrapper>Pastikan Informasi Resep Sudah Diisi Dengan Benar</ListTextWrapper>
              </CardItem>
              <CardItem bordered>
                <IconWrapper type="MaterialIcons" name="image" />
                <ListTextWrapper>
                  Sertakan Foto/ Video untuk resep yang lebih menarik!
                </ListTextWrapper>
              </CardItem>
              <CardItem bordered>
                <IconWrapper type="MaterialIcons" name="copyright" />
                <ListTextWrapper>
                  Pastikan Resep Andalan yang akan diterbitkan orisinal, hasil olahan kamu sendiri
                </ListTextWrapper>
              </CardItem>
            </Card>
            <Card>
              <CardItem header bordered>
                <Text>Syarat</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                    Resep yang kamu ajukan akan dinilai oleh koki profesional kami dan akan di
                    informasikan kembali hasilnya ke kotak pesan kamu.
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
  createMyRecipe: PropTypes.func,
  updateMyRecipe: PropTypes.func,
  navigation: PropTypes.object,
  route: PropTypes.object,
  manageLoading: PropTypes.bool,
};

export default withMyRecipe(MyRecipePublishScene);
