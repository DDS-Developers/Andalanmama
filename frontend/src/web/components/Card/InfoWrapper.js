import styled from 'styled-components';

const InfoWrapper = styled.div`
  margin-top: 20px;
  padding: 5px 25px;
  border-left: 1px solid #707070;

  @media (max-width: 480px) {
    border-left: none;
  }
`;

export default InfoWrapper;
