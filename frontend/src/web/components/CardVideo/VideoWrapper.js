import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  &:before {
    content: '';
    background: #ef3648;
    background: linear-gradient(transparent, #ef3648);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  ._thumbnail {
    border-radius: ${props => (props.borderRadius ? '5px' : '0px')};
    width: 100%;
    height: 100%;

    img {
      border-radius: ${props => (props.borderRadius ? '5px' : '0px')};
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  ._action {
    width: ${props => (props.iconSize ? `${props.iconSize}px` : '100px')};
    height: ${props => (props.iconSize ? `${props.iconSize}px` : '100px')};
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    opacity: 0.8;
    z-index: 10;
    transform: translate(-50%, -50%);

    button {
      border: 0;
      background-color: transparent;
      outline: none;
      margin: 0 auto;
      padding: 0;
    }
  }
`;

export default VideoWrapper;
