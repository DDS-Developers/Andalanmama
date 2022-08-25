/**
 * scenes/MyRecipeCreate/FieldIngredients/Wrapper.js
 *
 */
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const ItemWrapper = styled(TouchableOpacity)`
  margin-bottom: 12px;
  position: relative;
  color: #666666;
  background-color: #efefef;
  border-width: 0px;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 80px;
  border-radius: 5px;
`;

export default ItemWrapper;
