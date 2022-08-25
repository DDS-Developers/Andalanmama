/**
 * components/ListRecipe/ListWrapper.js
 *
 */
import styled from 'styled-components';
import { FlatList } from 'react-native';

const FlatListWrapper = styled(FlatList)`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;

export default FlatListWrapper;
