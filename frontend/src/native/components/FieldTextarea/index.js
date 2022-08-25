/**
 * components/FieldTextarea/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../FieldText/Wrapper';
import Input from './InputWrapper';
import InputStacked from './StackedWrapper';
import StackedLabel from './StackedLabelWrapper';

const FieldTextarea = props => {
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
          <InputStacked
            type="password"
            autoCapitalize="none"
            placeholderTextColor="rgba(28,28,28,0.5)"
            {...others}
          />
        </React.Fragment>
      ) : (
        <Input
          type="password"
          placeholder={label}
          placeholderTextColor="rgba(28,28,28,0.5)"
          autoCapitalize="none"
          {...others}
        />
      )}
    </Wrapper>
  );
};

FieldTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  last: PropTypes.bool,
  error: PropTypes.bool,
  stackedLabel: PropTypes.bool,
};

export default FieldTextarea;
