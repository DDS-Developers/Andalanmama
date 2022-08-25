import styled from 'styled-components';

const LogoWrapper = styled.div`
  position: relative;
  padding-top: 50px;

  @media (max-width: 480px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  img {
    width: 100%;
    max-width: 400px;
  }
`;

export default LogoWrapper;
