/**
 * scenes/LoginForm/index.js
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

const fields = ['email', 'password'];

export class LoginScene extends PureComponent {
  static navigationOptions = {
    title: 'LoginForm',
    header: null,
  };

  state = {
    logoSmall: false,
    checked: false,
  };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
      this.setState({ logoSmall: true }),
    );
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
      this.setState({ logoSmall: false }),
    );
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
        <Header title="Masuk" leftSettings={{ type: 'back' }} />
        <Content>
          <View>
            <MainLogo small={this.state.logoSmall} style={{ marginBottom: 50 }} />
            <Form fields={fields} validationSettings={validationConfig}>
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
                label="Password"
                value={formData.get('password')}
                error={this.checkInputError('password')}
                onChangeText={value => this.props.changeFormData('password', value.trim())}
              />
              {/*<View style={{ marginTop: 15, flexDirection: 'row' }}>
                <CheckBox
                  disabled={false}
                  value={this.state.checked}
                  onValueChange={newValue => this.setState({ checked: newValue })}
                />
                <View style={{ marginLeft: 10, flex: 1 }}>
                  <Paragraph>
                    Saya menyetujui Syarat dan Ketentuan Andalan Mama dan data saya untuk diproses
                    sesuai dengan kebijakan privasi Andalan Mama.
                  </Paragraph>
                </View>
              </View>*/}
              <View style={{ marginTop: 15 }}>
                <ButtonPrimary
                  // disabled={!this.state.checked}
                  full
                  onPress={() => this.props.doLogin()}
                >
                  Masuk
                </ButtonPrimary>
              </View>
            </Form>
            <Pane center>
              <BottomWrapper>
                <Text style={{ marginRight: 6 }}>Belum punya akun?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={{ fontWeight: 'bold' }}>Daftar</Text>
                </TouchableOpacity>
              </BottomWrapper>
            </Pane>
          </View>
        </Content>
      </Container>
    );
  }
}

LoginScene.propTypes = {
  navigation: PropTypes.object,
  formData: PropTypes.object,
  inputErrors: PropTypes.object,
  changeFormData: PropTypes.func,
  doLogin: PropTypes.func,
};

export default compose(
  withAuth,
  withForm,
)(LoginScene);
