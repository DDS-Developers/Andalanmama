/**
 * scenes/RecipeBookCreate/Main.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-native';
import { Container, View, Form } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { withRecipeBook } from '../../providers/RecipeBook';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Pane from '../../components/Pane';
import Text from '../../components/Text';
import FieldText from '../../components/FieldText';
import FieldErrorInfo from '../../components/FieldErrorInfo';
import Dialog from '../../components/Dialog';
import ButtonText from '../../components/Dialog/Button';
import FieldWrapper from './FieldWrapper';
import FormMainWrapper from './FormMainWrapper';
import FieldRecipes from './FieldRecipes';

const initialState = {
  showUnmountConfirm: false,
  showIncompleteConfirm: false,
  showDraftConfirm: false,
  firstLoad: true,
};

export class RecipeBookCreateMain extends PureComponent {
  state = initialState;

  trySaveRecipe = async () => {
    const { navigation, bookStatus } = this.props;

    // Check error
    await this.props.checkAllInputErrors();
    const { bookErrorCount } = await this.props;
    // If not any errors
    if (bookErrorCount < 1) {
      // Check publish status
      // If publish redirect to RecipeBookPublish scene
      if (bookStatus) {
        await navigation.navigate('RecipeBookPublish', {bookStatus: bookStatus});
      } else {
        // If draft show confirm
        await this.setState({
          showDraftConfirm: true,
        });
      }
    }
    // else if (this.props.bookDataChanged) {
    //   // If any errors show confirm
    //   await this.setState({
    //     showIncompleteConfirm: true,
    //   });
    // }
  };

  doSaveRecipe = () => {
    const { recipeBook } = this.props;

    if (recipeBook) {
      this.props.updateRecipeBook(recipeBook.get('id'));
    } else {
      this.props.createRecipeBook();
    }
  };

  saveToDraft = async () => {
    await this.props.changeBookStatus(0);
    await this.props.createRecipeBook('save_draft');
  };

  getInputError = value => {
    let isError = false;
    if (value) {
      isError = true;
    }
    return isError;
  };

  renderForm = () => {
    const { bookTitle, bookStatus, bookTitleError, bookRecipeError } = this.props;

    return (
      <Form>
        <FormMainWrapper>
          <FieldWrapper>
            <FieldText
              stackedLabel
              label="Judul Buku Resep"
              placeholder="Resep..."
              value={bookTitle}
              error={this.getInputError(bookTitleError)}
              onBlur={() => this.props.checkInputError('title')}
              onChangeText={value => this.props.changeBookTitle(value)}
            />
            <View>
              <FieldErrorInfo message={bookTitleError} bottom />
            </View>
          </FieldWrapper>
          <FieldWrapper style={{ marginTop: 30, marginBottom: 30 }}>
            <FieldRecipes />
            {bookRecipeError ? (
              <View style={{ marginTop: 10 }}>
                <FieldErrorInfo message={bookRecipeError} bottom />
              </View>
            ) : null}
          </FieldWrapper>
          <FieldWrapper>
            <Pane column start>
              <View>
                <Text style={{ fontWeight: 'bold' }}>Publikasikan</Text>
              </View>
              <Pane center>
                <Pane style={{ paddingRight: 20 }}>
                  <Text style={{ textAlign: 'left', color: '#777777' }}>
                    Dengan mengunggah resep ini, pengguna lain dapat melihat resep buatanmu
                  </Text>
                </Pane>
                <Switch
                  trackColor={{ false: '#bbbbbb', true: '#e83249' }}
                  thumbColor="#ffffff"
                  value={bookStatus}
                  onValueChange={value => this.props.changeBookStatus(value)}
                />
              </Pane>
            </Pane>
          </FieldWrapper>
        </FormMainWrapper>
      </Form>
    );
  };

  renderUnmountConfirm = () => {
    const { showUnmountConfirm } = this.state;

    return (
      <Dialog
        visible={showUnmountConfirm}
        title="Are You Sure?"
        message="Jika keluar sekarang resep akan otomatis tersimpan sebagai draft"
        actions={
          <React.Fragment>
            <ButtonText
              onPress={() => {
                this.setState({
                  showUnmountConfirm: false,
                });
              }}
            >
              Batal
            </ButtonText>
            <ButtonText
              onPress={() => {
                this.setState({
                  showUnmountConfirm: false,
                });
                this.saveToDraft();
              }}
            >
              Lanjutkan
            </ButtonText>
          </React.Fragment>
        }
      />
    );
  };

  renderIncompleteConfirm = () => {
    const { showIncompleteConfirm } = this.state;

    return (
      <Dialog
        visible={showIncompleteConfirm}
        title="Are You Sure?"
        message="Sepertinya kamu belum mengisi semua langkah, yakin ingin menyelesaikan?"
        actions={
          <React.Fragment>
            <ButtonText
              onPress={() => {
                this.setState({
                  showIncompleteConfirm: false,
                });
              }}
            >
              Batal
            </ButtonText>
            <ButtonText
              onPress={() => {
                this.setState({
                  showIncompleteConfirm: false,
                });
                this.doSaveRecipe();
              }}
            >
              Lanjutkan
            </ButtonText>
          </React.Fragment>
        }
      />
    );
  };

  renderDraftConfirm = () => {
    const { showDraftConfirm } = this.state;

    return (
      <Dialog
        visible={showDraftConfirm}
        title="Apakah kamu setuju?"
        message="Resep ini akan disimpan sebagai resep pribadi, Kamu dapat merubah status resep kapanpun"
        actions={
          <React.Fragment>
            <ButtonText
              onPress={() => {
                this.setState({
                  showDraftConfirm: false,
                });
              }}
            >
              Batal
            </ButtonText>
            <ButtonText
              onPress={() => {
                this.setState({
                  showDraftConfirm: false,
                });
                this.doSaveRecipe();
              }}
            >
              Ok
            </ButtonText>
          </React.Fragment>
        }
      />
    );
  };

  render() {
    const { manageLoading, sceneTitle } = this.props;
    let rightSettings = {};
    if (!manageLoading) {
      rightSettings = { label: 'Selesai', handler: () => this.trySaveRecipe() };
    }
    const leftSettings = {
      type: 'back',
      callback: async () => {
        await this.props.checkAllInputErrors();
        const { recipeBook, bookErrorCount, bookDataChanged } = this.props;
        if (!recipeBook && bookDataChanged && bookErrorCount < 1) {
          await this.setState({
            showUnmountConfirm: true,
          });
        } else {
          await this.props.navigation.goBack();
        }
      },
    };

    return (
      <Container>
        <Header title={sceneTitle} leftSettings={leftSettings} rightSettings={rightSettings} />
        <View style={{ flex: 1 }}>
          <Loader visible={manageLoading} />
          <Content nospace>{this.renderForm()}</Content>
        </View>
        {this.renderUnmountConfirm()}
        {this.renderIncompleteConfirm()}
        {this.renderDraftConfirm()}
      </Container>
    );
  }
}

RecipeBookCreateMain.propTypes = {
  recipeBook: PropTypes.object,
  createRecipeBook: PropTypes.func,
  updateRecipeBook: PropTypes.func,
  changeBookTitle: PropTypes.func,
  changeBookStatus: PropTypes.func,
  manageLoading: PropTypes.bool,
  sceneTitle: PropTypes.string,
  navigation: PropTypes.object,
  bookTitle: PropTypes.string,
  bookStatus: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  bookDataChanged: PropTypes.bool,
  bookTitleError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  bookRecipeError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  bookErrorCount: PropTypes.number,
  checkInputError: PropTypes.func,
  checkAllInputErrors: PropTypes.func,
};

const NavigationWrapper = props => {
  const navigation = useNavigation();

  return <RecipeBookCreateMain {...props} navigation={navigation} />;
};

export default withRecipeBook(NavigationWrapper);
