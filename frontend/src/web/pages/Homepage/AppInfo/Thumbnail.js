import styled from 'styled-components';

const Thumbnail = styled.div`
  position: relative;
  width: 40%;
  margin-right: 20px;
  align-self: flex-start;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto 60px;
  }

  img {
    width: 90%;
  }
`;

export default Thumbnail;
