import styled from 'styled-components';

const Info = styled.div`
  position: relative;
  width: 60%;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;

    > div {
      text-align: center;
    }
  }

  img {
    width: 100%;
  }
`;

export default Info;
