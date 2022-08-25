/**
 * scenes/MyRecipeCreate/FieldTags/index.js
 *
 */
import React, { PureComponent } from 'react';
import { View } from 'native-base';
import { fromJS } from 'immutable';
import Text from '../../../components/Text';
import ListHelper from '../../../helpers/List';
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
  state = {
    recipeTags: fromJS([]),
  };

  addTagList = tag => {
    let { recipeTags } = this.state;
    recipeTags = recipeTags.push(tag);
    this.setState({
      recipeTags,
    });
  };

  removeTagList = id => {
    let { recipeTags } = this.state;
    recipeTags = ListHelper.removeItemById(id, recipeTags);
    this.setState({
      recipeTags,
    });
  };

  renderTags = () => {
    // const { recipeTags } = this.props;
    const { recipeTags } = this.state;
    let errorLimit = false;
    if (recipeTags.count() >= 2) {
      errorLimit = true;
    }
    return (
      <ListWrapper>
        {tags.map(tag => {
          let isActive = false;
          const isExists = ListHelper.getItemById(tag.get('id'), recipeTags);
          if (isExists) {
            isActive = true;
          }
          return (
            <Tag
              key={`key-${tag.get('id')}`}
              tag={tag}
              isActive={isActive}
              errorLimit={errorLimit}
              onSelect={data => this.addTagList(data)}
              onUnselect={id => this.removeTagList(id)}
            />
          );
        })}
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
      </Wrapper>
    );
  }
}

export default FieldTags;
