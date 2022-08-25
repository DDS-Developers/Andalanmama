/**
 * scenes/ProfieEdit/index.js
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Container, View } from 'native-base';
import { withMyProfile } from '../../providers/MyProfile';
import Form, { withForm } from '../../containers/Form';
import Content from '../../components/Content';
import Header from '../../components/Header';
import FieldText from '../../components/FieldText';
// import FieldDate from '../../components/FieldDateTime';
import FieldDateTime from '../../components/FieldDateTime';
import FieldTextarea from '../../components/FieldTextarea';
import FieldPhoto from '../../components/FieldPhoto';
import FieldErrorInfo from '../../components/FieldErrorInfo';
import FieldWrapper from './FieldWrapper';
import { validationConfig } from './validation';
import Loader from '../../components/Loader';
const fields = ['username', 'fullname', 'email', 'phone', 'about', 'birthday', 'address'];

export class ProfieEditScene extends Component {
  static navigationOptions = {
    title: 'Ubah Profil',
    header: null,
  };

  componentDidMount() {
    this.props.loadProfile();
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
    const { inputErrors, formData, loading } = this.props;
    return (
      <Container>
        <Loader visible={loading} />
        <Header
          title="Ubah Profil"
          leftSettings={{ type: 'back' }}
          rightSettings={{
            label: 'Simpan',
            handler: () => {
              this.props.updateProfile();
            },
          }}
        />
        <Content>
          <Form fields={fields} validationSettings={validationConfig} hideMessage>
            <FieldPhoto
              value={formData.get('avatar')}
              onChange={(image, callback) => {
                this.props.changeFormData('avatar', image);
                callback();
              }}
              onPage="Ubah Profil"
            />
            <FieldWrapper>
              <FieldText
                stackedLabel
                label="Nama Pengguna"
                placeholder="Nama Pengguna"
                value={formData.get('username')}
                editable={false}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FieldText
                stackedLabel
                label="Nama Lengkap"
                placeholder="Nama Lengkap"
                value={formData.get('fullname')}
                error={this.checkInputError('fullname')}
                onChangeText={value => this.props.changeFormData('fullname', value)}
              />
              <View>
                <FieldErrorInfo message={inputErrors.get('fullname')} bottom />
              </View>
            </FieldWrapper>
            <FieldWrapper>
              <FieldDateTime
                stackedLabel
                label="Tanggal lahir (DD/MM/YYYY)"
                placeholder={formData.get('birthday') || 'Birthday'}
                textValue={formData.get('birthday')}
                error={this.checkInputError('birthday')}
                setMode="date"
                maximumDate={new Date()}
                minimumDate={new Date(1960, 1, 1)}
                onSetPicker={(event, date) => {
                  const today = new Date().setHours(0, 0, 0, 0);
                  if (date <= today) {
                    const year = date.getFullYear();
                    const month = `0${date.getMonth() + 1}`.slice(-2);
                    const day = `0${date.getDate()}`.slice(-2);
                    const birthdate = `${year}-${month}-${day}`;
                    this.props.changeFormData('birthday', birthdate);
                  }
                }}
              />
              <View>
                <FieldErrorInfo message={inputErrors.get('birthday')} bottom />
              </View>
            </FieldWrapper>
            <FieldWrapper>
              <FieldTextarea
                stackedLabel
                label="Tentang Saya"
                placeholder="Tentang Saya"
                value={formData.get('description')}
                onChangeText={value => this.props.changeFormData('description', value)}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FieldText
                stackedLabel
                label="Alamat"
                placeholder="Alamat"
                value={formData.get('address')}
                error={this.checkInputError('address')}
                onChangeText={value => this.props.changeFormData('address', value)}
              />
              <View>
                <FieldErrorInfo message={inputErrors.get('address')} bottom />
              </View>
            </FieldWrapper>
            <FieldWrapper>
              <FieldText
                stackedLabel
                label="E-mail"
                placeholder="E-mail"
                value={formData.get('email')}
                error={this.checkInputError('email')}
                onChangeText={value => this.props.changeFormData('email', value.trim())}
                onBlur={() => {
                  this.checkInputError('email');
                }}
              />
              <View>
                <FieldErrorInfo message={inputErrors.get('email')} bottom />
              </View>
            </FieldWrapper>
            <FieldWrapper>
              <FieldText
                stackedLabel
                label="No. Telp/HP (Yang aktif)"
                keyboardType="numeric"
                placeholder="No. Telp/HP (Yang aktif)"
                value={formData.get('phone')}
                onChangeText={value => this.props.changeFormData('phone', value.trim())}
              />
            </FieldWrapper>
          </Form>
        </Content>
      </Container>
    );
  }
}

ProfieEditScene.propTypes = {
  inputErrors: PropTypes.object,
  formData: PropTypes.object,
  changeFormData: PropTypes.func,
  loading: PropTypes.bool,
  loadProfile: PropTypes.func,
  updateProfile: PropTypes.func,
};

export default compose(
  withMyProfile,
  withForm,
)(ProfieEditScene);
