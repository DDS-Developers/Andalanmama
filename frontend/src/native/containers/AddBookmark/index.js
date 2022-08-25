/**
 * containers/AddBookmark/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Icon, Button } from 'native-base';

import { withAuth } from '../../providers/Auth';
import { withBookmark } from '../../providers/Bookmark';

// import Debugger from '../../helpers/Debugger';

export class AddBookmark extends PureComponent {
  componentDidMount() {
    this.props.setMarked(this.props.recipeMarked);
  }

  renderBookmarkButton = () => {
    const { recipe } = this.props;
    return (
      <Button
        transparent
        onPress={() => {
          this.props.addBookmark(recipe);
        }}
      >
        <Icon type="MaterialIcons" name="bookmark" style={{ color: '#000000', marginRight: 0 }} />
      </Button>
    );
  };

  renderMarkedButton = () => {
    const { recipe } = this.props;
    const recipeId = recipe.get('id');
    return (
      <Button
        transparent
        onPress={() => {
          this.props.removeBookmark(recipeId);
        }}
      >
        <Icon type="MaterialIcons" name="bookmark" style={{ color: '#e83249', marginRight: 0 }} />
      </Button>
    );
  };

  renderLoading = () => (
    <Icon type="MaterialIcons" name="bookmark" style={{ color: '#ffffff', opacity: 0.5 }} />
  );

  renderBookmark = () => {
    const { marked, bookmarkLoading } = this.props;

    if (marked) {
      return this.renderMarkedButton();
    }
    if (bookmarkLoading) {
      this.renderLoading();
    }
    return this.renderBookmarkButton();
  };

  render() {
    const { loggedIn } = this.props;
    return <React.Fragment>{loggedIn ? this.renderBookmark() : null}</React.Fragment>;
  }
}

AddBookmark.propTypes = {
  // navigation: PropTypes.object.isRequired,
  recipe: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool,
  addBookmark: PropTypes.func,
  removeBookmark: PropTypes.func,
  setMarked: PropTypes.func,
  marked: PropTypes.bool,
  bookmarkLoading: PropTypes.bool,
  recipeMarked: PropTypes.bool,
};

export default compose(
  withAuth,
  withBookmark,
)(AddBookmark);
