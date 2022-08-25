/* eslint-disable import/no-unresolved */
/**
 * scenes/MyRecipeCreate/Form.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-native';
import { Container, View, Form } from 'native-base';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';
import { fromJS } from 'immutable';

import ListHelper from '../../helpers/List';
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

const titleErrorMsg = 'You must enter title';
const recipesErrorMsg = 'You must select one or more recipe';

const initialState = {
  formData: fromJS({
    title: '',
    recipes: [],
    publish: true,
  }),
  inputErrors: fromJS({
    title: false,
    recipes: false,
  }),
  recipesFromProps: null,
  showUnmountConfirm: false,
  showIncompleteConfirm: false,
  showDraftConfirm: false,
  changeData: false,
  firstLoad: true,
};

export class MyRecipeCreateMain extends PureComponent {
  state = initialState;

  // static getDerivedStateFromProps(props, state) {
  //   const { navigation } = props;
  //   const { formData, inputErrors } = state;
  //   const recipes = navigation.getParam('recipes');
  //   const newstate = state;
  //   if (recipes) {
  //     if (recipes !== state.recipesFromProps) {
  //       if (recipes !== formData.get('recipes')) {
  //         const newFormData = formData.set('recipes', recipes);
  //         const newInputErrors = inputErrors.set('recipes', false);
  //         newstate.formData = newFormData;
  //         newstate.inputErrors = newInputErrors;
  //       }
  //       newstate.recipesFromProps = recipes;
  //     }
  //   }
  //   return newstate;
  // }

  static getDerivedStateFromProps(props, state) {
    const { navigation, recipeBook } = props;
    const { inputErrors, firstLoad } = state;
    let { formData } = state;
    const recipes = navigation.getParam('recipes');
    const newstate = state;
    if (firstLoad && recipeBook) {
      formData = fromJS(recipeBook);
      newstate.formData = formData;
      newstate.changeData = true;
      newstate.firstLoad = false;
    } else if (!firstLoad && recipeBook !== formData) {
      formData = recipeBook;
    }

    if (recipes) {
      if (recipes !== state.recipesFromProps) {
        if (recipes !== formData.get('recipes')) {
          formData = formData.set('recipes', recipes);
          const newInputErrors = inputErrors.set('recipes', false);
          newstate.formData = formData;
          newstate.inputErrors = newInputErrors;
        }
        newstate.recipesFromProps = recipes;
      }
    }
    return newstate;
  }

  // componentDidMount() {
  //   const { recipeBook } = this.props;
  //   if (recipeBook) {
  //     this.setState({
  //       formData: recipeBook,
  //       changeData: true,
  //     });
  //   } else {
  //     this.setState(initialState);
  //   }
  // }

  componentWillUnmount() {
    // this.props.setManageLoading(false);
    //   this.props.resetData();
  }

  trySaveRecipe = async () => {
    const { navigation, recipeBook } = this.props;
    const { formData } = this.state;
    const publish = formData.get('publish');

    // Check error
    await this.checkAllInputsError();
    const errorsCount = await this.getErrorsCount();
    // If not any errors
    if (errorsCount < 1) {
      // Check publish status
      // If publish redirect to RecipeBookPublish scene
      if (publish) {
        await navigation.navigate('RecipeBookPublish', {
          formData,
          recipeBook,
        });
      } else {
        // If draft show confirm
        await this.setState({
          showDraftConfirm: true,
        });
      }
    } else if (this.state.changeData) {
      // If any errors show confirm
      await this.setState({
        showIncompleteConfirm: true,
      });
    }
  };

  doSaveRecipe = () => {
    const { formData } = this.state;
    const { recipeBook } = this.props;

    if (recipeBook) {
      this.props.updateRecipeBook(recipeBook.get('id'), formData);
    } else {
      this.props.createRecipeBook(formData);
    }
  };

  saveToDraft = async () => {
    await this.changeFormData('publish', false);
    await this.props.createRecipeBook(this.state.formData, 'save_draft');
  };

  changeFormData = (fieldName, value) => {
    const { formData } = this.state;
    const newFormData = formData.set(fieldName, value);
    this.setState({
      formData: newFormData,
      changeData: true,
    });
  };

  checkInputError = fieldName => {
    const { inputErrors } = this.state;
    const inputError = this.validatingError(fieldName);
    const newState = inputErrors.set(fieldName, inputError);
    this.setState({ inputErrors: newState });
  };

  checkAllInputsError = () => {
    const { formData } = this.state;
    let { inputErrors } = this.state;
    let titleError = false;
    let recipesError = false;
    const title = formData.get('title');
    const recipes = formData.get('recipes');
    if (title === '' || title === ' ') {
      titleError = titleErrorMsg;
    }
    if (recipes.count() < 1) {
      recipesError = recipesErrorMsg;
    }
    inputErrors = inputErrors.set('title', titleError).set('recipes', recipesError);
    this.setState({ inputErrors });
  };

  getInputError = fieldName => {
    const { inputErrors } = this.state;
    let isError = false;
    if (inputErrors.get(fieldName)) {
      isError = true;
    }
    return isError;
  };

  validatingError = fieldName => {
    const { formData } = this.state;
    let isError = false;
    if (fieldName === 'title') {
      const title = formData.get('title');
      if (title === '' || title === ' ') {
        isError = titleErrorMsg;
      }
    }
    if (fieldName === 'recipes') {
      const recipes = formData.get('recipes');
      if (recipes.count() < 1) {
        isError = recipesErrorMsg;
      }
    }
    return isError;
  };

  getErrorsCount = () => {
    const fields = ['title', 'recipes'];
    const { inputErrors } = this.state;
    let count = 0;
    for (let i = 0; i < fields.length; i += 1) {
      const errorName = fields[i];
      const isError = inputErrors.get(errorName);
      if (isError !== false && isError !== '' && isError !== null) {
        count += 1;
      }
    }
    return count;
  };

  onRemoveRecipe = id => {
    const { formData } = this.state;
    let recipes = formData.get('recipes');
    recipes = ListHelper.removeItemById(id, recipes);
    const newFormData = formData.set('recipes', recipes);
    this.setState({
      formData: newFormData,
    });
  };

  renderForm = () => {
    const { formData, inputErrors } = this.state;

    return (
      <Form>
        <FormMainWrapper>
          <FieldWrapper>
            <FieldText
              stackedLabel
              label="Judul Buku Resep"
              placeholder="Resep..."
              value={formData.get('title')}
              error={this.getInputError('title')}
              onBlur={() => this.checkInputError('title')}
              onChangeText={value => this.changeFormData('title', value)}
            />
            <View>
              <FieldErrorInfo message={inputErrors.get('title')} bottom />
            </View>
          </FieldWrapper>
          <FieldWrapper style={{ marginTop: 30, marginBottom: 30 }}>
            <FieldRecipes recipeBook={formData} onRemoveRecipe={id => this.onRemoveRecipe(id)} />
            {inputErrors.get('recipes') ? (
              <View style={{ marginTop: 10 }}>
                <FieldErrorInfo message={inputErrors.get('recipes')} bottom />
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
                  value={formData.get('publish')}
                  onValueChange={value => this.changeFormData('publish', value)}
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
              Cancel
            </ButtonText>
            <ButtonText
              onPress={() => {
                this.setState({
                  showUnmountConfirm: false,
                });
                this.saveToDraft();
              }}
            >
              Continue
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
              Cancel
            </ButtonText>
            <ButtonText
              onPress={() => {
                this.setState({
                  showIncompleteConfirm: false,
                });
                this.doSaveRecipe();
              }}
            >
              Continue
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
              Cancel
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
      rightSettings = { label: 'Done', handler: () => this.trySaveRecipe() };
    }
    const leftSettings = {
      type: 'back',
      callback: () => {
        const { recipeBook } = this.props;
        const { changeData } = this.state;
        if (!recipeBook && changeData) {
          this.setState({
            showUnmountConfirm: true,
          });
        } else {
          this.props.navigation.goBack();
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

MyRecipeCreateMain.propTypes = {
  recipeBook: PropTypes.object,
  createRecipeBook: PropTypes.func,
  updateRecipeBook: PropTypes.func,
  manageLoading: PropTypes.bool,
  sceneTitle: PropTypes.string,
  navigation: PropTypes.object,
};

export default compose(
  withNavigation,
  withRecipeBook,
)(MyRecipeCreateMain);
