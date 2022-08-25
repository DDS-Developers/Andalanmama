import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto 60px;
  width: 535px;
  height: 300px;

  @media (max-width: 600px) {
    width: 100%;
  }

  ._explore--video {
    width: 100%;
    height: 100%;
  }

  ._deco--top {
    position: absolute;
    width: 250px;
    height: 145px;
    top: -180px;
    left: 50%;
    transform: translateX(-50%);
  }

  ._deco--left {
    position: absolute;
    width: 170px;
    height: 140px;
    bottom: -70px;
    left: -300px;
  }

  ._deco--right {
    position: absolute;
    width: 220px;
    height: 188px;
    bottom: -90px;
    right: -320px;
  }
`;

export default Wrapper;
