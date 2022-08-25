/**
 * scenes/MyRecipeCreate/FieldTags/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

import { withTag } from '../../../providers/Tag';
import Text from '../../../components/Text';
import ListHelper from '../../../helpers/List';

import ListWrapper from './ListWrapper';
import Wrapper from './Wrapper';
import TagWrapper from './TagWrapper';
import ActiveWrapper from './ActiveWrapper';
import DisableWrapper from './DisableWrapper';

export class FieldTags extends PureComponent {
  componentDidMount() {
    this.props.loadTags();
  }

  removeTag = async id => {
    await this.props.onRemoveTag(id);
    await this.props.onCheckError();
  };

  addTag = async tag => {
    await this.props.onAddTag(tag);
    await this.props.onCheckError();
  };

  renderTagItem = (tag, errorLimit) => {
    const { recipeTags } = this.props;
    const title = tag.get('name');
    const id = tag.get('id');

    let isActive = false;
    const isExists = ListHelper.getItemById(tag.get('id'), recipeTags);
    if (isExists) {
      isActive = true;
    }

    if (isActive) {
      return (
        <ActiveWrapper onPress={() => this.props.onRemoveTag(id)}>
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
  };

  renderTags = () => {
    const { recipeTags, tags } = this.props;
    let errorLimit = false;
    if (recipeTags.count() >= 2) {
      errorLimit = true;
    }

    if (tags) {
      return (
        <ListWrapper>
          {tags.map(tag => (
            <React.Fragment key={`tag-${tag.get('id')}`}>
              {this.renderTagItem(tag, errorLimit)}
            </React.Fragment>
          ))}
        </ListWrapper>
      );
    }
    return null;
  };

  render() {
    return (
      <Wrapper>
        <View>
          <Text style={{ fontWeight: 'bold' }}>Pilih Tag</Text>
        </View>
        <View>
          <Text style={{ color: '#777777' }}>
            Pilih maksimal 2 tag, agar resepmu lebih mudah dicari
          </Text>
        </View>
        {this.renderTags()}
      </Wrapper>
    );
  }
}

FieldTags.propTypes = {
  onAddTag: PropTypes.func.isRequired,
  onRemoveTag: PropTypes.func.isRequired,
  onCheckError: PropTypes.func.isRequired,
  recipeTags: PropTypes.object.isRequired,
  tags: PropTypes.object,
  loadTags: PropTypes.func.isRequired,
};

export default withTag(FieldTags);
