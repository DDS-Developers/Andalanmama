import React from 'react';
import PropTypes from 'prop-types';
import Button from './index';

const ButtonCircle = props => {
  const { children, ...others } = props;
  let { variant, width, height } = props;

  if (!variant) {
    variant = 'primary';
  }

  let bgColor = false;
  let hoverBgColor = false;
  let activeBgColor = false;
  let color = false;
  let hoverColor = false;
  let activeColor = false;
  if (variant === 'secondary') {
    bgColor = '#f3e94a';
    hoverBgColor = '#dad13a';
    activeBgColor = '#dad13a';
    color = '#000000';
    hoverColor = '#000000';
    activeColor = '#000000';
  }

  if (!width) {
    width = '68px';
  }

  if (!height) {
    height = '68px';
  }

  return (
    <Button
      color={color}
      hoverColor={hoverColor}
      activeColor={activeColor}
      bgColor={bgColor}
      hoverBgColor={hoverBgColor}
      activeBgColor={activeBgColor}
      width={width}
      height={height}
      paddingLeft="0px"
      paddingRight="0px"
      borderRadius="100%"
      {...others}
    >
      {props.children}
    </Button>
  );
};

ButtonCircle.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
  variant: PropTypes.oneOf(['', 'primary', 'secondary']),
};

export default ButtonCircle;
