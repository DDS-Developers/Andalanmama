/**
 * components/Paragraph/Wrapper.js
 *
 */
import styled from 'styled-components';
import { View } from 'react-native';

const Wrapper = styled(View)`
  text-align: ${props => props.textAlign || 'center'};
  margin-bottom: ${props => props.marginBottom || '15px'};
`;

export default Wrapper;
