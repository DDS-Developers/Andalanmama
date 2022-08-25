import styled from 'styled-components';
import Text from '../Text';

const Base = styled(Text)`
  text-decoration: ${props => props.textDecoration || 'none'};
  color: ${props => props.color || '#ef3648'};

  &:hover {
    text-decoration: ${props => props.hoverTextDecoration || 'none'};
    color: ${props => props.hoverColor || '#bd202f'};
  }

  &:active {
    text-decoration: ${props => props.activeTextDecoration || 'none'};
    color: ${props => props.activeColor || '#bd202f'};
  }
`;

export default Base;
