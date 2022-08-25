import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
  span {
    color: #ffffff;

    &:first-child {
      margin-right: 30px;
      @media (max-width: 767px) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }
`;

export default InfoWrapper;
