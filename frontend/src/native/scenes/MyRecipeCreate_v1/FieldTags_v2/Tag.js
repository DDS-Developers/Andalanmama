/**
 * scenes/MyRecipeCreate/FieldTags/Tag.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../components/Text';
import TagWrapper from './TagWrapper';
import ActiveWrapper from './ActiveWrapper';
import DisableWrapper from './DisableWrapper';

export class Tag extends PureComponent {
  render() {
    const { tag, errorLimit, isActive } = this.props;
    const title = tag.get('title');
    const id = tag.get('id');

    if (isActive) {
      return (
        <ActiveWrapper onPress={() => this.props.onUnselect(id)}>
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
      <TagWrapper onPress={() => this.props.onSelect(tag)}>
        <Text>{title}</Text>
      </TagWrapper>
    );
  }
}

Tag.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onUnselect: PropTypes.func.isRequired,
  tag: PropTypes.object.isRequired,
  errorLimit: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default Tag;
