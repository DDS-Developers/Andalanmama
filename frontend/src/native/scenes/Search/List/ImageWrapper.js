/**
 * scenes/Search/List/ImageWrapper.js
 *
 */
import styled from 'styled-components';
import { Image } from 'react-native';

const ImageWrapper = styled(Image)`
  flex: 1;
  width: 42px;
  border-radius: ${props => (props.circle ? 100 : 4)};
`;

export default ImageWrapper;
