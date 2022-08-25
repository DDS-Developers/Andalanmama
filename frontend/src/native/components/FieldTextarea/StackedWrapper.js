/**
 * components/FieldText/StackedWrapper.js
 *
 */
import styled from 'styled-components';
import { Textarea } from 'native-base';

const StackedWrapper = styled(Textarea)`
  flex: 1;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
  border-style: solid;
  font-size: 14px;
  padding: 0;
  margin-top: 0;
  height: 80px;
`;

export default StackedWrapper;
