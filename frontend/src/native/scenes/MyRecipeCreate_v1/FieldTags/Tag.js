/**
 * scenes/MyRecipeCreate/FieldTags/Tag.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withMyRecipe } from '../../../providers/MyRecipe';
import ListHelper from '../../../helpers/List';
import Text from '../../../components/Text';
import TagWrapper from './TagWrapper';
import ActiveWrapper from './ActiveWrapper';
import DisableWrapper from './DisableWrapper';

export class Tag extends PureComponent {
  isActive = tag => {
    const { recipeTags } = this.props;
    const isExists = ListHelper.getItemById(tag.get('id'), recipeTags);
    return isExists;
  };

  removeTag = id => {
    this.props.removeRecipeTag(id);
    this.props.checkInputError('tags');
  };

  addTag = tag => {
    this.props.addRecipeTag(tag);
    this.props.checkInputError('tags');
  };

  render() {
    const { tag, errorLimit } = this.props;
    const title = tag.get('title');

    if (this.isActive(tag)) {
      return (
        <ActiveWrapper onPress={() => this.removeTag(tag.get('id'))}>
          <Text color="#ffffff">{title}</Text>
        </ActiveWrapper>
      );
    }
    if (errorLimit) {
      return (
        <DisableWrapper>
          <Text>{title}</Text>
        </DisableWrapper>
      );
    }
    return (
      <TagWrapper onPress={() => this.addTag(tag)}>
        <Text>{title}</Text>
      </TagWrapper>
    );
  }
}

Tag.propTypes = {
  errorLimit: PropTypes.bool,
  recipeTags: PropTypes.object,
  tag: PropTypes.object.isRequired,
  removeRecipeTag: PropTypes.func,
  addRecipeTag: PropTypes.func,
  checkInputError: PropTypes.func,
};

export default withMyRecipe(Tag);
