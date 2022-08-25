import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  ._deco-left {
    position: absolute;
    top: 50%;
    left: 0;
    width: 152px;
    height: 446px;
    transform: translateY(-50%);

    @media (max-width: 768px) {
      top: 20%;
      left: -10%;
    }
  }

  ._deco-right {
    position: absolute;
    top: 50%;
    right: 0;
    width: 122px;
    height: 468px;
    transform: translateY(-50%);

    @media (max-width: 768px) {
      top: 20%;
    }
  }
`;

export default Wrapper;
