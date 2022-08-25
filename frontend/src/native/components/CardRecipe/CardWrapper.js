/**
 * components/CardRecipe/CardWrapper.js
 *
 */
import styled from 'styled-components';
import { Card } from 'native-base';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width / 2 - 25;

const CardWrapper = styled(Card)`
  width: ${props => (props.full ? `100%` : `${width}`)};
  margin: ${props => (props.full ? `0 0 10px` : `0 5px 10px`)};
  border-radius: 0;
  border-width: 0;
  position: relative;
`;

export default CardWrapper;
