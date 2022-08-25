import styled from 'styled-components';

const ImageWrapper = styled.div`
  box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: 5px;
  }
`;

export default ImageWrapper;
