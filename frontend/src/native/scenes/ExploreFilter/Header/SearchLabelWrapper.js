/**
 * scenes/ExploreFilter/Header/SearchLabelWrapper.js
 *
 */
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const SearchLabelWrapper = styled(TouchableOpacity)`
  elevation: 0;
  background-color: #efefef;
  border-radius: 50;
  height: 34;
  width: 100%
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 15;
  padding-right: 15;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export default SearchLabelWrapper;
