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
    width: 302px;

    @media (max-width: 1199px) {
      width: 230px;
    }
    @media (max-width: 767px) {
      width: 122px;
    }
    @media (max-width: 479px) {
      width: 80px;
    }
  }

  ._deco-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 205px;
    @media (max-width: 1199px) {
      width: 154px;
    }
    @media (max-width: 767px) {
      width: 84px;
    }
    @media (max-width: 479px) {
      width: 56px;
    }
  }
`;

export default Deco;
