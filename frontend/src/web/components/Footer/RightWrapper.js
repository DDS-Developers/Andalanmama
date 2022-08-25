import styled from 'styled-components';

const RightWrapper = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  @media (max-width: 779px) and (min-width: 480px) {
    width: 25%;
  }

  @media (max-width: 480px) {
    // display: none;
    width: 100%;
    padding: 20px 0 30px;

    span {
      display: none;
    }

    button {
      height: 30px;
      line-height: 30px;
      width: 30px;
    }
  }

  ._inner {
    @media (max-width: 779px) and (min-width: 480px) {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  span {
    margin-right: 30px;

    @media (max-width: 992px) and (min-width: 778px) {
      margin-right: 15px;
    }

    @media (max-width: 779px) and (min-width: 480px) {
      display: block;
      margin-right: 0;
      margin-top: 15px;
    }
  }

  button {
    position: relative;
    top: -20px;

    @media (max-width: 779px) {
      top: 0;
    }
  }

  button i {
    position: relative;
    top: -2px;
  }
`;

export default RightWrapper;
