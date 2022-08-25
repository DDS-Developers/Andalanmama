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
import FieldPin from '../../components/FieldPin';
import FieldPassword from '../../components/FieldPassword';
import FieldErrorInfo from '../../components/FieldErrorInfo';
import ButtonPrimary from '../../components/ButtonPrimary';
import { validationConfig } from './validation';
import FieldWrapper from './FieldWrapper';
import TopWrapper from './TopWrapper';

const fields = ['code', 'password', 'passwordConfirmation'];

export class ResetPasswordScene extends PureComponent {
  static navigationOptions = {
    title: 'Atur Ulang Password',
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
        <Header title="Atur Ulang Password" leftSettings={{ type: 'back' }} />
        <Content>
          <TopWrapper center>
            Masukkan email yang terdaftar dalam akunmu untuk mendapatkan link pengaturan ulang
            password
          </TopWrapper>
          <Form fields={fields} validationSettings={validationConfig} hideMessage>
            <FieldWrapper>
              <FieldPin
                last
                stackedLabel
                label="6 Angka Kode Verifikasi)"
                value={formData.get('code')}
                error={this.checkInputError('code')}
                onTextChange={value => this.props.changeFormData('code', value.trim())}
              />
              <View>
                <FieldErrorInfo message={inputErrors.get('code')} bottom />
              </View>
            </FieldWrapper>
            <FieldWrapper>
              <FieldPassword
                last
                stackedLabel
                placeholder="Kata sandi baru kamu"
                label="Kata Sandi Baru"
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
                placeholder="Konfirmasi kata sandi anda"
                label="Konfirmasi Kata Sandi"
                value={formData.get('passwordConfirmation')}
                error={this.checkInputError('passwordConfirmation')}
                onChangeText={value => this.props.changeFormData('passwordConfirmation', value)}
              />
              <View>
                <FieldErrorInfo message={inputErrors.get('passwordConfirmation')} bottom />
              </View>
            </FieldWrapper>
            <Pane center justify="center" style={{ marginTop: 25 }}>
              <ButtonPrimary onPress={() => this.props.doResetPassword()}>Selesai</ButtonPrimary>
            </Pane>
          </Form>
        </Content>
      </Container>
    );
  }
}

ResetPasswordScene.propTypes = {
  navigation: PropTypes.object,
  inputErrors: PropTypes.object,
  formData: PropTypes.object,
  changeFormData: PropTypes.func,
  doResetPassword: PropTypes.func,
  loggendIn: PropTypes.bool,
};

export default compose(
  withAuth,
  withForm,
)(ResetPasswordScene);
