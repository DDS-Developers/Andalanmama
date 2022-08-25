/**
 * scenes/MyRecipeCreate/Main.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-native';
import { Container, View, Form, Button, Footer } from 'native-base';
import { fromJS } from 'immutable';
import { useNavigation } from '@react-navigation/native';

import { withMyRecipe } from '../../providers/MyRecipe';
import validate from '../../helpers/FormValidate';
import ListHelper from '../../helpers/List';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Dialog from '../../components/Dialog';
import DialogPlain from '../../components/Dialog/Plain';
import Pane from '../../components/Pane';
import ButtonText from '../../components/Dialog/Button';
import Text from '../../components/Text';
import FieldText from '../../components/FieldText';
import FieldTextarea from '../../components/FieldTextarea';
import FieldPhoto from '../../components/FieldPhoto';
import FieldErrorInfo from '../../components/FieldErrorInfo';

import { validationConfig } from './validation';
import FieldTags from './FieldTags';
import FieldIngredients from './FieldIngredients';
import SortingIngredients from './FieldIngredients/Sorting';
import SortingSteps from './FieldSteps/Sorting';
import FieldSteps from './FieldSteps';
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

  doSaveRecipe = async () => {
    const { formData } = this.state;
    const { recipe } = this.props;

    const newFormData = await formData.set('status', 0);
    if (recipe) {
      await this.props.updateMyRecipe(recipe.get('id'), newFormData);
    } else {
      await this.props.createMyRecipe(newFormData);
    }
  };

  saveToDraft = async () => {
    const { formData } = this.state;
    const { recipe } = this.props;

    if (recipe) {
      const status = recipe.get('status');
      if (status === 2) {
        await this.props.updateMyRecipe(recipe.get('id'), formData);
      }
    } else {
      const newFormData = await formData.set('status', 2);
      await this.props.createMyRecipe(newFormData);
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
          <FieldWrapper>
            <FieldText
              stackedLabel
              label="Judul Resep"
              placeholder="Resep..."
              value={formData.get('name')}
              error={this.getInputError('name')}
              onBlur={() => this.checkInputError('name')}
              onChangeText={value => this.changeFormData('name', value)}
            />
            <View>
              <FieldErrorInfo message={inputErrors.get('name')} bottom />
            </View>
          </FieldWrapper>
          <FieldWrapper>
            <FieldTextarea
              stackedLabel
              label="Deskripsi"
              placeholder="Cerita Resep..."
              value={formData.get('description')}
              error={this.getInputError('description')}
              onBlur={() => this.checkInputError('description')}
              onChangeText={value => this.changeFormData('description', value)}
            />
            <View>
              <FieldErrorInfo message={inputErrors.get('description')} bottom />
            </View>
          </FieldWrapper>
          <FieldWrapper>
            <FieldText
              stackedLabel
              label="Porsi"
              placeholder="Untuk Porsi..."
              value={String(formData.get('portion'))}
              error={this.getInputError('portion')}
              onBlur={() => this.checkInputError('portion')}
              onChangeText={value => this.changeFormData('portion', value)}
              keyboardType="number-pad"
            />
            <View>
              <FieldErrorInfo message={inputErrors.get('portion')} bottom />
            </View>
          </FieldWrapper>
          <FieldWrapper>
            <FieldText
              stackedLabel
              label="Durasi memasak (input dalam menit)"
              placeholder="Lama Memasak Sekitar..."
              value={String(formData.get('time'))}
              error={this.getInputError('time')}
              onBlur={() => this.checkInputError('time')}
              onChangeText={value => this.changeFormData('time', value)}
              keyboardType="number-pad"
            />
            <View>
              <FieldErrorInfo message={inputErrors.get('time')} bottom />
            </View>
          </FieldWrapper>
          <FieldWrapper style={{ marginBottom: 25 }}>
            <FieldIngredients
              recipeIngredients={formData.get('ingredients')}
              onSetIngredients={ingredients => this.setList('ingredients', ingredients)}
              onAddIngredient={ingredient => this.addList('ingredients', ingredient)}
              onUpdateIngredient={(id, data) => this.updateList('ingredients', id, data)}
              onRemoveIngredient={id => this.removeList('ingredients', id)}
              onCheckError={() => this.checkInputError('ingredients')}
              onShowSorting={() => this.setState({ showSortingIngredient: true })}
            />
            <FieldErrorInfo
              message={inputErrors.get('ingredients')}
              bottom
              style={{ marginTop: 15 }}
            />
          </FieldWrapper>
          <FieldWrapper style={{ marginBottom: 25 }}>
            <FieldSteps
              recipeSteps={formData.get('steps')}
              onAddStep={tag => this.addList('steps', tag)}
              onUpdateStep={(id, data) => this.updateList('steps', id, data)}
              onRemoveStep={id => this.removeList('steps', id)}
              onCheckError={() => this.checkInputError('steps')}
              onShowSorting={() => this.setState({ showSortingStep: true })}
            />
            <FieldErrorInfo message={inputErrors.get('steps')} bottom style={{ marginTop: 15 }} />
          </FieldWrapper>
          <FieldWrapper style={{ marginBottom: 25 }}>
            <FieldTags
              recipeTags={formData.get('tags')}
              onAddTag={tag => this.addList('tags', tag, false)}
              onRemoveTag={id => this.removeList('tags', id)}
              onCheckError={() => this.checkInputError('tags')}
            />
            <FieldErrorInfo message={inputErrors.get('tags')} bottom style={{ marginTop: 15 }} />
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
                  value={formData.get('status')}
                  onValueChange={value => this.changeFormData('status', value)}
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

  renderSortingIngredients = () => {
    const { formData, showSortingIngredient } = this.state;

    return (
      <DialogPlain visible={showSortingIngredient}>
        <View style={{ marginBottom: 10, paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
          <Text
            style={{
              color: '#e83249',
              fontSize: 15,
              lineHeight: 17,
              fontWeight: 'bold',
              textAlign: 'left',
              marginBottom: 24,
            }}
          >
            Urutkan Bahan-bahan
          </Text>
          <Text>
            Untuk melakukan penyusunan ulang pada list dibawah ini tekan dan tahan pada item yang
            akan disusun ulang dan kemudian geser ke urutan yang di inginkan
          </Text>
        </View>
        <View style={{ flex: 1, paddingTop: 20, paddingBottom: 20 }}>
          <SortingIngredients
            recipeIngredients={formData.get('ingredients')}
            onSetIngredients={ingredients => this.setList('ingredients', ingredients)}
          />
        </View>
        <Footer>
          <Button
            block
            style={{
              backgroundColor: '#e83249',
              flex: 1,
              height: '100%',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}
            onPress={() => this.setState({ showSortingIngredient: false })}
          >
            <Text style={{ color: '#ffffff' }}>SELESAI</Text>
          </Button>
        </Footer>
      </DialogPlain>
    );
  };

  renderSortingSteps = () => {
    const { formData, showSortingStep } = this.state;

    return (
      <DialogPlain visible={showSortingStep}>
        <View style={{ marginBottom: 10, paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
          <Text
            style={{
              color: '#e83249',
              fontSize: 15,
              lineHeight: 17,
              fontWeight: 'bold',
              textAlign: 'left',
              marginBottom: 24,
            }}
          >
            Urutkan Langkah
          </Text>
          <Text>
            Untuk melakukan penyusunan ulang pada list dibawah ini tekan dan tahan pada item yang
            akan disusun ulang dan kemudian geser ke urutan yang di inginkan
          </Text>
        </View>
        <View style={{ flex: 1, paddingTop: 20, paddingBottom: 20 }}>
          <SortingSteps
            recipeSteps={formData.get('steps')}
            onSetSteps={steps => this.setList('steps', steps)}
          />
        </View>
        <Footer>
          <Button
            block
            style={{
              backgroundColor: '#e83249',
              flex: 1,
              height: '100%',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}
            onPress={() => this.setState({ showSortingStep: false })}
          >
            <Text style={{ color: '#ffffff' }}>SELESAI</Text>
          </Button>
        </Footer>
      </DialogPlain>
    );
  };

  render() {
    const { manageLoading, sceneTitle } = this.props;
    const rightSettings = { label: 'Selesai', handler: () => this.trySaveRecipe() };
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
        <View style={{ flex: 1 }}>
          <Loader visible={manageLoading} />
          <Content
            nospace
            clean
            // scrollProps={{
            //   onScrollEndDrag: ({ nativeEvent }) => {
            //     this.setState({ scrollOffset: nativeEvent.contentOffset.y });
            //   },
            //   onMomentumScrollEnd: ({ nativeEvent }) => {
            //     this.setState({ scrollOffset: nativeEvent.contentOffset.y });
            //   },
            //   scrollEnabled: this.state.scrollEnabled,
            // }}
          >
            {this.renderForm()}
          </Content>
        </View>
        {this.renderUnmountConfirm()}
        {this.renderIncompleteConfirm()}
        {this.renderDraftConfirm()}
        {this.renderSortingIngredients()}
        {this.renderSortingSteps()}
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

const NavigationWrapper = props => {
  const navigation = useNavigation();

  return <MyRecipeCreateMain {...props} navigation={navigation} />;
};

export default withMyRecipe(NavigationWrapper);
