import React from 'react';
import styled from 'styled-components';

const Base = styled(({ component, ...props }) => {
  const {
    color,
    height,
    width,
    bgColor,
    marginRight,
    marginLeft,
    marginTop,
    marginBottom,
    paddingLeft,
    paddingRight,
    borderRadius,
    boxShadow,
    lineHeight,
    hoverColor,
    hoverBgColor,
    activeColor,
    activeBgColor,
    ...others
  } = props;
  return React.cloneElement(component, others);
})`
  display: inline-block;
  text-decoration: none;
  border: none;
  outline: none !important;
  font-size: 14px;
  text-transform: uppercase;
  transition: all 0.6s;
  vertical-align: middle;
  height: ${props => props.height || '48px'};
  line-height: ${props => props.height || '48px'};
  width: ${props => props.width};
  color: ${props => props.color || '#ffffff'};
  background-color: ${props => props.bgColor || '#ef3648'};
  margin: ${props => props.margin};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  padding-left: ${props => props.paddingLeft || '50px'};
  padding-right: ${props => props.paddingRight || '50px'};
  margin-right: ${props => props.marginRight};
  border-radius: ${props => props.borderRadius};
  box-shadow: ${props => props.boxShadow};

  &:hover {
    text-decoration: none;
    color: ${props => props.hoverColor || '#ffffff'};
    background-color: ${props => props.hoverBgColor || '#bd202f'};
  }

  &:active {
    text-decoration: none;
    color: ${props => props.activeColor || '#ffffff'};
    background-color: ${props => props.activeBgColor || '#bd202f'};
  }
`;

export default Base;
