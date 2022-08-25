import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { View, Image, Keyboard } from 'react-native';
import { Textarea, Button, Icon, Form } from 'native-base';

import { withComments } from '../../providers/Comments';
import { withMyProfile } from '../../providers/MyProfile';
import FieldErrorInfo from '../../components/FieldErrorInfo';
import defaultProfile from './baseline_person.png';

/* eslint-disable react/prefer-stateless-function */
export class InputComment extends PureComponent {
  componentDidMount() {
    const { loggedIn } = this.props;
    if (loggedIn) {
      this.props.getProfile();
    }
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  checkInputError = fieldName => {
    const { inputErrors } = this.props;
    let isError = false;
    if (inputErrors.get(fieldName)) {
      isError = true;
    }
    return isError;
  };

  render() {
    const { profile, inputErrors } = this.props;
    return (
      <>
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {profile ? (
            <Image
              style={{ width: 34, height: 34, borderRadius: 34, marginRight: 15 }}
              source={{ uri: profile.get('image') }}
              resizeMode="cover"
            />
          ) : (
            <Image
              style={{ width: 34, height: 34, borderRadius: 34, marginRight: 15 }}
              source={defaultProfile}
              resizeMode="cover"
            />
          )}
          <View
            style={{
              height: 40,
              flex: 1,
            }}
          >
            <Form
              // fields={fields}
              // validationSettings={validationConfig}
              // hideMessage
              // style={{ flex: 1, flexDirection: 'row' }}
              style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
            >
              <Textarea
                placeholder="Tambahkan Komentar…"
                style={{
                  fontSize: 13,
                  paddingLeft: 0,
                  paddingRight: 0,
                  height: 40,
                  flex: 1,
                }}
                // value={formData.get('comments')}
                value={this.props.bodyComment}
                error={this.checkInputError('bodyComment')}
                onChangeText={value => this.props.changeBodyComment(value)}
              />
              <Button
                transparent
                style={{ paddingTop: 0, paddingBottom: 0 }}
                onPress={() => {
                  Keyboard.dismiss();
                  this.props.createComment();
                }}
              >
                <Icon
                  style={{ color: 'rgba(0, 0, 0, .5)', marginRight: 0 }}
                  type="MaterialIcons"
                  name="send"
                />
              </Button>
              <View style={{ position: 'absolute', bottom: -10, left: 0 }}>
                <FieldErrorInfo message={inputErrors.get('bodyComment')} bottom />
              </View>
            </Form>
          </View>
        </View>
      </>
    );
  }
}
InputComment.propTypes = {
  loggedIn: PropTypes.bool,
  getProfile: PropTypes.func,
  profile: PropTypes.object,
  inputErrors: PropTypes.object,
  resetData: PropTypes.func,
  changeBodyComment: PropTypes.func,
  bodyComment: PropTypes.string,
  createComment: PropTypes.func,
};
export default compose(
  withMyProfile,
  withComments,
)(InputComment);
