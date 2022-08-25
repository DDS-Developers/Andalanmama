/**
 * components/ButtonPrimary/Wrapper.js
 *
 */
import styled from 'styled-components';
import { Button } from 'native-base';

const Wrapper = styled(Button)`
  background-color: ${props => (props.disabled ? '#999999' : '#e83249')};
  color: ${props => (props.disabled ? '#555555' : '#ffffff')};
  padding: 12px 30px;
  border-radius: 6px;
  height: auto;
  align-items: center;
`;

export default Wrapper;
