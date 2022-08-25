/**
 * scenes/ChangePassword/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Container, View } from 'native-base';
import { withAuth } from '../../providers/Auth';
import Form, { withForm } from '../../containers/Form';
import Pane from '../../components/Pane';
import Content from '../../components/Content';
import Header from '../../components/Header';
import FieldPassword from '../../components/FieldPassword';
import FieldErrorInfo from '../../components/FieldErrorInfo';
import ButtonPrimary from '../../components/ButtonPrimary';
import { validationConfig } from './validation';
import FieldWrapper from './FieldWrapper';

const fields = ['currentPassword', 'password', 'passwordConfirmation'];

export class ChangePasswordScene extends PureComponent {
  static navigationOptions = {
    title: 'Change Password',
    header: null,
  };

  componentDidMount() {
    const { navigation, loggendIn } = this.props;

    if (loggendIn) {
      navigation.navigate('MyAccount');
    }
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
    const { inputErrors, formData } = this.props;
    return (
      <Container>
        <Header title="Ganti Password" leftSettings={{ type: 'back' }} />
        <Content>
          <Form fields={fields} validationSettings={validationConfig} hideMessage>
            <FieldWrapper>
              <FieldPassword
                last
                stackedLabel
                placeholder="Your Current Password"
                label="Current Password"
                value={formData.get('currentPassword')}
                error={this.checkInputError('currentPassword')}
                onChangeText={value => this.props.changeFormData('currentPassword', value)}
              />
              <View>
                <FieldErrorInfo message={inputErrors.get('currentPassword')} bottom />
              </View>
            </FieldWrapper>
            <FieldWrapper>
              <FieldPassword
                last
                stackedLabel
                placeholder="Your New Password"
                label="New Password"
                value={formData.get('password')}
                error={this.checkInputError('password')}
                onChangeText={value => this.props.changeFormData('password', value)}
              />
              <View>
                <FieldErrorInfo message={inputErrors.get('password')} bottom />
              </View>
            </FieldWrapper>
            <FieldWrapper>
              <FieldPassword
                last
                stackedLabel
                placeholder="Confirm Your New Password"
                label="Confirm Password"
                value={formData.get('passwordConfirmation')}
                error={this.checkInputError('passwordConfirmation')}
                onChangeText={value => this.props.changeFormData('passwordConfirmation', value)}
              />
              <View>
                <FieldErrorInfo message={inputErrors.get('passwordConfirmation')} bottom />
              </View>
            </FieldWrapper>
            <Pane center justify="center" style={{ marginTop: 25 }}>
              <ButtonPrimary onPress={() => this.props.doChangePassword()}>Submit</ButtonPrimary>
            </Pane>
          </Form>
        </Content>
      </Container>
    );
  }
}

ChangePasswordScene.propTypes = {
  navigation: PropTypes.object,
  inputErrors: PropTypes.object,
  formData: PropTypes.object,
  changeFormData: PropTypes.func,
  doChangePassword: PropTypes.func,
  loggendIn: PropTypes.bool,
};

export default compose(
  withAuth,
  withForm,
)(ChangePasswordScene);
