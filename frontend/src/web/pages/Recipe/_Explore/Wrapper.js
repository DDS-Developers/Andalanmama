import styled from 'styled-components';
import CardWrapper from '../../../components/CardThumbnail/Wrapper';

const Wrapper = styled.div`
  margin-top: 120px;

  @media (max-width: 992px) {
    padding: 0 30px;
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
