/**
 * scenes/MyRecipe/Filter/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { withRecipeBook } from '../../../providers/RecipeBook';
import FilterIcon from './FilterIcon';
import Wrapper from './Wrapper';

const Filter = props => {
  const { loadRecipeBooks, changeFilterStatus, changeFilterLabel, filterStatus } = props;
  const filters = [
    {
      icon: 'sort',
      value: 'all',
      label: 'Semua',
    },
    {
      icon: 'check',
      value: 'approved',
      label: 'Disetujui',
    },
    {
      icon: 'remove',
      value: 'unpublished',
      label: 'Tidak Dipublikasikan',
    },
    {
      icon: 'arrow-upward',
      value: 'approval',
      label: 'Menunggu Persetujuan',
    },
    {
      icon: 'edit',
      value: 'draft',
      label: 'Draft',
    },
  ];

  return (
    <Wrapper>
      {filters.map(filter => {
        if (filterStatus === filter.value) {
          return (
            <View key={`menu-filter-${filter.value}`}>
              <FilterIcon color="#e83249" name={filter.icon} />
            </View>
          );
        }
        return (
          <TouchableOpacity
            key={`menu-filter-${filter.value}`}
            onPress={() => {
              changeFilterStatus(filter.value);
              changeFilterLabel(filter.label);
              loadRecipeBooks();
            }}
          >
            <FilterIcon color="#000000" name={filter.icon} />
          </TouchableOpacity>
        );
      })}
    </Wrapper>
  );
};

Filter.propTypes = {
  filterStatus: PropTypes.string,
  loadRecipeBooks: PropTypes.func,
  changeFilterStatus: PropTypes.func,
  changeFilterLabel: PropTypes.func,
};

export default withRecipeBook(Filter);
