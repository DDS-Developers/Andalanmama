/**
 * scenes/MyRecipe/ButtonCreateWrapper.js
 *
 */
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const ButtonCreateWrapper = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 15px;
  bottom: 25px;
  z-index: 2;
`;

export default ButtonCreateWrapper;
