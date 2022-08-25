import styled from 'styled-components';
import Box from '../Box';

const BoxBorder = styled(Box)`
  border: ${props => props.border};
  border-left: ${props => props.borderLeft};
  border-right: ${props => props.borderRight};
  border-top: ${props => props.borderTop};
  border-bottom: ${props => props.borderBottom};
  box-shadow: ${props => props.boxShadow};
`;

export default BoxBorder;
