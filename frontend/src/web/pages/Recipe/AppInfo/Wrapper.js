import styled from 'styled-components';

const AppInfoWrapper = styled.div`
  position: relative;
  margin-top: 120px;

  @media (max-width: 992px) {
    padding: 0 30px;
  }

  ._info--title {
    margin-bottom: 60px;

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  ._info--text {
    margin-bottom: 60px;
  }

  ._info--action {
    text-align: center;
  }
`;

export default AppInfoWrapper;
