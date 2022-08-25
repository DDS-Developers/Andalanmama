import styled from 'styled-components';

const NavWrapper = styled.div`
  position: relative;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 0;
      display: inline-block;
      margin: 0 30px;

      @media (max-width: 480px) {
        margin: 0 20px;
      }
    }

    a {
      display: inline-block;
      transition: all 0.6s;
      position: relative;
      padding-top: 8px;
      padding-bottom: 8px;
      text-decoration: none;
      color: #000000;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        background-color: #ef3648;
        transition: all 0.6s;
        width: 0;
      }

      &:hover,
      &.active {
        &:after {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 480px) {
    background-color: #ef3648;
    max-width: 80%;
    margin: 0 auto;
    border-radius: 8px;

    ul {
      li {
        a {
          color: #fff;

          &:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 4px;
            background-color: #fdff03;
            transition: all 0.6s;
            width: 0;
          }

          &:hover,
          &.active {
            color: #fdff03;
            &:after {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

export default NavWrapper;
