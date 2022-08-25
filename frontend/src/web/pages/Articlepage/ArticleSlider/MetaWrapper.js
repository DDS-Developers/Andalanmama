import styled from 'styled-components';

const MetaWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 0;
    align-items: flex-start;
    > span {
      margin: 0 0 20px 0 !important;
    }
  }
  span {
    &:first-child {
      margin-right: 30px;
    }
  }
`;

export default MetaWrapper;
