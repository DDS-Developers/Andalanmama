import styled from 'styled-components';

const TitleWrapper = styled.div`
  margin: 0 auto 50px;
  text-align: center;
  i {
    color: #ef3648;
    display: inline-block;
    vertical-align: middle;
    margin-right: 12px;
  }

  span {
    display: inline-block;
    vertical-align: middle;
  }
  ._top--title {
    position: relative;
  }
  ._title--leaf {
    position: absolute;
    top: 10px;
    height: 45px;
    margin-left: 10px;
  }
`;

export default TitleWrapper;
