import styled from 'styled-components';
import InfoWrapper from '../../../components/Card/InfoWrapper';
import MetaWrapper from '../../../components/Card/MetaWrapper';
import CardWrapper from '../../../components/Card/Wrapper';
import ListWrapper from '../../../components/CardList/Wrapper';
const Wrapper = styled.div`
  margin-top: 60px;
  @media (max-width: 992px) {
    padding: 0 30px;
    ._list {
      margin: 0 !important;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  & ${InfoWrapper} {
    padding: 5px 15px;
  }

  & ${MetaWrapper} {
    @media (max-width: 991px) {
      flex-direction: column;
      align-items: flex-start;
    }

    > span:first-child {
      @media (max-width: 1199px) {
        margin-right: 10px;
      }
      @media (max-width: 991px) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }

  & ${ListWrapper} {
    @media (max-width: 767px) {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
    }
  }

  & ${CardWrapper} {
    @media (max-width: 991px) {
      width: 50%;
    }
    @media (max-width: 767px) {
      width: 100%;
      padding: 0;
      margin-bottom: 20px;
    }
  }

  ._pagination {
    margin: 40px 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    li.page-item {
      list-style: none;
      float: left;

      a {
        border: 0 none;
        background-color: transparent;
        outline: none;
        display: inline-block;
        vertical-align: middle;
        padding: 0 10px;
        margin: 0 10px;
        font-size: 18px;
        line-height: 20px;
        color: #000;

        &.active,
        &:hover {
          color: #ef3648;
        }

        @media (max-width: 480px) {
          padding: 0 10px;
          margin: 0 0px;
        }
      }
    }

    li.page-item.active {
      a {
        color: #ef3648;
      }
    }
  }
`;

export default Wrapper;
