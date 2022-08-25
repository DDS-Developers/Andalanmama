/**
 * scenes/Explore/FilterCategory/Wrapper.js
 *
 */
import styled from 'styled-components';
import { View } from 'react-native';

const Wrapper = styled(View)`
  flex: 1;
  align-items: ${props => (props.toTop ? 'flex-start' : 'flex-end')};
  justify-content: ${props => (props.toTop ? 'flex-start' : 'flex-end')};
  background-color: rgba(38, 38, 38, 0.7);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
`;

export default Wrapper;
