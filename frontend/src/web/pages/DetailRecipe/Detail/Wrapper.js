import styled from 'styled-components';

const DetailWrapper = styled.div`
  position: relative;
  margin-top: -50px;

  @media (max-width: 992px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }

  ._inner {
    margin: 0 -50px;
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
      margin: 0 -30px;
    }

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      margin: 0 auto;
      max-width: 480px;
    }
  }

  ._info,
  ._thumbnail {
    width: 50%;
    padding: 50px;

    @media (max-width: 992px) {
      padding: 30px;
    }

    @media (max-width: 768px) {
      padding: 0;
      width: 100%;
    }
  }

  ._thumbnail {
    position: relative;

    @media (max-width: 768px) {
      margin-bottom: 50px;
    }

    img {
      width: 100%;
      display: block;
      border-radius: 5px;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
    }

    &--main {
      position: relative;
    }

    &--info {
      position: absolute;
      right: 0;
      bottom: -20px;
      width: 70%;
      z-index: 2;

      @media (max-width: 480px) {
        width: 95%;
      }
    }

    &--icon {
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      cursor: pointer;

      i,
      svg {
        opacity: 1;
        margin: 0 auto;
        color: #ffffff;
        fill: #ffffff;
      }
    }
  }
`;

export default DetailWrapper;
