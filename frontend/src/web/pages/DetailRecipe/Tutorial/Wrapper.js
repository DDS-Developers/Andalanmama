import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding-top: 85px;

  ._tutorial--inner {
    padding: 0 80px;

    @media (max-width: 480px) {
      padding: 0 20px;
    }
  }

  .button-arrow-prev {
    position: absolute;
    top: 50%;
    left: -90px;
    transform: translateY(-50%);
    z-index: 10;

    @media (max-width: 992px) {
      left: -70px;
    }

    @media (max-width: 480px) {
      top: auto;
      bottom: -15%;
      left: -10px;
    }

    &.slick-disabled {
      opacity: 0.4;
      cursor: not-allowed;
      // background-color: #888888;

      // &:hover {
      //   background-color: #888888;
      // }

      @media (max-width: 480px) {
        background-color: transparent;
      }
    }
  }

  .button-arrow-next {
    position: absolute;
    top: 50%;
    right: -90px;
    transform: translateY(-50%);
    z-index: 10;

    @media (max-width: 992px) {
      right: -70px;
    }

    @media (max-width: 480px) {
      top: auto;
      bottom: -15%;
      right: -10px;
    }

    &.slick-disabled {
      opacity: 0.4;
      cursor: not-allowed;
      background-color: #888888;

      &:hover {
        background-color: #888888;
      }

      @media (max-width: 480px) {
        background-color: transparent;
      }
    }
  }

  ._indicator {
    margin-top: 35px;

    &--info {
      text-align: center;
      margin-bottom: 20px;
      color: #ef2b3e;
      font-size: 16px;
      line-height: 16px;
      font-weight: bold;
    }
    &--main {
      height: 4px;
      position: relative;
    }

    ._bar {
      height: 4px;
      background-color: #efc9cd;
    }

    ._active {
      width: 33.333333%;
      height: 4px;
      background-color: #ef2b3e;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.4s;
    }
  }
`;

export default Wrapper;
