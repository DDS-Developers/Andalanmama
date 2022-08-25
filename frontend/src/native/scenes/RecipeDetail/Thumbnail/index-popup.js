/**
 * scenes/RecipeDetail/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import { Icon } from 'native-base';
import { withRecipe } from '../../../providers/Recipe';

// import VideoPlayer from '../../../components/VideoPlayer';
import Wrapper from './Wrapper';

const RecipeThumbnail = props => {
  const { recipe } = props;
  const video = recipe.get('youtube');
  const image = recipe.get('image');

  return (
    <Wrapper>
      <Image style={{ width: '100%', height: 320 }} resizeMode="cover" source={{ uri: image }} />
      {video ? (
        <TouchableOpacity
          onPress={() => props.showVideoModal(true)}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            type="MaterialIcons"
            name="play-circle-outline"
            style={{ color: '#ffffff', fontSize: 50 }}
          />
        </TouchableOpacity>
      ) : null}
    </Wrapper>
  );
};

RecipeThumbnail.propTypes = {
  recipe: PropTypes.object,
  showVideoModal: PropTypes.func,
};

export default withRecipe(RecipeThumbnail);
