import styled from 'styled-components';

const Item = styled.div`
  position: relative;
  width: 20%;
  padding: 0 4px;
  text-align: center;
  margin-bottom: 8px;

  a {
    display: block;
    position: relative;
    background-color: #ffffff;
    border-radius: 6px;
    overflow: hidden;
    height: 80px;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      border: 5px solid transparent;
      // background-color: rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 480px) {
      height: 140px;
    }
  }

  &.active {
    a {
      &:after {
        border: 5px solid rgba(239, 54, 71, 0.9);
      }
    }
  }

  ._thumbnail {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
  }

  ._label {
    font-size: 13px;
    text-align: center;
    color: #ffffff;
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 12px;

    @media (max-width: 480px) {
      bottom: 40%;
    }
  }

  @media (max-width: 480px) {
    width: 40%;
  }
`;

export default Item;
