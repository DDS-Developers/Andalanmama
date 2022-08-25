/**
 * scenes/RecipeDetail/index.js
 *
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-native-youtube';

// import Debugger from '../../helpers/Debugger';
import { withRecipe } from '../../providers/Recipe';

const VideoModal = props => {
  const [fullscreen, setFullscreen] = useState();
  const [isReady, setIsReady] = useState();
  const { recipe, videoModal, showVideoModal } = props;

  // const videoUrl = recipe.get('youtube');
  // let videoId = '';
  // if (videoUrl) {
  //   // eslint-disable-next-line no-useless-escape
  //   const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  //   const match = videoUrl.match(regExp);
  //   if (match && match[2].length === 11) {
  //     // eslint-disable-next-line prefer-destructuring
  //     videoId = match[2];
  //   }
  // }

  const videoId = recipe.get('youtube');
  if (videoModal && videoId !== '') {
    return (
      <YouTube
        apiKey="AIzaSyANajImMttUKtAEenoG7YR8n04aW9-QADQ"
        videoId={videoId}
        play
        fullscreen
        loop={false}
        onReady={() => setIsReady(true)}
        onChangeState={e => {
          if (e.state === 'stopped' && isReady && !fullscreen) {
            showVideoModal(false);
          }
        }}
        onChangeFullscreen={e => setFullscreen(e.isFullscreen)}
        // onChangeQuality={e => this.setState({ quality: e.quality })}
        // onError={e => this.setState({ error: e.error })}
        // style={{ alignSelf: 'stretch', height: 300 }}
      />
    );
  }
  return null;
};

VideoModal.propTypes = {
  recipe: PropTypes.object,
  videoModal: PropTypes.bool,
  showVideoModal: PropTypes.func,
};

export default withRecipe(VideoModal);
