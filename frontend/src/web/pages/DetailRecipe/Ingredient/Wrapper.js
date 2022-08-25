import styled from 'styled-components';
import Bg from './Bg.png';

const Wrapper = styled.div`
  position: relative;
  margin-top: 80px;
  padding: 85px 0;
  background: url(${Bg}) no-repeat 0 0;
  background-size: cover;

  @media (max-width: 480px) {
    padding: 0px 0;
  }

  ._ingredient--list {
    background-color: #ffffff;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
    padding: 50px 80px 80px;

    @media (max-width: 480px) {
      padding: 30px 30px;
    }

    ._title {
      padding-bottom: 30px;
      margin-bottom: 30px;
      border-bottom: 1px solid #b1b1b1;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        padding: 0;
        margin-bottom: 15px;

        &._group {
          margin-top: 30px;
          position: relative;
          text-transform: uppercase;
          color: #999999;

          &:after {
            content: '';
            height: 2px;
            background-color: #dddddd;
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
          }

          span {
            background-color: #ffffff;
            position: relative;
            z-index: 1;
            padding-right: 20px;
          }
        }
      }
    }
  }

  ._ingredient--action {
    margin-top: 85px;
    text-align: center;

    button {
      border-radius: 50px;
    }
  }
`;

export default Wrapper;
