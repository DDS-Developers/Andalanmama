/**
 * components/ButtonPrimary/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import TextWrapper from '../ButtonPrimary/TextWrapper';
import IconWrapper from './IconWrapper';
import Wrapper from './Wrapper';

const ButtonOutline = props => {
  const { children, icon, ...others } = props;
  return (
    <Wrapper bordered dark {...others}>
      <TextWrapper style={{ color: '#333333' }}>{children}</TextWrapper>
      {icon ? <IconWrapper type="MaterialIcons" name={icon} /> : null}
    </Wrapper>
  );
};

ButtonOutline.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default ButtonOutline;
