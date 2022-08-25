/**
 * components/Paragraph/Wrapper.js
 *
 */
import styled from 'styled-components';
import { View } from 'react-native';

const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  margin-top: ${props => (props.small ? '0px' : '15px')};
  margin-bottom: ${props => (props.small ? '10px' : '20px')};
`;

export default Wrapper;
