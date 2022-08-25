/**
 * scenes/Explore/FilterCategory/Item/ImageWrapper.js
 *
 */
import styled from 'styled-components';
import { Image } from 'react-native';

const ImageWrapper = styled(Image)`
  flex: 1;
  width: 100%;
  opacity: ${props => props.opacity || 0.4};
`;

export default ImageWrapper;
