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
    width: 366px;
    height: 354px;

    @media (max-width: 1200px) {
      width: 280px;
      height: 274px;
    }

    @media (max-width: 992px) {
      width: 220px;
      height: 216px;
    }

    @media (max-width: 768px) {
      width: 146px;
      height: 142px;
    }

    @media (max-width: 580px) {
      width: 120px;
      height: 118px;
    }
  }

  ._deco-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 427px;
    height: 435px;

    @media (max-width: 1200px) {
      width: 328px;
      height: 330px;
    }

    @media (max-width: 992px) {
      width: 260px;
      height: 258px;
    }

    @media (max-width: 768px) {
      width: 172px;
      height: 170px;
    }

    @media (max-width: 580px) {
      width: 144px;
      height: 144px;
    }
  }
`;

export default Deco;
