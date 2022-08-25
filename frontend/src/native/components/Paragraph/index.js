/**
 * components/Paragraph/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Wrapper from './Wrapper';

const Paragraph = props => {
  const { children, textStyles, center, right, marginBottom, ...others } = props;

  let textAlign = 'left';
  if (center) {
    textAlign = 'center';
  } else if (right) {
    textAlign = 'right';
  }

  let mb = marginBottom;
  if (mb === false) {
    mb = '0px';
  }

  return (
    <Wrapper marginBottom={mb} {...others}>
      <Text textAlign={textAlign} {...textStyles}>
        {children}
      </Text>
    </Wrapper>
  );
};

Paragraph.propTypes = {
  center: PropTypes.bool,
  right: PropTypes.bool,
  children: PropTypes.node,
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  textStyles: PropTypes.object,
};

export default Paragraph;
