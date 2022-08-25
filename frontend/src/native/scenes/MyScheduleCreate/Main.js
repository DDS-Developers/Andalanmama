/**
 * scenes/MySchedule/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, View, Text, Form } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { withMyScheduleItem } from '../../providers/MyScheduleItem';

import Content from '../../components/Content';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import FieldErrorInfo from '../../components/FieldErrorInfo';
import Dialog from '../../components/Dialog';
import ButtonText from '../../components/Dialog/Button';
import FieldDateTime from '../../components/FieldDateTime';
import FieldWrapper from './FieldWrapper';
import FieldRadio from '../../components/FieldRadio';
import FieldRecipeOthers from './FieldRecipeOthers';
// import FieldRecipeMain from './FieldRecipeMain';
// import Debugger from '../../helpers/Debugger';

export class MyScheduleCreateMain extends PureComponent {
  state = {
    radioOptions: [
      { label: 'Sarapan', time: '06.00', value: 1 },
      { label: 'Makan Siang', time: '11.00', value: 2 },
      { label: 'Makan Malam', time: '17.00', value: 3 },
    ],
  };

  doSaveRecipe = () => {
    const { schedule } = this.props;
    if (schedule && schedule.count() > 0) {
      this.props.updateSchedule(schedule.get('id'));
    } else {
      this.props.createSchedule();
    }
  };

  getInputError = fieldName => {
    const { inputErrors } = this.props;
    let isError = false;
    if (inputErrors.get(fieldName)) {
      isError = true;
    }
    return isError;
  };

  addTime = data => {
    const { radioOptions } = this.state;
    const time = radioOptions.filter(item => item.value === data).map(i => i.time);
    this.props.changeTime(time.toString());
  };

  renderForm = () => {
    const { schedule, scheduleDate, scheduleTime, scheduleShift, inputErrors } = this.props;
    const { radioOptions } = this.state;

    return (
      <Form>
        {!schedule ? (
          <FieldWrapper>
            <FieldDateTime
              styleInput={{
                borderRadius: 0,
                borderWidth: 0,
                paddingRight: 24,
                paddingLeft: 24,
              }}
              placeholderTextColor="#333333"
              textValue={scheduleDate}
              placeholder={scheduleDate || 'Pilih Tanggal'}
              error={this.getInputError('date')}
              setMode="date"
              maximumDate={new Date(2025, 1, 1)}
              minimumDate={new Date()}
              onSetPicker={(event, date) => {
                const today = new Date().setHours(0, 0, 0, 0);
                if (date >= today) {
                  const year = date.getFullYear();
                  const month = `0${date.getMonth() + 1}`.slice(-2);
                  const day = `0${date.getDate()}`.slice(-2);
                  const scheduledate = `${year}-${month}-${day}`;
                  this.props.changeDate(scheduledate);
                }
              }}
            />
            <View>
              <FieldErrorInfo message={inputErrors.get('date')} bottom />
            </View>
          </FieldWrapper>
        ) : null}
        <FieldWrapper>
          <FieldRadio
            options={radioOptions}
            value={scheduleShift ? parseInt(scheduleShift, 10) : null}
            onChange={shift => {
              this.props.changeShift(shift);
              this.addTime(shift);
            }}
            error={this.getInputError('shift')}
          />
          <View>
            <FieldErrorInfo message={inputErrors.get('shift')} bottom />
          </View>
        </FieldWrapper>
        <FieldWrapper>
          <FieldDateTime
            styleInput={{
              borderRadius: 0,
              borderWidth: 0,
              paddingRight: 24,
              paddingLeft: 24,
            }}
            placeholder={scheduleTime || 'Pilih Waktu'}
            placeholderTextColor="#333333"
            textValue={scheduleTime}
            error={this.getInputError('time')}
            setMode="time"
            is24Hour
            minuteInterval={5}
            onSetPicker={(event, date) => {
              const hours = `0${date.getHours()}`.slice(-2);
              const minute = `0${date.getMinutes()}`.slice(-2);
              const scheduletime = `${hours}.${minute}`;
              this.props.changeTime(scheduletime);
            }}
          />
          <Text style={{ fontSize: 9, color: 'rgba(0,0,0,0.6)' }}>
            Pilih spesifikasi waktu yang di inginkan.
          </Text>
          <View>
            <FieldErrorInfo message={inputErrors.get('time')} bottom />
          </View>
        </FieldWrapper>
        {/* <FieldWrapper style={{ marginTop: 30 }}>
          <FieldRecipeMain />
          {inputErrors.get('recipeMain') ? (
            <View style={{ marginTop: 10 }}>
            <FieldErrorInfo message={inputErrors.get('recipeMain')} bottom />
            </View>
            ) : null}
          </FieldWrapper> */}
        <FieldWrapper style={{ marginTop: 20 }}>
          <FieldRecipeOthers />
          {inputErrors.get('recipeOthers') ? (
            <View style={{ marginTop: 10 }}>
              <FieldErrorInfo message={inputErrors.get('recipeOthers')} bottom />
            </View>
          ) : null}
          <Text style={{ fontSize: 11, color: 'rgba(0,0,0,0.6)', marginTop: 10 }}>
            Tekan Selesai untuk untuk Menyimpan jadwal
          </Text>
        </FieldWrapper>
      </Form>
    );
  };

  renderUnmountConfirm = () => {
    const { showUnmountConfirm } = this.state;

    return (
      <Dialog
        visible={showUnmountConfirm}
        title="Are You Sure?"
        message="Jika keluar sekarang data akan hilang"
        actions={
          <React.Fragment>
            <ButtonText
              onPress={() => {
                this.setState({
                  showUnmountConfirm: false,
                });
              }}
            >
              Batal
            </ButtonText>
            <ButtonText
              onPress={() => {
                this.setState({
                  showUnmountConfirm: false,
                });
                this.props.navigation.goBack();
              }}
            >
              Lanjutkan
            </ButtonText>
          </React.Fragment>
        }
      />
    );
  };

  renderIncompleteConfirm = () => {
    const { showIncompleteConfirm } = this.state;

    return (
      <Dialog
        visible={showIncompleteConfirm}
        title="Are You Sure?"
        message="Sepertinya kamu belum mengisi semua langkah, yakin ingin menyelesaikan?"
        actions={
          <React.Fragment>
            <ButtonText
              onPress={() => {
                this.setState({
                  showIncompleteConfirm: false,
                });
              }}
            >
              Batal
            </ButtonText>
            <ButtonText
              onPress={() => {
                this.setState({
                  showIncompleteConfirm: false,
                });
              }}
            >
              Lanjutkan
            </ButtonText>
          </React.Fragment>
        }
      />
    );
  };

  render() {
    const { manageLoading, sceneTitle } = this.props;
    let rightSettings = {};
    if (!manageLoading) {
      rightSettings = { label: 'Simpan', handler: () => this.doSaveRecipe() };
    }
    const leftSettings = {
      type: 'back',
      callback: () => {
        const { dataChanged } = this.props;
        if (dataChanged) {
          this.setState({
            showUnmountConfirm: true,
          });
        } else {
          this.props.navigation.goBack();
        }
      },
    };

    return (
      <Container>
        <Header title={sceneTitle} leftSettings={leftSettings} rightSettings={rightSettings} />
        <View style={{ flex: 1 }}>
          <Loader visible={manageLoading} />
          <Content style={{ backgroundColor: '#efefef' }}>{this.renderForm()}</Content>
        </View>
        {this.renderUnmountConfirm()}
        {this.renderIncompleteConfirm()}
      </Container>
    );
  }
}
MyScheduleCreateMain.propTypes = {
  sceneTitle: PropTypes.string,
  schedule: PropTypes.object,
  scheduleDate: PropTypes.string,
  scheduleTime: PropTypes.string,
  scheduleShift: PropTypes.number,
  inputErrors: PropTypes.object,
  createSchedule: PropTypes.func,
  updateSchedule: PropTypes.func,
  changeDate: PropTypes.func,
  changeTime: PropTypes.func,
  changeShift: PropTypes.func,
  manageLoading: PropTypes.bool,
  dataChanged: PropTypes.bool,
};

const NavigationWrapper = props => {
  const navigation = useNavigation();

  return <MyScheduleCreateMain {...props} navigation={navigation} />;
};

export default withMyScheduleItem(NavigationWrapper);
