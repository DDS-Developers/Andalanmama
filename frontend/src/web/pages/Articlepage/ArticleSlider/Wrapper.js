import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin-top: -20px;
  padding: 0 30px;
  @media (max-width: 767px) {
    margin-top: -30px;
  }

  /* ._indicator {
    height: 4px;
    position: relative;
    margin-top: 20px;

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
    }
  } */
  .slick-dots {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex !important;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -45px;
    width: 100%;
    left: 0;
    li {
      flex: 1;
      button {
        display: block;
        width: 100%;
        border: none;
        height: 4px;
        font-size: 0;
        background-color: #efc9cd;
        outline: none;
      }
      &.slick-active {
        button {
          background-color: #ef2b3e;
        }
      }
    }
  }
  ._slider--thumb {
    margin: 30px -8px;
    .slick-slide {
      padding: 8px;
      @media (max-width: 767px) {
        button {
          height: auto;
        }
      }
    }
    .image-wrapper {
      flex: 0 0 100px;
    }
    .info-wrapper {
      flex: 1;
      @media (max-width: 767px) {
        padding-right: 10px;
      }
      p {
        text-align: left;
      }
    }
  }
  ._icon--expand {
    text-align: center;
    opacity: 0.5;
  }

  ._slider--inner {
    position: relative;

    .button-arrow-next {
      position: absolute;
      top: 22%;
      right: -10px;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      z-index: 10;
    }

    .button-arrow-prev {
      position: absolute;
      top: 22%;
      left: -10px;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      z-index: 10;
    }
  }
`;

export default Wrapper;
