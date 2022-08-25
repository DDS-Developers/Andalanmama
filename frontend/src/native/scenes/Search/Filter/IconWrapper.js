/**
 * scenes/Search/Filter/Icon.js
 *
 */
import styled from 'styled-components';
import { Icon } from 'native-base';

const IconWrapper = styled(Icon)`
  font-size: 22px;
  color: ${props => props.color || '#000000'};
  margin-left: 20px;
  margin-right: 20px;
`;

export default IconWrapper;
