/**
 * scenes/Explore/FilterCategory/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import { withFilter } from '../../../../providers/Filter';
import Text from '../../../../components/Text';

// eslint-disable-next-line react/prefer-stateless-function
export class InputTagsList extends PureComponent {
  async onRemoveTag(item) {
    await this.props.removeSelectedCategory(item.get('id'));
    const isEmpty = await this.checkCategoryEmpty();
    if (!isEmpty) {
      await this.props.loadResult();
    } else {
      await this.props.setUseFilter(false);
    }
  }

  checkCategoryEmpty() {
    const { selectedCategories } = this.props;

    if (selectedCategories.count() > 0) {
      return false;
    }
    return true;
  }

  renderItem(item) {
    return (
      <View
        style={{
          marginRight: 8,
          marginBottom: 10,
          borderRadius: 10,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 14,
          paddingRight: 20,
          backgroundColor: '#e83249',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity onPress={() => this.onRemoveTag(item)}>
          <Icon type="SimpleLineIcons" name="close" style={{ color: '#ffffff', fontSize: 20 }} />
        </TouchableOpacity>
        <Text
          style={{
            color: '#ffffff',
            marginLeft: 8,
          }}
        >
          {item.get('name')}
        </Text>
      </View>
    );
  }

  render() {
    const { selectedCategories } = this.props;

    if (selectedCategories.count() > 0) {
      return (
        <View style={{ marginTop: 15, position: 'relative' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {selectedCategories.map(item => (
              <React.Fragment key={`tag-${item.get('id')}`}>{this.renderItem(item)}</React.Fragment>
            ))}
          </View>
        </View>
      );
    }

    return null;
  }
}

InputTagsList.propTypes = {
  selectedCategories: PropTypes.object,
  removeSelectedCategory: PropTypes.func,
  loadResult: PropTypes.func,
  setUseFilter: PropTypes.func,
};

export default withFilter(InputTagsList);
