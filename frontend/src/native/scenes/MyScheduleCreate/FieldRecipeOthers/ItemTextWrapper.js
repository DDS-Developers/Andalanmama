/**
 * scenes/MyScheduleCreate/FieldRecipeOthers/ItemTextWrapper.js
 *
 */
import styled from 'styled-components';
import Text from '../../../components/Text';

const ItemTextWrapper = styled(Text)`
  color: #000000;
  font-size: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.last ? '#ffffff' : '#bababa')};
  border-style: solid;
  margin-left: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  flex: 1;
`;

export default ItemTextWrapper;
