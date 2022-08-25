import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin-top: 140px;
  padding-top: 150px;

  @media (max-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  ._info {
    max-width: 540px;
    margin: 0 auto;
  }

  ._bottom {
    margin: 50px auto 0;
    width: 150px;

    img {
      width: 100%;
    }
  }
`;

export default Wrapper;
