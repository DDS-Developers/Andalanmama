/**
 * components/FieldDate/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';
import Input from './InputWrapper';
import InputStacked from './StackedWrapper';
import Wrapper from './Wrapper';
import StackedLabel from './StackedLabelWrapper';

export class FieldDate extends PureComponent {
  state = {
    pickerMode: null,
  };

  setPickerMode = mode => {
    this.setState({
      pickerMode: mode,
    });
  };

  handleConfirm = (event, date) => {
    this.setState({
      pickerMode: null,
    });
    this.props.onSetPicker && this.props.onSetPicker(event, date);
  };

  dateTimePicker = () => {
    const { pickerMode } = this.state;
    const { textValue, ...others } = this.props;
    if (pickerMode === 'time') {
      let timeValue = null;
      if (textValue) {
        const stringValue = textValue;
        const hours = parseInt(stringValue.slice(0, 2), 10);
        const minute = parseInt(stringValue.slice(-2), 10);
        timeValue = new Date().setHours(hours, minute);
      }
      return (
        <DateTimePicker
          date={timeValue ? new Date(timeValue) : new Date()}
          value={new Date()}
          mode={pickerMode}
          onChange={this.handleConfirm}
          {...others}
        />
      );
    }
    return (
      <DateTimePicker
        date={textValue ? new Date(`${textValue}`) : new Date()}
        value={textValue ? new Date(`${textValue}`) : new Date()}
        isVisible={pickerMode !== null}
        mode={pickerMode}
        onChange={this.handleConfirm}
        {...others}
      />
    );
  };

  render() {
    const {
      label,
      last,
      error,
      stackedLabel,
      setMode,
      textValue,
      styleInput,
      placeholderTextColor,
      placeholder
    } = this.props;

    let marginBottom = '10px';
    if (last) {
      marginBottom = false;
    }

    return (
      <Wrapper regular error={error} stackedLabel={stackedLabel} marginBottom={marginBottom}>
        <React.Fragment>
          {stackedLabel ? <StackedLabel>{label}</StackedLabel> : null}

          <TouchableOpacity
            style={{ height: 50, width: '100%' }}
            onPress={() => {
              this.setState({
                pickerMode: setMode,
              });
            }}
          >
            {stackedLabel ? (
              <InputStacked
                autoCapitalize="none"
                placeholder={textValue || placeholder}
                placeholderTextColor={textValue ? '#333333' : 'rgba(28,28,28,0.5)'}
                editable={false}
                value={textValue}
                style={styleInput}
              />
            ) : (
              <Input
                placeholder={textValue || placeholder}
                autoCapitalize="none"
                editable={false}
                value={textValue}
                style={styleInput}
                placeholderTextColor={placeholderTextColor}
              />
            )}
          </TouchableOpacity>
          {this.state.pickerMode !== null ? this.dateTimePicker() : null}
        </React.Fragment>
      </Wrapper>
    );
  }
}

FieldDate.propTypes = {
  label: PropTypes.string,
  last: PropTypes.bool,
  error: PropTypes.bool,
  stackedLabel: PropTypes.bool,
  setMode: PropTypes.string,
  textValue: PropTypes.string,
  onSetPicker: PropTypes.func,
  styleInput: PropTypes.object,
  placeholderTextColor: PropTypes.string,
};

export default FieldDate;
