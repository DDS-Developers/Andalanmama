import styled from 'styled-components';
import Box from '../Box';

const wrapper = styled(Box)`
  position: relative;
  width: ${props => {
    let width = '100%';
    if (props.column === '2') {
      width = '50%';
    } else if (props.column === '3') {
      width = '33.333333%';
    } else if (props.column === '4') {
      width = '25%';
    }
    return width;
  }};
`;

export default wrapper;
