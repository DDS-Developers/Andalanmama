import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import Base from './Base';

const Title = props => {
  const { children, size, tagName, color, className, ...others } = props;
  let sizeCustom = size;
  let colorCustom = color;

  if (!sizeCustom) {
    sizeCustom = 300;
  }

  if (!colorCustom) {
    colorCustom = '#000000';
  }
  if (colorCustom === 'primary') {
    colorCustom = '#ef3648';
  }

  let fontSize;
  let lineHeight;
  let letterSpacing;
  let fontWeight;

  switch (sizeCustom) {
    case 300:
      fontSize = '30px';
      lineHeight = '34px';
      letterSpacing = '0.01em';
      break;
    case 400:
      fontSize = '42px';
      lineHeight = '46px';
      fontWeight = '600';
      letterSpacing = '0.01em';
      break;
    case 500:
      fontSize = '58px';
      lineHeight = '62px';
      fontWeight = '600';
      letterSpacing = '0.01em';
      break;
    case 800:
      fontSize = '80px';
      lineHeight = '84px';
      fontWeight = '600';
      break;
    default:
      fontSize = '22px';
      lineHeight = '24px';
      letterSpacing = '0';
      fontWeight = 'normal';
  }

  return (
    <Base
      as={tagName || 'p'}
      color={colorCustom}
      fontSize={fontSize}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      fontWeight={fontWeight}
      className={ClassNames(className, `_size--${sizeCustom}`)}
      {...others}
    >
      {props.children}
    </Base>
  );
};

Title.propTypes = {
  size: PropTypes.number,
  children: PropTypes.node,
  color: PropTypes.string,
  tagName: PropTypes.string,
};

export default Title;
