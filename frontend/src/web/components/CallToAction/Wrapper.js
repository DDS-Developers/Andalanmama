import styled from 'styled-components';
import Box from '../Box';

const Wrapper = styled(Box)`
  position: relative;
  text-align: ${props => props.align || 'left'};

  ._action {
    img {
      width: 100%;
    }
  }
`;

export default Wrapper;
