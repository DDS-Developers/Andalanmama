import styled from 'styled-components';

const InfoWrapper = styled.div`
  padding: 30px 25px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;

  > div {
    margin-top: auto;
  }
`;

export default InfoWrapper;
