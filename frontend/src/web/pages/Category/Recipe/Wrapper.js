import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 140px;
  @media (max-width: 991px) {
    margin-top: 80px;
  }
  ._title {
    margin-bottom: 40px;
  }
  ._list {
    margin: 0;
    > div {
      @media (max-width: 991px) {
        width: 50% !important;
      }
      @media (max-width: 767px) {
        width: 100% !important;
        padding: 30px 30px 0;
        margin-bottom: 0;
      }
    }
  }
`;

export default Wrapper;
