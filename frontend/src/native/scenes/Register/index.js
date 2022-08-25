/**
 * scenes/Register/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Keyboard } from 'react-native';
import { Container, View } from 'native-base';
import { compose } from 'redux';
// eslint-disable-next-line import/no-unresolved
import CheckBox from '@react-native-community/checkbox';

import { withAuth } from '../../providers/Auth';
import Form, { withForm } from '../../containers/Form';

import Pane from '../../components/Pane';
import Content from '../../components/Content';
import Paragraph from '../../components/Paragraph';
import Text from '../../components/Text';
import Header from '../../components/Header';
import MainLogo from '../../components/MainLogo';
import FieldText from '../../components/FieldText';
import FieldPassword from '../../components/FieldPassword';
import ButtonPrimary from '../../components/ButtonPrimary';

import BottomWrapper from './BottomWrapper';
import { validationConfig } from './validation';

const fields = ['fullname', 'username', 'email', 'password', 'passwordConfirmation'];

export class RegisterScene extends PureComponent {
  static navigationOptions = {
    title: 'Register',
    header: null,
  };

  state = {
    logoSmall: false,
    checked: false,
  };

  componentDidMount() {
    const { loggedIn, navigation } = this.props;
    if (loggedIn) {
      navigation.navigate('Explore');
    } else {
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
        this.setState({ logoSmall: true }),
      );
      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
        this.setState({ logoSmall: false }),
      );
    }

    // this.props.changeFormData('fullname', 'Tito Hanks');
    // this.props.changeFormData('username', 'titohanks');
    // this.props.changeFormData('email', 'titohanks@gmail.com');
    // this.props.changeFormData('password', 'test123!');
    // this.props.changeFormData('passwordConfirmation', 'test123!');
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
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
    const { navigation, formData } = this.props;

    return (
      <Container>
        <Header title="Daftar" leftSettings={{ type: 'back' }} />
        <Content>
          <MainLogo small={this.state.logoSmall} />
          <Form fields={fields} validationSettings={validationConfig}>
            <FieldText
              label="Nama Lengkap"
              value={formData.get('fullname')}
              error={this.checkInputError('fullname')}
              onChangeText={value => this.props.changeFormData('fullname', value)}
            />
            <FieldText
              label="Nama Pengguna"
              value={formData.get('username')}
              error={this.checkInputError('username')}
              onChangeText={value => this.props.changeFormData('username', value.trim())}
              // onBlur={() => {
              //   console.log('OnBlurUsername');
              // }}
            />
            <FieldText
              label="Alamat Email"
              value={formData.get('email')}
              error={this.checkInputError('email')}
              onChangeText={value => this.props.changeFormData('email', value.trim())}
              // onBlur={() => {
              //   console.log('OnBlurEmail');
              // }}
            />
            <FieldPassword
              label="Kata Sandi"
              value={formData.get('password')}
              error={this.checkInputError('password')}
              onChangeText={value => this.props.changeFormData('password', value)}
              // onBlur={() => {
              //   console.log('OnBlurPassword');
              // }}
            />
            <FieldPassword
              label="Konfirmasi Kata Sandi"
              value={formData.get('passwordConfirmation')}
              error={this.checkInputError('passwordConfirmation')}
              onChangeText={value => this.props.changeFormData('passwordConfirmation', value)}
              // onBlur={() => {
              //   console.log('OnBlurConfirmPassword');
              // }}
            />
            <View style={{ marginTop: 15, flexDirection: 'row' }}>
              <CheckBox
                disabled={false}
                value={this.state.checked}
                onValueChange={newValue => this.setState({ checked: newValue })}
              />
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Paragraph>
                  Saya menyetujui Syarat dan Ketentuan Andalan Mama dan data saya untuk diproses
                  sesuai dengan kebijakan privasi Andalan Mama
                </Paragraph>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <ButtonPrimary
                disabled={!this.state.checked}
                full
                onPress={() => this.props.doRegister()}
              >
                Daftar
              </ButtonPrimary>
            </View>
          </Form>
          <Pane center>
            <BottomWrapper>
              <Text style={{ marginRight: 6 }}>Sudah mempunyai akun?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('LoginForm')}>
                <Text style={{ fontWeight: 'bold' }}>Masuk</Text>
              </TouchableOpacity>
            </BottomWrapper>
          </Pane>
        </Content>
      </Container>
    );
  }
}

RegisterScene.propTypes = {
  navigation: PropTypes.object,
  formData: PropTypes.object,
  inputErrors: PropTypes.object,
  changeFormData: PropTypes.func,
  doRegister: PropTypes.func,
  loggedIn: PropTypes.bool,
};

export default compose(
  withAuth,
  withForm,
)(RegisterScene);
