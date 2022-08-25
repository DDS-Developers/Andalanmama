/**
 * components/FieldPhoto/Empty.js
 *
 */
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const Empty = styled(TouchableOpacity)`
  width: 140px;
  height: 140px;
  background-color: #dddddd;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`;

export default Empty;
