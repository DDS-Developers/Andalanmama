import styled from 'styled-components';

const Deco = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ._deco-left {
    position: absolute;
    width: 186px;
    height: 182px;

    @media (max-width: 1200px) {
      width: 138px;
      height: 140px;
    }

    @media (max-width: 993px) {
      width: 114px;
      height: 112px;
    }

    @media (max-width: 580px) {
      width: 74px;
      height: 74px;
    }
  }

  ._deco-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 180px;
    height: 192px;

    @media (max-width: 1200px) {
      width: 136px;
      height: 150px;
    }

    @media (max-width: 992px) {
      width: 105px;
      height: 120px;
    }

    @media (max-width: 580px) {
      width: 72px;
      height: 76px;
    }
  }
`;

export default Deco;
