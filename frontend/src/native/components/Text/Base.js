/**
 * components/Paragraph/Base.js
 *
 */
import styled from 'styled-components';
import { Text } from 'react-native';

const Base = styled(Text)`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  letter-spacing: ${props => props.letterSpacing || 0};
  font-style: ${props => props.fontStyle || 'normal'};
  text-align: ${props => props.textAlign || 'left'};
`;

export default Base;
