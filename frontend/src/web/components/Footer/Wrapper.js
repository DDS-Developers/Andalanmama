import styled from 'styled-components';

const wrapper = styled.div`
  position: relative;
  background-color: #ef3648;
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin-top: 120px;
  z-index: 11;

  @media (max-width: 991px) {
    margin-top: 40px;
  }

  @media (max-width: 779px) {
    height: auto;
  }

  @media (max-width: 480px) {
    // flex-direction: column;
    // justify-content: center;
    // margin-top: 60px;
  }
`;

export default wrapper;
