/**
 * scenes/MyRecipe/RecipeItem/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CardRecipe from '../../components/CardRecipe';

export class RecipeItem extends PureComponent {
  render() {
    const { recipe } = this.props;
    const image = recipe.get('image');
    const title = recipe.get('name');
    const id = recipe.get('id');
    const user = recipe.get('user');
    let uploader = null;
    if (user) {
      uploader = user.get('fullname');
    }

    return (
      <CardRecipe
        image={image}
        title={title}
        id={id}
        uploader={uploader}
        tags={this.props.tags}
        showCount
        likeCount={recipe.get('like_count')}
        commentCount={recipe.get('comment_count')}
      />
    );
  }
}

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  tags: PropTypes.string,
};

export default RecipeItem;
