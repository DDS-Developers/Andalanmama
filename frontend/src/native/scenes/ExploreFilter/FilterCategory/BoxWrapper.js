/**
 * scenes/Explore/FilterCategory/BoxWrapper.js
 *
 */
import styled from 'styled-components';
import { View } from 'react-native';

const BoxWrapper = styled(View)`
  background-color: #ffffff;
  padding-top: 20px;
  padding-left: 24px;
  padding-bottom: ${props => (props.toTop ? '90px' : '24px')};
  padding-right: 0;
  width: 100%;
`;

export default BoxWrapper;
