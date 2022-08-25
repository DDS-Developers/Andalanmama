import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 140px;

  @media (max-width: 480px) {
    margin-top: 40px;
  }

  ._title {
    margin-bottom: 40px;

    @media (max-width: 480px) {
      margin-bottom: 0px;
      padding: 30px;
    }
  }
`;

export default Wrapper;
