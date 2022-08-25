/**
 * scenes/RecipeDetail/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Linking } from 'react-native';
import { Icon } from 'native-base';
import { withRecipe } from '../../../providers/Recipe';
import YoutubePlayer from "react-native-youtube-iframe";

// import VideoPlayer from '../../../components/VideoPlayer';
import Wrapper from './Wrapper';

const RecipeThumbnail = props => {
  const { recipe } = props;
  const video = recipe.get('youtube');
  const image = recipe.get('image');

  return (
    <Wrapper>
      <Image style={{ width: '100%', height: 320, position: 'absolute', top: 0 }} resizeMode="cover" source={{ uri: image }} />
      {video ? (
      <YoutubePlayer
        height={'100%'}
        videoId={video}
        webViewStyle={{
          marginTop: 56,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%'
        }}
        initialPlayerParams={{controls: true, rel: 0}}
      />
      ) : null}
    </Wrapper>
  );
};

RecipeThumbnail.propTypes = {
  recipe: PropTypes.object,
};

export default withRecipe(RecipeThumbnail);