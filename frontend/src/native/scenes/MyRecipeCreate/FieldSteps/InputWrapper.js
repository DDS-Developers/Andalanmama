/**
 * scenes/MyRecipeCreate/FieldIngredients/Wrapper.js
 *
 */
import styled from 'styled-components';
import { Textarea } from 'native-base';

const InputWrapper = styled(Textarea)`
  color: #666666;
  background-color: transparent;
  border-width: 0px;
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 40px;
  min-height: 80px;
  flex: 1;
`;

export default InputWrapper;
