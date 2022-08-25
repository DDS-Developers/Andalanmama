/**
 * scenes/MyRecipeCreate/FieldTags/TagWrapper.js
 *
 */
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const TagWrapper = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 11px;
  color: #333333;
  border-color: #333333;
  border-style: solid;
  border-width: 1px;
  margin-right: 10px;
  margin-bottom: 15px;
  border-radius: 20px;
`;

export default TagWrapper;
