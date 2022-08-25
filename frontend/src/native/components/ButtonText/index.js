/**
 * components/ButtonText/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'native-base';
import LabelWrapper from './LabelWrapper';

const ButtonText = props => {
  const { children, textStyles, ...others } = props;
  return (
    <Button transparent {...others}>
      <LabelWrapper style={textStyles}>{children}</LabelWrapper>
    </Button>
  );
};

ButtonText.propTypes = {
  children: PropTypes.string.isRequired,
  textStyles: PropTypes.object,
};

export default ButtonText;
