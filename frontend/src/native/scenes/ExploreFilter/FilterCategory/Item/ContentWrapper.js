/**
 * scenes/Explore/FilterCategory/Item/ContentWrapper.js
 *
 */
import styled from 'styled-components';
import { View } from 'native-base';

const ContentWrapper = styled(View)`
  width: 100%;
  height: 64px;
  border-radius: 8px;
  background-color: ${props => props.bgColor || '#000000'};
  color: #ffffff;
  overflow: hidden;
  position: relative;
`;

export default ContentWrapper;
