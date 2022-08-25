import styled from 'styled-components';
import Box from '../Box';

const Wrapper = styled(Box)`
  position: relative;
  ._list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -10px;
    > div {
      margin-bottom: 50px;
    }
  }

  ._action {
    margin-top: 80px;
    text-align: center;
  }
`;

export default Wrapper;
