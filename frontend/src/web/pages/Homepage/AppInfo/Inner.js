import styled from 'styled-components';

const Inner = styled.div`
  position: relative;
  display: flex;
  margin-top: 120px;
  padding: 0 60px;

  @media (max-width: 992px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 0 30px;
  }
`;

export default Inner;
