import styled from 'styled-components';

const VideoDetailWrapper = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.4s;
  opacity: 0;
  visibility: hidden;

  &._visible {
    opacity: 1;
    visibility: visible;
  }

  ._video--inner {
    width: 880px;
    margin: 0 auto;
    transition: all 0.4s;
    position: relative;

    iframe {
      width: 880px !important;
      height: 490px !important;
    }
  }

  ._video--close {
    width: 48px;
    height: 48px;
    position: absolute;
    top: -10px;
    right: -10px;

    button {
      border-radius: 100%;
      width: 48px;
      height: 48px;
      background-color: #ef3648;
      color: #ffffff;
      border: 0;
      outline: none;
      margin: 0 auto;
      padding: 0;
    }
  }

  ._video--action {
    margin-top: 15px;
    text-align: center;

    button {
      width: 480px;
    }
  }
`;

export default VideoDetailWrapper;
