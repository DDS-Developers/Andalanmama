import styled from 'styled-components';

const TopWrapper = styled.div`
  text-align: center;

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  ._top--title {
    margin-bottom: 40px;
    margin-top: -20px;
  }

  ._top--info {
    margin: 30px auto 0;
    max-width: 420px;
  }
`;

export default TopWrapper;
