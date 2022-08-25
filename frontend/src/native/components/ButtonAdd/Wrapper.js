/**
 * components/ButtonCircle/Wrapper.js
 *
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

const Wrapper = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  line-height: ${props => `${props.size}px`};
  background-color: #e83249;
  font-size: ${props => (props.iconSize ? `${props.iconSize}px` : '26px')};
  margin-left: 15px;
  border-radius: 100;
  shadow-color: #000000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.22;
  shadow-radius: 2.22;
  elevation: 3;
  opacity: ${props => (props.disable ? 0.6 : 1)};
`;

Wrapper.propTypes = {
  size: PropTypes.number,
  disable: PropTypes.bool,
};

export default Wrapper;
