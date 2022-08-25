import styled from 'styled-components';
import Wrapper from './Wrapper';

const InfoWrapper = styled.div`
  padding: 30px 25px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: all 0.6s;
  transform: translateY(100%);
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: linear-gradient(transparent, #ef3648);
  }
  > div {
    margin-top: auto;
    position: relative;
  }

  ${Wrapper}:hover & {
    transform: translateY(0);
  }
`;

export default InfoWrapper;
