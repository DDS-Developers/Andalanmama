import styled from 'styled-components';

const wrapper = styled.div`
  position: relative;
  width: 40%;
  /* border-left: 1px solid #e3f1fd;
  border-right: 1px solid #e3f1fd; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  /* align-self: flex-end; */

  @media (max-width: 779px) and (min-width: 480px) {
    width: 50%;
    padding: 30px 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    border-left: 0;
    border-right: 0;
    border-top: none;
    border-bottom: none;
    padding: 25px 0;
  }

  ._inner {
    width: 100%;
  }

  ._content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 779px) and (min-width: 480px) {
      flex-direction: column;
    }

    @media (max-width: 480px) {
      display: block;
    }
  }

  p {
    width: 33.333333%;
    margin-bottom: 0;
    text-align: center;

    @media (max-width: 779px) and (min-width: 480px) {
      width: 100%;

      &:first-child {
        margin-bottom: 6px;
      }

      &:last-child {
        margin-top: 30px;
      }
    }

    @media (max-width: 480px) {
      width: 100%;
      text-align: right;
      line-height: 10px;

      &:last-child {
        margin-top: 20px;
      }
    }
  }

  a {
    color: #ffffff;

    &:hover {
      text-decoration: none;
      color: #eeeeee;
    }

    span {
      line-height: 18px;
      display: inline-block;
    }
  }

  ._content {
    img {
      width: 24px;
      display: inline-block;
      margin: 0 8px;
    }
  }
`;

export default wrapper;
