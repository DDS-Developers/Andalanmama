/**
 * components/Pane/Wrapper.js
 *
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { View } from 'native-base';

const Pane = styled(View)`
  flex: 1;
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
`;

Pane.propTypes = {
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  flexDirection: PropTypes.oneOf([
    'row',
    'column',
    'row-reverse',
    'column-reverse',
    'initial',
    'inherit',
  ]),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse', 'initial', 'inherit']),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'initial',
    'inherit',
  ]),
};

export default Pane;
