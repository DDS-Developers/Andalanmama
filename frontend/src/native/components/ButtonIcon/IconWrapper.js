/**
 * components/ButtonIcon/IconWrapper.js
 *
 */
import styled from 'styled-components';
import { Icon } from 'native-base';

const IconWrapper = styled(Icon)`
  color: ${props => props.color || '#e83249'};
  font-size: ${props => props.fontSize || 28};
`;

export default IconWrapper;
