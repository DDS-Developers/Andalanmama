/**
 * scenes/RecipeBookCreate/FieldRecipes/RemoveWrapper.js
 *
 */
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const RemoveWrapper = styled(TouchableOpacity)`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #e83249;
  color: #ffffff;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export default RemoveWrapper;
