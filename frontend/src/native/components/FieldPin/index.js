/**
 * components/FieldPin/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Wrapper from './Wrapper';
import StackedLabel from '../FieldText/StackedLabelWrapper';

const FieldPin = props => {
  const { label, last, error, stackedLabel, ...others } = props;

  let marginBottom = '10px';
  if (last) {
    marginBottom = false;
  }

  return (
    <Wrapper regular error={error} stackedLabel={stackedLabel} marginBottom={marginBottom}>
      {stackedLabel ? (
        <React.Fragment>
          <StackedLabel>{label}</StackedLabel>
          <InputPin {...others} />
        </React.Fragment>
      ) : (
        <InputPin {...others} />
      )}
    </Wrapper>
  );
};

const InputPin = props => {
  const { error, ...others } = props;

  let borderColor = '#cccccc';
  let focusedBorderColor = '#aaaaaa';
  if (error) {
    borderColor = '#ed2f2f';
    focusedBorderColor = '#ce2137';
  }

  return (
    <SmoothPinCodeInput
      containerStyle={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
      cellStyle={{
        borderBottomWidth: 2,
        borderColor,
        width: 35,
        height: 55,
        marginRight: 20,
        marginLeft: 0,
        paddingBottom: 8,
        flex: 1,
        alignItems: 'flex-end',
      }}
      textStyle={{
        fontSize: 16,
        color: '#333333',
      }}
      cellStyleFocused={{
        borderColor: focusedBorderColor,
      }}
      codeLength={6}
      keyboardType="number-pad"
      {...others}
    />
  );
};

FieldPin.propTypes = {
  label: PropTypes.string.isRequired,
  last: PropTypes.bool,
  error: PropTypes.bool,
  stackedLabel: PropTypes.bool,
};

export default FieldPin;
