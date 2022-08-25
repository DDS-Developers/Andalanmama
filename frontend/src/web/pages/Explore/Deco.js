import styled from 'styled-components';

const Deco = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ._deco-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 274px;
    height: 268px;

    @media (max-width: 1200px) {
      width: 220px;
      height: 215px;
    }

    @media (max-width: 768px) {
      width: 160px;
      height: 157px;
    }

    @media (max-width: 600px) {
      left: -30px;
    }

    @media (max-width: 480px) {
      width: 120px;
      height: 118px;
    }
  }

  ._deco-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 448px;

    @media (max-width: 1200px) {
      width: 220px;
      height: 329px;
    }

    @media (max-width: 768px) {
      width: 160px;
      height: 239px;
    }

    @media (max-width: 600px) {
      right: -30px;
    }

    @media (max-width: 480px) {
      width: 120px;
      height: 179px;
    }
  }
`;

export default Deco;
