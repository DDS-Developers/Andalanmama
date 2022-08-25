/**
 * components/Dialog/Wrapper.js
 *
 */
import styled from 'styled-components';
import { View } from 'react-native';

const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(38, 38, 38, 0.7);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export default Wrapper;
