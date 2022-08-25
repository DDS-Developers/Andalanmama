/**
 * components/FieldText/InputWrapper.js
 *
 */
import styled from 'styled-components';
import { Textarea } from 'native-base';

const InputWrapper = styled(Textarea)`
  flex: 1;
  width: 100%;
  color: #333333;
  background-color: #ffffff;
  border-width: 1px;
  border-color: #cccccc;
  border-style: solid;
  font-size: 14px;
  padding: 10px 12px;
  border-radius: 6px;
  min-height: 80px;
`;

export default InputWrapper;
