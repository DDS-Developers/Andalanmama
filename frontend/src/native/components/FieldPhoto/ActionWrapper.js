/**
 * components/FieldPhoto/ActionWrapper.js
 *
 */
import styled from 'styled-components';
import { View } from 'native-base';

const ActionWrapper = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-left: 15px;
  padding-right: 15px;
`;

export default ActionWrapper;
