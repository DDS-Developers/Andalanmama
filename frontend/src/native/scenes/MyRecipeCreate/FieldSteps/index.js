/**
 * scenes/MyRecipeCreate/FieldSteps/index.js
 *
 */
import React, { PureComponent } from 'react';
import { TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { View, ActionSheet } from 'native-base';
// eslint-disable-next-line import/no-unresolved
import * as ImagePicker from 'react-native-image-picker';
import ImageCropper from 'react-native-image-crop-picker';
import { Http } from '../../../services/http';
import ButtonText from '../../../components/ButtonText';
import ButtonOutline from '../../../components/ButtonOutline';
import Text from '../../../components/Text';
import Pane from '../../../components/Pane';
import ItemWrapper from './ItemWrapper';
import InputText from './InputText';
import IconWrapper from './IconWrapper';
import ActionWrapper from './ActionWrapper';
import NumberWrapper from './NumberWrapper';
import Wrapper from './Wrapper';

const { width } = Dimensions.get('window');

export class FieldSteps extends PureComponent {
  getEmptyData = () => {
    let step = 1;

    // eslint-disable-next-line no-plusplus
    this.props.recipeSteps.map(() => step++);
    return { description: '', image: '', attachment: '', step };
  };

  updateTitle = (title, item) => {
    const newItem = item.set('title', title);
    this.props.onUpdateStep(item.get('id'), newItem);
  };

  updateInfo = (info, item) => {
    const newItem = item.set('description', info);
    this.props.onUpdateStep(item.get('id'), newItem);
  };

  updateStep = (step, item) => {
    const newItem = item.set('step', step);
    this.props.onUpdateStep(item.get('id'), newItem);
  };

  updateImage = (imageUrl, item) => {
    const newItem = item.set('attachment', imageUrl);
    this.props.onUpdateStep(item.get('id'), newItem);
  };

  removeItem = id => {
    this.props.onRemoveStep(id);
  };

  /**
   * Upload image
   */
  uploadImage = item => {
    const BUTTONS = ['Ambil Photo', 'Pilih dari Gallery', 'Batal'];
    const CANCEL_INDEX = 2;

    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          this.launchCamera(item);
        } else if (buttonIndex === 1) {
          this.launchGallery(item);
        }
      },
    );
  };

  /**
   * launch camera
   */
  launchCamera = item => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 800,
        maxWidth: 800,
      },
      response => {
        this.openImageCropper(response, item);
      },
    );
  };

  /**
   * launch Gallery
   */
  launchGallery = item => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 800,
        maxWidth: 800,
      },
      response => {
        this.openImageCropper(response, item);
      },
    );
  };

  /**
   * launch Gallery
   */
  openImageCropper = (response, item) => {
    ImageCropper.openCropper({
      path: response.uri,
      width: 400,
      height: 400,
    }).then(async image => {
      const parts = image.path.split('/');
      const form = new FormData();
      const dataimg = {
        uri: image.path,
        name: parts[parts.length - 1],
        type: image.mime,
      };
      form.append('attachment', dataimg);

      const res = await Http.post('upload', form, { 'Content-Type': 'multipart/form-data' });

      this.updateImage(res.data.url, item);
    });
  };

  renderList = () => {
    const { recipeSteps } = this.props;

    if (recipeSteps) {
      return (
        <Pane column style={{ marginTop: 15, width: '100%' }}>
          {recipeSteps.map((item, key) => (
            <ItemWrapper key={`key-${item.get('id')}`}>
              <Pane start>
                <NumberWrapper>{key + 1}/8</NumberWrapper>
                <View>
                  <TextInput value={item.get('title') || ''}
                    style={{
                        marginLeft: 15,
                        paddingLeft: 0,
                        minHeight: 40,
                        borderBottomColor: '#cccccc',
                        borderBottomWidth: 1,
                        paddingBottom: 10,
                        width: width - 104,
                        paddingTop: 0}}
                    placeholder="Nama Langkah..."
                    editable={true}
                    onChangeText={(v) => this.updateTitle(v, item)}
                    onBlur={() => this.props.onCheckError()}
                  />
                  <TextInput value={item.get('description') || ''}
                    style={{
                        marginLeft: 15,
                        paddingLeft: 0,
                        marginBottom: 15,
                        width: width - 104,
                        paddingBottom: 10}}
                    placeholder="Langkah-langkah..."
                    editable={true}
                    multiline
                    onChangeText={(v) => this.updateInfo(v, item)}
                    onBlur={() => this.props.onCheckError()}
                  />
                </View>
              </Pane>
              {item.get('attachment') ? (
                <Pane style={{ marginTop: 10 }}>
                  <Image
                    source={{ uri: item.get('attachment') }}
                    style={{ width: '100%', height: 300 }}
                    resizeMode="cover"
                  />
                </Pane>
              ) : null}
              <ActionWrapper>
                <TouchableOpacity onPress={() => this.uploadImage(item)}>
                  <Pane center>
                    <IconWrapper type="MaterialIcons" name="photo-camera" />
                    <Text color="#999999" style={{ marginLeft: 5 }}>
                      Unggah
                    </Text>
                  </Pane>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.removeItem(item.get('id'))}>
                  <IconWrapper type="MaterialIcons" name="delete" />
                </TouchableOpacity>
              </ActionWrapper>
            </ItemWrapper>
          ))}
        </Pane>
      );
    }
    return null;
  };

  render() {
    const { onAddStep, onShowSorting, recipeSteps } = this.props;
    const count = recipeSteps.count();

    return (
      <Wrapper>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#777777', flex: 1 }}>Langkah</Text>
          <ButtonText
            style={{ marginLeft: 'auto' }}
            textStyles={{ fontSize: 12 }}
            onPress={() => onShowSorting()}
          >
            Urutkan
          </ButtonText>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 12, color: '#999999' }}>
            Buat maksimal 8 langkah agar resepmu lebih mudah dibuat
          </Text>
        </View>
        {this.renderList()}
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <ButtonOutline
            icon="add"
            disabled={count >= 8}
            style={{ marginRight: 20, opacity: count >= 8 ? 0 : 1 }}
            onPress={() => onAddStep(this.getEmptyData())}
          >
            Tambah
          </ButtonOutline>
        </View>
      </Wrapper>
    );
  }
}

FieldSteps.propTypes = {
  recipeSteps: PropTypes.object.isRequired,
  onAddStep: PropTypes.func.isRequired,
  onUpdateStep: PropTypes.func.isRequired,
  onRemoveStep: PropTypes.func.isRequired,
  onCheckError: PropTypes.func.isRequired,
  onShowSorting: PropTypes.func.isRequired,
};

export default FieldSteps;
