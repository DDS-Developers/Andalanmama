import styled from 'styled-components';

const NavItemWrapper = styled.div`
  position: relative;

  ._nav--inner {
    height: 148px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);

    @media (max-width: 992px) {
      height: 158px;
    }
  }

  ._nav--top {
    padding: 15px;
    border-bottom: 1px solid #e9e9e9;
    cursor: pointer;

    @media (max-width: 992px) {
      height: 80px;
    }

    @media (max-width: 768px) {
      height: auto;
    }
    span {
      display: block;
    }
    button {
      border: 0;
      display: block;
      background: transparent;
      outline: none;
      padding: 0;
      width: 100%;
      text-align: left;

      span {
        display: block;
      }
    }
  }

  ._nav--images {
    padding: 15px;
    display: flex;
    align-items: center;

    button {
      border: 0;
      display: block;
      background: transparent;
      outline: none;
      padding: 0;
      width: 32px;
      height: 52px;
      margin-left: auto;

      i {
        color: #ef3648;
      }
    }
  }

  ._images {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 0;
      display: inline-block;
      vertical-align: middle;
      margin-right: 12px;

      @media (max-width: 992px) {
        margin-right: 4px;
      }

      @media (max-width: 768px) {
        margin-right: 8px;
      }

      img {
        width: 52px;
        border-radius: 4px;

        @media (max-width: 1200px) {
          width: 42px;
        }

        @media (max-width: 992px) {
          width: 34px;
        }

        @media (max-width: 768px) {
          width: 42px;
        }
      }
    }
  }
`;

export default NavItemWrapper;
