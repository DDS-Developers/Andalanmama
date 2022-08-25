import styled from 'styled-components';
import Box from '../Box';

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ._inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    input {
      @media (max-width: 480px) {
        width: calc(100% - 105px);
      }
    }

    button {
      @media (max-width: 480px) {
        padding-left: 30px;
        padding-right: 30px;
      }
    }
  }
`;

export default Wrapper;
