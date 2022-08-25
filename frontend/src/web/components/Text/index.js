import React from 'react';
import PropTypes from 'prop-types';
import Base from './Base';

const Text = props => {
  const { children, size, tagName, color, ...others } = props;
  let sizeCustom = size;
  let colorCustom = color;

  if (!sizeCustom) {
    sizeCustom = 300;
  }

  if (colorCustom && colorCustom === 'primary') {
    colorCustom = '#ef3648';
  }

  let fontSize;
  let lineHeight;
  let letterSpacing;

  switch (sizeCustom) {
    case 100:
      fontSize = '11px';
      lineHeight = '13px';
      break;
    case 200:
      fontSize = '12px';
      lineHeight = '15px';
      break;
    case 400:
      fontSize = '16px';
      lineHeight = '24px';
      letterSpacing = '0.01em';
      break;
    case 500:
      fontSize = '18px';
      lineHeight = '26px';
      letterSpacing = '0.02em';
      break;
    case 600:
      fontSize = '22px';
      lineHeight = '30px';
      letterSpacing = '0.02em';
      break;
    case 700:
      fontSize = '28px';
      lineHeight = '40px';
      letterSpacing = '0.02em';
      break;
    default:
      fontSize = '14px';
      lineHeight = '20px';
      letterSpacing = '0';
  }

  return (
    <Base
      as={tagName || 'p'}
      color={colorCustom}
      fontSize={fontSize}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      {...others}
    >
      {props.children}
    </Base>
  );
};

Text.propTypes = {
  size: PropTypes.number,
  children: PropTypes.node,
  color: PropTypes.string,
  tagName: PropTypes.string,
};

export default Text;
