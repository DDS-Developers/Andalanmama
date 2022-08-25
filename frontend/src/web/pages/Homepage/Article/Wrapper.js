import styled from 'styled-components';
import InfoWrapper from '../../../components/Card/InfoWrapper';
import MetaWrapper from '../../../components/Card/MetaWrapper';
import CardWrapper from '../../../components/Card/Wrapper';
import ListWrapper from '../../../components/CardList/Wrapper';

const Wrapper = styled.div`
  margin-top: 120px;

  @media (max-width: 992px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  & ${InfoWrapper} {
    padding: 5px 15px;
  }

  & ${MetaWrapper} {
    @media (max-width: 992px) {
      // flex-direction: column;
      align-items: flex-start;
    }

    > span:first-child {
      @media (max-width: 1200px) {
        margin-right: 10px;
      }
      @media (max-width: 992px) {
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
