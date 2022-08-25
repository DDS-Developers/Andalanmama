/**
 * scenes/MyScheduleCreate/FieldRecipeOthers/ListWrapper.js
 *
 */
import styled from 'styled-components';
import { SwipeListView } from 'react-native-swipe-list-view';

const ListWrapper = styled(SwipeListView)`
  width: 100%;
  background-color: #ffffff;
  border-bottom-width: 1px;
  border-bottom-color: #e83249;
  border-style: solid;
  flex: 1;
  flex-direction: column;
`;

export default ListWrapper;
