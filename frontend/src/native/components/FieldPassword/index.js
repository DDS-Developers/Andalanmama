/**
 * components/FieldPassword/index.js
 *
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../FieldText/Wrapper';
import Input from '../FieldText/InputWrapper';
import InputStacked from '../FieldText/StackedWrapper';
import StackedLabel from '../FieldText/StackedLabelWrapper';
import Toggle from './Toggle';
import ToggleStacked from './ToggleStacked';

const FieldPassword = props => {
  // Hide password state
  const [hidePassword, setHidePassword] = useState(true);

  const { label, last, error, stackedLabel, ...others } = props;

  let marginBottom = '10px';
  if (last) {
    marginBottom = false;
  }

  let ToggleComponent = Toggle;
  if (stackedLabel) {
    ToggleComponent = ToggleStacked;
  }

  return (
    <Wrapper regular error={error} stackedLabel={stackedLabel} marginBottom={marginBottom}>
      {stackedLabel ? (
        <React.Fragment>
          <StackedLabel>{label}</StackedLabel>
          <InputStacked
            type="password"
            secureTextEntry={hidePassword}
            autoCapitalize="none"
            placeholderTextColor="rgba(28,28,28,0.5)"
            {...others}
          />
        </React.Fragment>
      ) : (
        <Input
          type="password"
          secureTextEntry={hidePassword}
          placeholder={label}
          placeholderTextColor="rgba(28,28,28,0.5)"
          autoCapitalize="none"
          {...others}
        />
      )}
      <ToggleComponent
        type="Entypo"
        name={hidePassword ? 'eye' : 'eye-with-line'}
        onPress={() => setHidePassword(!hidePassword)}
      />
    </Wrapper>
  );
};

FieldPassword.propTypes = {
  label: PropTypes.string.isRequired,
  last: PropTypes.bool,
  error: PropTypes.bool,
  stackedLabel: PropTypes.bool,
};

export default FieldPassword;
