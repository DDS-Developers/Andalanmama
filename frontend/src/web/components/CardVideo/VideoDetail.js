import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import classNames from 'classnames';
import { Close } from '@material-ui/icons';

import Button from '../Button';
// import Icon from '../Icon';
import VideoDetailWrapper from './VideoDetailWrapper';

// eslint-disable-next-line react/prefer-stateless-function
class VideoDetail extends React.Component {
  state = {
    videoPlayer: null,
  };

  onPlayVideo = evt => {
    evt.preventDefault();
    if (this.state.videoPlayer) {
      this.state.videoPlayer.playVideo();
    }
  };

  onClose = evt => {
    evt.preventDefault();
    if (this.state.videoPlayer) {
      this.state.videoPlayer.pauseVideo();
    }
    this.props.onClosePopup(this.state.videoPlayer);
  };

  onReady = evt => {
    this.setState({
      videoPlayer: evt.target,
    });
    evt.target.pauseVideo();
  };

  render() {
    const { thumbnail, visible, videoId, className, onClosePopup, ...others } = this.props;

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <VideoDetailWrapper
        className={classNames(className, {
          _visible: visible,
        })}
        {...others}
      >
        <div className="_video--inner">
          <div className="_video--main">
            <YouTube videoId={videoId} opts={opts} onReady={this.onReady} />
          </div>
          <div className="_video--close">
            <button type="button" onClick={this.onClose}>
              <Close />
            </button>
          </div>
          <div className="_video--action">
            <Button type="button" onClick={this.onPlayVideo}>
              Mulai Masak
            </Button>
          </div>
        </div>
      </VideoDetailWrapper>
    );
  }
}

VideoDetail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  videoId: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onClosePopup: PropTypes.func.isRequired,
};

export default VideoDetail;
