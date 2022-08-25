import styled from 'styled-components';
import PropTypes from 'prop-types';
import BoxBorder from '../BoxBorder';

const Pane = styled(BoxBorder)`
  display: ${props => props.display || 'block'};
  align-items: ${props => props.alignItems};
  align-self: ${props => props.alignSelf};
  flex: ${props => props.flex};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
`;

Pane.propTypes = {
  display: PropTypes.oneOf(['', 'block', 'inline', 'inline-block', 'flex']),
};

export default Pane;
