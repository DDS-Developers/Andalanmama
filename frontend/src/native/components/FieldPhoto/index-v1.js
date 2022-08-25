/**
 * components/FieldPhoto/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import ImageCropper from 'react-native-image-crop-picker';

import { Http } from '../../services/http';
import Pane from '../Pane';
import FieldErrorInfo from '../FieldErrorInfo';
import Text from '../Text';
import Wrapper from './Wrapper';
import PhotoWrapper from './PhotoWrapper';
import Photo from './Photo';
import Empty from './Empty';
import EmptyIcon from './EmptyIcon';
import ActionWrapper from './ActionWrapper';
import ButtonDelete from './ButtonDelete';
import ButtonChange from './ButtonChange';
import ButtonChangeIcon from './ButtonChangeIcon';

export class FieldPhoto extends PureComponent {
  deletePhoto = evt => {
    evt.preventDefault();
    this.props.onDelete();
  };

  changePhoto = evt => {
    evt.preventDefault();

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
          // form data
          const parts = image.path.split('/');
          const form = new FormData();
          form.append('attachment', {
            uri: image.path,
            name: parts[parts.length - 1],
            type: image.mime,
          });

          if (this.props.onPage === 'Edit Profile') {
            const res = await Http.post('upload-avatar', form, {
              'Content-Type': 'application/json;charset=utf-8',
            });
            this.props.onChange(res.data.url, () => {});
          } else {
            const res = await Http.post('upload', form, {
              'Content-Type': 'multipart/form-data',
            });
            this.props.onChange(res.data.url, () => {});
          }
        });
      }
    });
  };

  renderPhoto = () => (
    <PhotoWrapper style={this.props.photoContainerStyle}>
      <Photo large source={{ uri: this.props.value }} style={this.props.photoStyle} />
      <ActionWrapper>
        <ButtonChange onPress={this.changePhoto}>
          <ButtonChangeIcon type="MaterialIcons" name="photo-camera" />
          <Text textAlign="center" color="#ffffff">
            Ganti
          </Text>
        </ButtonChange>
        {this.props.onDelete ? (
          <ButtonDelete onPress={this.deletePhoto}>
            <ButtonChangeIcon type="FontAwesome" name="trash-o" />
          </ButtonDelete>
        ) : null}
      </ActionWrapper>
    </PhotoWrapper>
  );

  renderEmpty = () => (
    <Empty onPress={this.changePhoto} style={this.props.emptyStyle}>
      <Pane column center>
        <EmptyIcon type="MaterialIcons" name="photo-camera" />
        <View>
          <Text textAlign="center" color="#777777">
            Unggah foto resep kamu
          </Text>
        </View>
      </Pane>
    </Empty>
  );

  render() {
    const { error, value, containerStyle } = this.props;

    return (
      <Wrapper style={containerStyle}>
        <Pane column center justify="center">
          <Pane>{value && value !== '' ? this.renderPhoto() : this.renderEmpty()}</Pane>
          {error ? (
            <Pane>
              <FieldErrorInfo message={error} bottom />
            </Pane>
          ) : null}
        </Pane>
      </Wrapper>
    );
  }
}

FieldPhoto.propTypes = {
  value: PropTypes.string,
  onPage: PropTypes.string,
  containerStyle: PropTypes.object,
  emptyStyle: PropTypes.object,
  photoStyle: PropTypes.object,
  photoContainerStyle: PropTypes.object,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
};

export default FieldPhoto;
