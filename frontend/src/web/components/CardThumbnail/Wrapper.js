/* eslint-disable indent */
import styled from 'styled-components';
import Box from '../Box';

const wrapper = styled(Box)`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  width: ${props => {
    let width = 'auto';
    if (props.column === '2') {
      width = '50%';
    } else if (props.column === '3') {
      width = '33.333333%';
    } else if (props.column === '4') {
      width = '25%';
    }
    return width;
  }};

  &._open .card-info {
    transform: translateY(0);
  }
`;

export default wrapper;
