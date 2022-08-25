/**
 * components/Dialog/Button.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import ButtonText from '../ButtonText';

const Button = props => {
  const { children, ...others } = props;
  const textStyles = {
    fontSize: 13,
    fontWeight: 'bold',
  };
  return (
    <ButtonText transparent textStyles={textStyles} style={{ marginLeft: 20 }} {...others}>
      {children}
    </ButtonText>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
