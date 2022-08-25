import styled from 'styled-components';
import tomatto from './tomatto.png';
import green from './green.png';

const SlideWrapper = styled.div`
  position: relative;
  padding: 0 10px;
  z-index: 1;
  @media (max-width: 767px) {
    padding: 0;
  }
  ._inner {
    display: flex;
    align-items: center;
    margin: 0 -20px;
    @media (max-width: 767px) {
      flex-direction: column-reverse;
      margin: 0;
    }
    ._info,
    ._image {
      width: 50%;
      padding: 20px;
      @media (max-width: 767px) {
        width: 100%;
        padding: 20px 0;
      }
    }
    ._image {
      position: relative;
      padding-right: 50px;
      @media (max-width: 1199px) {
        padding-right: 15px;
        padding-left: 100px;
      }
      @media (max-width: 767px) {
        padding: 0;
        margin-bottom: 20px;
      }
      img {
        max-width: 400px;
        max-height: 400px;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: contain;
        margin-left: auto;
        object-position: center right;

        @media (max-width: 480px) {
          max-width: 250px;
          max-height: 250px;
          margin: 0 auto;
        }
      }
      &:before {
        display: none;
        content: '';
        background: url(${tomatto});
        width: 60px;
        height: 60px;
        background-size: contain;
        position: absolute;
        left: -60px;
        bottom: 70px;
        z-index: -1;
        @media (max-width: 767px) {
          left: 0;
          bottom: -30px;
        }
      }
      &:after {
        display: none;
        content: '';
        background: url(${green});
        width: 100px;
        height: 100px;
        background-size: contain;
        position: absolute;
        left: 20px;
        top: 30%;
        z-index: -1;
        @media (max-width: 767px) {
          left: auto;
          right: 0;
          top: -50px;
        }
      }
    }
    .read-more {
      line-height: 48px;
    }
    ._info--title {
      margin-bottom: 30px;
      font-weight: bold;
    }
  }
`;

export default SlideWrapper;
