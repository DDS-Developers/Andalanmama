import styled from 'styled-components';
import CardWrapper from '../../../components/CardThumbnail/Wrapper';

const Wrapper = styled.div`
  margin-top: 80px;

  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  ._recipe--main {
    margin-top: 30px;
  }

  & ${CardWrapper} {
    @media (max-width: 768px) {
      width: 50%;
    }
    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;

export default Wrapper;
