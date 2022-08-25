/**
 * scenes/RecipeBook/Filter/Icon.js
 *
 */
import styled from 'styled-components';
import Icon from './IconWrapper';

const IconBoxWrapper = styled(Icon)`
  font-size: 14px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.color || '#000000'};
`;

export default IconBoxWrapper;
