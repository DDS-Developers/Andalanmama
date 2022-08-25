import styled from 'styled-components';
import Box from '../Box';

const Wrapper = styled(Box)`
  position: relative;
  max-width: 680px;
  margin: 30px auto 0;

  ._inner {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -4px;

    @media (max-width: 480px) {
      display: block;
    }
  }
`;

export default Wrapper;
