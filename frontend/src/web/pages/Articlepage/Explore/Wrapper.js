import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 60px;

  ._recipe--main {
    margin-top: 30px;
  }
  ._thumbnail--full {
    height: 500px;
    @media (max-width: 767px) {
      height: calc(100vw - 60px);
    }
  }
`;

export default Wrapper;
