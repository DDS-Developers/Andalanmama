import styled from 'styled-components';
import InfoWrapper from '../../../components/Card/InfoWrapper';
import MetaWrapper from '../../../components/Card/MetaWrapper';
import CardWrapper from '../../../components/Card/Wrapper';
import ListWrapper from '../../../components/CardList/Wrapper';

const Wrapper = styled.div`
  @media (max-width: 992px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    padding-top: 60px;
    border-top: 1px solid #999999;
  }

  ._section--article--inner {
    margin-top: 30px;
    padding-top: 100px;
    border-top: 1px solid #999999;
    padding-bottom: 80px;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
      padding-top: 0;
      margin-top: 0;
      border-top: none;
      padding-bottom: 40px;
    }
  }

  & ${InfoWrapper} {
    padding: 5px 15px;
  }

  & ${MetaWrapper} {
    @media (max-width: 992px) {
      flex-direction: column;
      align-items: flex-start;
    }

    > span:first-child {
      @media (max-width: 1200px) {
        margin-right: 10px;
      }
      @media (max-width: 992px) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }

  & ${ListWrapper} {
    @media (max-width: 768px) {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
    }
  }

  & ${CardWrapper} {
    @media (max-width: 768px) {
      width: 100%;
      padding: 0;
      margin-bottom: 20px;
    }
  }
`;

export default Wrapper;
