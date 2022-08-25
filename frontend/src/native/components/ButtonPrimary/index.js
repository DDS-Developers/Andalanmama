/**
 * components/ButtonPrimary/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import TextWrapper from './TextWrapper';

const ButtonPrimary = props => {
  const { children, ...others } = props;
  return (
    <Wrapper {...others}>
      <TextWrapper>{children}</TextWrapper>
    </Wrapper>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonPrimary;
