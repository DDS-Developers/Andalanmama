import React from 'react';
import styled from 'styled-components';

const Base = styled(({ component, ...props }) => {
  const {
    color,
    iconPosition,
    textDecoration,
    hoverColor,
    hoverTextDecoration,
    activeColor,
    activeTextDecoration,
    ...others
  } = props;
  return React.cloneElement(component, others);
})`
  text-decoration: ${props => props.textDecoration || 'none'};
  color: ${props => props.color || '#ef3648'};
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.iconPosition === 'right' ? 'row-reverse' : 'row')};

  &:hover {
    text-decoration: ${props => props.hoverTextDecoration || 'none'};
    color: ${props => props.hoverColor || '#bd202f'};
  }

  &:active {
    text-decoration: ${props => props.activeTextDecoration || 'none'};
    color: ${props => props.activeColor || '#bd202f'};
  }
`;

export default Base;
