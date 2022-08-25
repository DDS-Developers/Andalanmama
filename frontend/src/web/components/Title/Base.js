import styled from 'styled-components';
import TextBase from '../Text/Base';

const Base = styled(TextBase)`
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom || '20px'};

  &._size--400 {
    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 36px;
    }
  }

  &._size--800 {
    @media (max-width: 992px) {
      font-size: 70px;
      line-height: 74px;
    }

    @media (max-width: 768px) {
      font-size: 50px;
      line-height: 54px;
    }

    @media (max-width: 480px) {
      font-size: 34px;
      line-height: 38px;
    }
  }
`;

export default Base;
