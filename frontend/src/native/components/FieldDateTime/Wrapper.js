/**
 * components/FieldText/Wrapper.js
 *
 */
import styled from 'styled-components';
import { Item } from 'native-base';

const Wrapper = styled(Item)`
  margin-bottom: ${props => props.marginBottom || '8px'};
  border-color: transparent;
  margin-left: 0;
  flex: 1;
`;

export default Wrapper;
