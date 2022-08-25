/**
 * scenes/Search/List/ItemWrapper.js
 *
 */
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const ItemWrapper = styled(TouchableOpacity)`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`;

export default ItemWrapper;
