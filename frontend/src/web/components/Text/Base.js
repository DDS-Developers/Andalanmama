import styled from 'styled-components';
import Box from '../Box';

const Base = styled(Box)`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  line-height: ${props => props.lineHeight};
  letter-spacing: ${props => props.letterSpacing};
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
`;

export default Base;
