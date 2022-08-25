import styled from 'styled-components';
import CardWrapper from '../../../components/CardButton/Wrapper';
import CardInfoWrapper from '../../../components/CardButton/InfoWrapper';

const MainWrapper = styled.div`
  position: relative;
  margin-top: 50px;
  > .slick-slider {
    position: static;
    .slick-current {
      z-index: 9;
    }
  }
  ._player {
    display: flex;
    align-items: center;
    height: 480px;
    margin-bottom: 15px;

    @media (max-width: 992px) {
      display: block;
      height: auto;
    }

    ._player--main {
      width: 70%;
      height: 480px;

      @media (max-width: 992px) {
        width: 100%;
      }
      @media (max-width: 767px) {
        height: auto;
      }
      h3 {
        width: 50%;
        @media (max-width: 992px) {
          width: 100%;
        }
      }
      span {
        font-size: 16px;
      }
      i {
        font-size: 22px;
      }
    }

    ._player--video {
      width: 100%;
      height: 100%;
    }

    ._player--nav {
      width: 30%;
      padding-left: 15px;

      @media (max-width: 992px) {
        width: auto;
        padding-left: 0;
        display: flex;
        margin: 20px -10px 0;
      }

      @media (max-width: 768px) {
        display: block;
        margin: 20px 0 0;
      }

      & ${CardWrapper} {
        @media (max-width: 992px) {
          width: 33.333333%;
          padding: 0 10px;
        }

        @media (max-width: 768px) {
          width: 100%;
          padding: 0;
          margin-bottom: 10px;

          > button {
            flex-direction: row-reverse;
            justify-content: flex-end;
          }

          & ${CardInfoWrapper} {
            padding-left: 25px;
            padding-right: 0;
          }
        }
      }
    }
  }

  ._collections {
    margin-top: 45px;
    padding-top: 30px;
    border-top: 1px solid #999999;
  }

  ._collections--nav {
    margin: 0 -10px;
    position: relative;

    @media (max-width: 768px) {
      display: block;
    }
    .slick-slide {
      padding: 10px;
    }

    .button-arrow-next {
      position: absolute;
      bottom: -25%;
      right: 0px;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      z-index: 10;
    }

    .button-arrow-prev {
      position: absolute;
      bottom: -25%;
      left: 0px;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      z-index: 10;
    }

    .slider-index {
      display: none;
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);

      @media (max-width: 480px) {
        display: block;
      }
    }
  }
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
  ._nav--item {
    .image-wrapper {
      position: relative;
      border-radius: 5px;
      overflow: hidden;
      /* &:before {
        content: '';
        background: #ef3648;
        background: linear-gradient(transparent, #ef3648);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      } */
      img {
        border-radius: 5px;
      }
    }
  }
`;

export default MainWrapper;
