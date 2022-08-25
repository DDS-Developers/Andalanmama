import styled from 'styled-components';

const FloatingBanner = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
  a {
    display: block;
    width: 300px;
    @media (max-width: 767px) {
      width: 200px;
    }
    img {
      width: 100%;
    }
  }
  ._close-icon {
    background-color: #ef3648;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 0;
    padding: 0;
    svg {
      font-size: 36px;
      color: #ffffff;
      @media (max-width: 767px) {
        font-size: 26px;
      }
    }
    @media (max-width: 767px) {
      width: 40px;
      height: 40px;
      right: 20px;
    }
  }
`;

export default FloatingBanner;
