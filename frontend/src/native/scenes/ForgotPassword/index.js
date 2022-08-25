/**
 * scenes/ForgotPassword/index.js
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
import FieldText from '../../components/FieldText';
import FieldErrorInfo from '../../components/FieldErrorInfo';
import ButtonPrimary from '../../components/ButtonPrimary';
import { validationConfig } from './validation';
import TopWrapper from './TopWrapper';

const fields = ['email'];

export class ForgotPasswordScene extends PureComponent {
  static navigationOptions = {
    title: 'Lupa Password',
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
        <Header title="Lupa Password" leftSettings={{ type: 'back' }} />
        <Content>
          <TopWrapper center>
            Masukkan alamat email untuk menerima tautan penggantian kata sandi
          </TopWrapper>
          <Form fields={fields} validationSettings={validationConfig} hideMessage>
            <FieldText
              stackedLabel
              label="E-mail"
              placeholder="E-mail anda"
              value={formData.get('email')}
              error={this.checkInputError('email')}
              onChangeText={value => this.props.changeFormData('email', value.trim())}
            />
            <View>
              <FieldErrorInfo message={inputErrors.get('email')} bottom />
            </View>
            <Pane justify="center" style={{ marginTop: 25 }}>
              <ButtonPrimary
                style={{ height: 43, maxWidth: 145 }}
                onPress={() => this.props.doForgotPassword()}
              >
                Kirim
              </ButtonPrimary>
            </Pane>
          </Form>
        </Content>
      </Container>
    );
  }
}

ForgotPasswordScene.propTypes = {
  navigation: PropTypes.object,
  inputErrors: PropTypes.object,
  formData: PropTypes.object,
  changeFormData: PropTypes.func,
  doForgotPassword: PropTypes.func,
  loggendIn: PropTypes.bool,
};

export default compose(
  withAuth,
  withForm,
)(ForgotPasswordScene);
