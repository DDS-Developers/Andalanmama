/**
 * components/FieldTextarea/InputText.js
 *
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputWrapper from './InputWrapper';

const InputText = props => {
  // height state
  const [height, setHeight] = useState(props.style?.height || 80);

  return (
    <InputWrapper
      placeholder={props.placeholder}
      {...props}
      onContentSizeChange={evt => {
        setHeight(evt.nativeEvent.contentSize.height);
      }}
      style={{ height, ...(props.style || {}) }}
    />
  );
};

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default InputText;
