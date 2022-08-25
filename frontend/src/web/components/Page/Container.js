import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 1200px;

  @media (max-width: 1300px) {
    width: 1100px;
  }

  @media (max-width: 1200px) {
    width: 980px;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export default Container;
