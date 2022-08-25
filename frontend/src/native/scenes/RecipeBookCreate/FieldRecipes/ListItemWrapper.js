/**
 * scenes/RecipeBookCreate/FieldRecipes/ItemWrapper.js
 *
 */
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const ItemWrapper = styled(TouchableOpacity)`
  background-color: #ffffff;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 15px;
  padding-right: 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export default ItemWrapper;
