/**
 * scenes/RecipeSelect/Filter/NavWrapper.js
 *
 */
import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled(({ component, ...props }) => {
  const { active, last, first, ...others } = props;
  return React.cloneElement(component, others);
})`
  flex: 1;
  border-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: ${props => (props.active ? '#e83249' : '#ffffff')};
  border-left-color: #efefef;
  border-right-color: #efefef;
  border-left-width: ${props => (props.last ? '1px' : '0px')};
  border-right-width: ${props => (props.first ? '1px' : '0px')};
`;

export default NavWrapper;
