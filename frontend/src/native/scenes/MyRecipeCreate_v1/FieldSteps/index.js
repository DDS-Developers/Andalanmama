/**
 * scenes/MyRecipeCreate/FieldSteps/index.js
 *
 */
import React, { PureComponent } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import ImageCropper from 'react-native-image-crop-picker';
import { withMyRecipe } from '../../../providers/MyRecipe';
import ButtonOutline from '../../../components/ButtonOutline';
import Text from '../../../components/Text';
import Pane from '../../../components/Pane';
import FieldErrorInfo from '../../../components/FieldErrorInfo';
import ItemWrapper from './ItemWrapper';
import InputWrapper from './InputWrapper';
import IconWrapper from './IconWrapper';
import ActionWrapper from './ActionWrapper';
import NumberWrapper from './NumberWrapper';
import Wrapper from './Wrapper';

export class FieldSteps extends PureComponent {
  componentDidMount() {
    const { addRecipeStep } = this.props;
    const data = this.getEmptyData();
    addRecipeStep(data);
    addRecipeStep(data);
  }

  getEmptyData = () => ({ info: '', image: '' });

  updateInfo = (info, item) => {
    const newItem = item.set('info', info);
    this.props.updateRecipeStep(item.get('id'), newItem);
    this.props.checkInputError('steps');
  };

  updateImage = (imagePath, item) => {
    const newItem = item.set('image', imagePath);
    this.props.updateRecipeStep(item.get('id'), newItem);
    this.props.checkInputError('steps');
  };

  removeItem = id => {
    this.props.removeRecipeStep(id);
    this.props.checkInputError('steps');
  };

  uploadImage = item => {
    const options = {
      title: 'Pilih Foto',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
      } else {
        ImageCropper.openCropper({
          path: response.uri,
          width: 400,
          height: 400,
        }).then(async image => {
          this.updateImage(image.path, item);
        });
      }
    });
  };

  renderList = () => {
    const { recipeSteps } = this.props;

    return (
      <Pane column style={{ marginTop: 15, width: '100%' }}>
        {recipeSteps.map((item, key) => (
          <ItemWrapper key={`key-${item.get('id')}`}>
            <Pane start>
              <NumberWrapper>{key + 1}</NumberWrapper>
              <InputWrapper
                placeholder="Text..."
                value={item.get('info')}
                onChangeText={value => this.updateInfo(value, item)}
              />
            </Pane>
            {item.get('image') ? (
              <Pane style={{ marginTop: 10 }}>
                <Image
                  source={{ uri: item.get('image') }}
                  style={{ width: '100%', height: 200 }}
                  resizeMode="cover"
                />
              </Pane>
            ) : null}
            <ActionWrapper>
              <TouchableOpacity onPress={() => this.uploadImage(item)}>
                <Pane center>
                  <IconWrapper type="MaterialIcons" name="photo-camera" />
                  <Text color="#999999" style={{ marginLeft: 5 }}>
                    Upload
                  </Text>
                </Pane>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.removeItem(item.get('id'))}>
                <IconWrapper type="FontAwesome" name="trash-o" />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconWrapper type="FontAwesome" name="sort" />
              </TouchableOpacity>
            </ActionWrapper>
          </ItemWrapper>
        ))}
      </Pane>
    );
  };

  render() {
    const { addRecipeStep } = this.props;
    return (
      <Wrapper>
        <View>
          <Text style={{ color: '#777777' }}>Langkah</Text>
        </View>
        {this.renderList()}
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <ButtonOutline
            icon="add"
            style={{ marginRight: 20 }}
            onPress={() => addRecipeStep(this.getEmptyData())}
          >
            Tambah
          </ButtonOutline>
        </View>
        <View style={{ marginTop: 15 }}>
          <FieldErrorInfo message={this.props.inputErrors.get('steps')} bottom />
        </View>
      </Wrapper>
    );
  }
}

FieldSteps.propTypes = {
  recipeSteps: PropTypes.object,
  inputErrors: PropTypes.object,
  addRecipeStep: PropTypes.func,
  updateRecipeStep: PropTypes.func,
  removeRecipeStep: PropTypes.func,
  checkInputError: PropTypes.func,
};

export default withMyRecipe(FieldSteps);
