/**
 * components/Loader/Wrapper.js
 *
 */
import styled from 'styled-components';
import { View } from 'native-base';

const Wrapper = styled(View)`
  background-color: #efefef;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

export default Wrapper;
