/**
 * components/Content/Wrapper.js
 *
 */
import styled from 'styled-components';
import { View } from 'react-native';

const Content = styled(View)`
  flex: 1;
  background-color: ${props => (props.clean ? '#ffffff' : '#efefef')};
  padding-top: 24px;
  padding-left: 15px;
  padding-bottom: 24px;
  padding-right: 15px;
`;

export default Content;
