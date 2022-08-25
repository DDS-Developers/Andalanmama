/**
 * scenes/MyRecipeCreate/FieldTags/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import { fromJS } from 'immutable';
import { withMyRecipe } from '../../../providers/MyRecipe';
import Text from '../../../components/Text';
import FieldErrorInfo from '../../../components/FieldErrorInfo';
import ListWrapper from './ListWrapper';
import Tag from './Tag';
import Wrapper from './Wrapper';

const tags = fromJS([
  {
    id: 1,
    title: 'Chicken',
  },
  {
    id: 2,
    title: 'Meat',
  },
  {
    id: 3,
    title: 'Fish',
  },
  {
    id: 4,
    title: 'Pasta',
  },
  {
    id: 5,
    title: 'Eggs',
  },
  {
    id: 6,
    title: 'Fruits',
  },
]);

export class FieldTags extends PureComponent {
  renderTags = () => {
    const { recipeTags } = this.props;
    let errorLimit = false;
    if (recipeTags.count() >= 2) {
      errorLimit = true;
    }
    return (
      <ListWrapper>
        {tags.map(tag => (
          <Tag key={`key-${tag.get('id')}`} tag={tag} errorLimit={errorLimit}>
            {tag.get('name')}
          </Tag>
        ))}
      </ListWrapper>
    );
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
        <View style={{ marginTop: 10 }}>
          <FieldErrorInfo message={this.props.inputErrors.get('tags')} bottom />
        </View>
      </Wrapper>
    );
  }
}

FieldTags.propTypes = {
  recipeTags: PropTypes.object,
  inputErrors: PropTypes.object,
};

export default withMyRecipe(FieldTags);
