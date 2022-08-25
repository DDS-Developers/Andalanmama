/**
 * components/FieldPhoto/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, ActionSheet } from 'native-base';
// eslint-disable-next-line import/no-unresolved
import * as ImagePicker from 'react-native-image-picker';
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

  /**
   * Change photo
   */
  changePhoto = evt => {
    evt.preventDefault();

    const BUTTONS = ['Ambil Photo', 'Pilih dari Gallery', 'Batal'];
    const CANCEL_INDEX = 2;

    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          this.launchCamera();
        } else if (buttonIndex === 1) {
          this.launchGallery();
        }
      },
    );
  };

  /**
   * launch camera
   */
  launchCamera = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 800,
        maxWidth: 800,
      },
      response => {
        this.openImageCropper(response);
      },
    );
  };

  /**
   * launch Gallery
   */
  launchGallery = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 800,
        maxWidth: 800,
      },
      response => {
        this.openImageCropper(response);
      },
    );
  };

  /**
   * launch Gallery
   */
  openImageCropper = response => {
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
