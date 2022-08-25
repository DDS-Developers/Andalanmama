/**
 * components/FieldText/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Input from './InputWrapper';
import InputStacked from './StackedWrapper';
import StackedLabel from './StackedLabelWrapper';

const FieldText = props => {
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
            autoCapitalize="none"
            placeholderTextColor="rgba(28,28,28,0.5)"
            {...others}
          />
        </React.Fragment>
      ) : (
        <Input
          placeholder={label}
          placeholderTextColor="rgba(28,28,28,0.5)"
          autoCapitalize="none"
          {...others}
        />
      )}
    </Wrapper>
  );
};

FieldText.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  last: PropTypes.bool,
  stackedLabel: PropTypes.bool,
};

export default FieldText;
