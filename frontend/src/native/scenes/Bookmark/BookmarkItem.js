/**
 * scenes/Bookmark/BookmarkItem/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CardRecipe from '../../components/CardRecipe';

export class BookmarkItem extends PureComponent {
  render() {
    const { bookmark } = this.props;
    const image = bookmark.get('image');
    const title = bookmark.get('name');
    const id = bookmark.get('id');

    const actions = {
      settings: {
        options: ['Hapus', 'Batal'],
        cancelButtonIndex: 1,
        destructiveButtonIndex: 0,
      },
      handler: buttonIndex => {
        if (buttonIndex === 0) {
          this.props.onDelete(id);
        }
      },
    };

    return <CardRecipe image={image} title={title} id={id} actions={actions} />;
  }
}

BookmarkItem.propTypes = {
  bookmark: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookmarkItem;
