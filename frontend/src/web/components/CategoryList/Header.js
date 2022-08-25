import styled from 'styled-components';

const Header = styled.div`
  position: relative;
  width: 20%;
  text-align: center;
  margin-bottom: 8px;
  padding: 0 4px;

  @media (max-width: 480px) {
    display: block;
    width: 100%;
  }

  h3 {
    margin: 0;
    color: #ffffff;
    font-weight: normal;
    font-size: 15px;
    height: 80px;
    line-height: 80px;
    text-transform: uppercase;
    background-color: #ef3648;
    border-radius: 6px;

    @media (max-width: 480px) {
      background-color: transparent;
      border-radius: none;
      height: 40px;
      line-height: 40px;
      color: #333;
    }
  }
`;

export default Header;
