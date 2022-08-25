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
    width: 430px;
    height: 516px;

    @media (max-width: 1300px) {
      width: 320px;
      height: 390px;
    }

    @media (max-width: 1200px) {
      width: 260px;
      height: 316px;
    }

    @media (max-width: 768px) {
      width: 172px;
      height: 204px;
    }

    @media (max-width: 480px) {
      width: 112px;
      height: 136px;
    }
  }

  ._deco-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 402px;
    height: 452px;

    @media (max-width: 1300px) {
      width: 307px;
      height: 348px;
    }

    @media (max-width: 992px) {
      width: 236px;
      height: 270px;
    }

    @media (max-width: 768px) {
      width: 162px;
      height: 188px;
    }

    @media (max-width: 480px) {
      width: 108px;
      height: 122px;
    }
  }

  ._deco-center-left {
    position: absolute;
    top: 50%;
    left: 0;
    width: 152px;
    height: 446px;
  }

  ._deco-center-right {
    position: absolute;
    top: 50%;
    right: 0;
    width: 80px;
    height: 408px;
  }
`;

export default Deco;
