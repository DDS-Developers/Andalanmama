/**
 * scenes/RecipeBookItems/ButtonAddWrapper.js
 *
 */
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const ButtonAddWrapper = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 99;
`;

export default ButtonAddWrapper;
