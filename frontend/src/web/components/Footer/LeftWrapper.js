import styled from 'styled-components';

const LeftWrapper = styled.div`
  position: relative;
  width: 30%;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 5px;
  text-align: center;

  @media (max-width: 779px) and (min-width: 480px) {
    width: 25%;
    align-self: center;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 120px;
    align-items: flex-end;
  }

  img {
    width: 180px;
    display: inline-block;
    margin: 0 10px;

    @media (max-width: 992px) {
      width: 120px;
    }

    @media (max-width: 480px) {
      width: 120px;
    }
  }
`;

export default LeftWrapper;
