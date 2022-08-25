import styled from 'styled-components';

const wrapper = styled.div`
  height: 100vh;
  position: relative;
  text-align: center;

  .wrapper-loading {
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    p {
      margin-top: 20px;
    }
  }
`;

export default wrapper;
