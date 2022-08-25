/**
 * components/FieldText/Wrapper.js
 *
 */
import styled from 'styled-components';
import { Item } from 'native-base';

const Wrapper = styled(Item)`
  border-radius: 6px;
  margin-bottom: ${props => props.marginBottom || '8px'};
  border-color: transparent;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default Wrapper;
