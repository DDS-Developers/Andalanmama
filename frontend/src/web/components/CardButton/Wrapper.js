import styled from 'styled-components';
import Box from '../Box';

const wrapper = styled(Box)`
  position: relative;
  width: ${props => {
    let width = '100%';
    if (props.column === '2') {
      width = '50%';
    } else if (props.column === '3') {
      width = '33.333333%';
    } else if (props.column === '4') {
      width = '25%';
    }
    return width;
  }};
  height: 154px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  ._button-link {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border: 0;
    outline: none;
    border-radius: 5px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
    height: 154px;
    width: 100%;
    padding: 15px;
    color: #000000;
    text-decoration: none;
  }
`;

export default wrapper;
