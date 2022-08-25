/**
 * components/Header/Wrapper.js
 *
 */
import styled from 'styled-components';
import { Header } from 'native-base';

const Wrapper = styled(Header)`
  background-color: ${props => props.backgroundColor || '#ffffff'};
  position: ${props => props.position || 'relative'};
`;

export default Wrapper;
