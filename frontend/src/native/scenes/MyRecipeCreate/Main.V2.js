/* eslint-disable import/no-unresolved */
/**
 * scenes/MyRecipeCreate/Main.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Container, View, Form } from 'native-base';
import { fromJS } from 'immutable';
import { withNavigation } from 'react-navigation';
import { withMyRecipe } from '../../providers/MyRecipe';
import validate from '../../helpers/FormValidate';
import ListHelper from '../../helpers/List';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Dialog from '../../components/Dialog';
import ButtonText from '../../components/Dialog/Button';
import FieldPhoto from '../../components/FieldPhoto';
import FieldErrorInfo from '../../components/FieldErrorInfo';
import { validationConfig } from './validation';
import FieldIngredients from './FieldIngredients';
import FieldWrapper from './FieldWrapper';
import FormMainWrapper from './FormMainWrapper';
import initialState from './State';

const fields = [
  'attachment',
  'name',
  'description',
  'portion',
  'time',
  'tags',
  'steps',
  'ingredients',
  'status',
];

export class MyRecipeCreateMain extends PureComponent {
  state = initialState;

  componentDidMount() {
    const { recipe } = this.props;
    if (recipe) {
      this.setState({
        formData: recipe,
        changeData: true,
      });
    } else {
      this.setState(initialState);
    }
  }

  componentWillUnmount() {
    this.props.setManageLoading(false);
  }

  trySaveRecipe = async () => {
    const { formData } = this.state;
    const { navigation, recipe } = this.props;
    const publish = formData.get('status');

    // Check error
    await this.checkAllInputsError();
    const errorsCount = await this.getErrorsCount();
    // If not any errors
    if (errorsCount < 1) {
      // Check publish status
      // If publish redirect to MyRecipePublish scene
      if (publish) {
        await navigation.navigate('MyRecipePublish', {
          formData,
          recipe,
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
    const { recipe } = this.props;

    if (recipe) {
      this.props.updateMyRecipe(recipe.get('id'), formData);
    } else {
      this.props.createMyRecipe(formData);
    }
  };

  saveToDraft = async () => {
    const { formData } = this.state;
    const { recipe } = this.props;

    await this.changeFormData('status', false);
    if (recipe) {
      await this.props.updateMyRecipe(recipe.get('id'), formData);
    } else {
      await this.props.createMyRecipe(formData);
    }
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
    let { inputErrors } = this.state;
    for (let i = 0; i < fields.length; i += 1) {
      const name = fields[i];
      const isError = this.validatingError(name);
      inputErrors = inputErrors.set(name, isError);
    }
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
    const value = formData.get(fieldName);
    let error = '';
    if (fieldName === 'tags') {
      if (!value || value.count() < 1) {
        error = validationConfig[fieldName].presence.message;
      }
    } else if (fieldName === 'ingredients' || fieldName === 'steps') {
      let itemsCount = 0;
      value.forEach(item => {
        if (item.get('info') !== '') {
          itemsCount += 1;
        }
      });
      if (itemsCount === 0) {
        error = validationConfig[fieldName].presence.message;
      }
    } else {
      error = validate(fieldName, value, validationConfig);
    }
    let isError = false;
    if (error !== '' && error !== null && error !== undefined) {
      isError = error;
    }
    return isError;
  };

  getErrorsCount = () => {
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

  setList = (name, items) => {
    const { formData } = this.state;
    this.setState({
      formData: formData.set(name, fromJS(items)),
    });
  };

  addList = (name, item, createId = true) => {
    const { formData } = this.state;
    let dataItem = item;
    if (typeof item.get === 'undefined') {
      dataItem = fromJS(item);
    }
    let items = formData.get(name);
    if (createId) {
      const newId = ListHelper.getLastIndexList(items);
      dataItem = dataItem.set('isNew', true).set('id', newId);
    } else {
      dataItem = dataItem.set('isNew', true);
    }
    items = items.push(dataItem);
    this.setState({
      formData: formData.set(name, items),
    });
  };

  updateList = (name, id, data) => {
    const { formData } = this.state;
    let items = formData.get(name);
    const itemIsExists = ListHelper.getItemById(id, items);
    if (typeof itemIsExists !== 'undefined') {
      items = ListHelper.updateItem(items, data);
    } else {
      items = items.push(data);
    }
    this.setState({
      formData: formData.set(name, items),
    });
  };

  removeList = (name, id) => {
    const { formData } = this.state;
    let items = formData.get(name);
    items = ListHelper.removeItemById(id, items);
    this.setState({
      formData: formData.set(name, items),
    });
  };

  renderForm = () => {
    const { formData, inputErrors } = this.state;

    return (
      <Form>
        <FieldPhoto
          value={formData.get('attachment')}
          onChange={(image, callback) => {
            this.changeFormData('attachment', image);
            callback();
          }}
          onDelete={() => {
            this.changeFormData('attachment', '');
          }}
          containerStyle={{ marginTop: 0, marginBottom: 0, height: 350 }}
          emptyStyle={{ width: '100%', height: 350, borderRadius: 0 }}
          photoContainerStyle={{ width: '100%', height: 350, borderRadius: 0 }}
          photoStyle={{ width: '100%', height: 350, borderRadius: 0 }}
        />
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <FieldErrorInfo message={inputErrors.get('attachment')} bottom />
        </View>
        <FormMainWrapper>
          <FieldWrapper style={{ marginBottom: 25 }}>
            <FieldIngredients
              recipeIngredients={formData.get('ingredients')}
              onSetIngredients={ingredients => this.setList('ingredients', ingredients)}
              onAddIngredient={ingredient => this.addList('ingredients', ingredient)}
              onUpdateIngredient={(id, data) => this.updateList('ingredients', id, data)}
              onRemoveIngredient={id => this.removeList('ingredients', id)}
              onCheckError={() => this.checkInputError('ingredients')}
            />
            <FieldErrorInfo
              message={inputErrors.get('ingredients')}
              bottom
              style={{ marginTop: 15 }}
            />
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
    const rightSettings = { label: 'Done', handler: () => this.trySaveRecipe() };
    const leftSettings = {
      type: 'back',
      callback: () => {
        const { recipe } = this.props;
        const { changeData } = this.state;
        if (!recipe && changeData) {
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
        <Header
          title={sceneTitle}
          leftSettings={leftSettings}
          rightSettings={rightSettings}
          loading={manageLoading}
        />
        <Content>
          <Loader visible={manageLoading} />
          <View style={{ flex: 1, backgroundColor: '#dddddd' }}>{this.renderForm()}</View>
        </Content>
        {this.renderUnmountConfirm()}
        {this.renderIncompleteConfirm()}
        {this.renderDraftConfirm()}
      </Container>
    );
  }
}

MyRecipeCreateMain.propTypes = {
  sceneTitle: PropTypes.string,
  createMyRecipe: PropTypes.func,
  updateMyRecipe: PropTypes.func,
  setManageLoading: PropTypes.func,
  recipe: PropTypes.object,
  manageLoading: PropTypes.bool,
  navigation: PropTypes.object,
};

export default compose(
  withNavigation,
  withMyRecipe,
)(MyRecipeCreateMain);
