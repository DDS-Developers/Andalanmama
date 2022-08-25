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
    width: 220px;
    @media (max-width: 1199px) {
      width: 150px;
    }
    @media (max-width: 767px) {
      width: 80px;
    }
  }

  ._deco-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 240px;
    @media (max-width: 1199px) {
      width: 150px;
    }
    @media (max-width: 767px) {
      width: 80px;
    }
  }
`;

export default Deco;
