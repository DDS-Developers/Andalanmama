/**
 * scenes/Search/Filter/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';

import { withSearch } from '../../../providers/Search';
import {
  FILTER_STATUS_ALL,
  FILTER_STATUS_RECIPE,
  FILTER_STATUS_BOOK,
  FILTER_STATUS_ACCOUNT,
} from '../../../store/Search/constants';

import IconWrapper from './IconWrapper';
import Wrapper from './Wrapper';

const Filter = props => {
  const { filterStatus } = props;
  const filters = [
    {
      icon: 'sort',
      value: FILTER_STATUS_ALL,
    },
    {
      icon: 'developer-board',
      value: FILTER_STATUS_RECIPE,
    },
    {
      icon: 'book',
      value: FILTER_STATUS_BOOK,
    },
    {
      icon: 'person',
      value: FILTER_STATUS_ACCOUNT,
    },
  ];

  return (
    <Wrapper>
      {filters.map(filter => {
        const { value, icon } = filter;
        if (filterStatus === value) {
          return (
            <View key={`menu-filter-${value}`}>
              <IconWrapper type="MaterialIcons" color="#e83249" name={icon} />
            </View>
          );
        }
        return (
          <TouchableOpacity
            key={`menu-filter-${value}`}
            onPress={() => {
              props.setFilterStatus(value);

              // Load content
              if (value === FILTER_STATUS_ALL) {
                props.loadRecipes();
                props.loadBooks();
                props.loadAccounts();
              } else if (value === FILTER_STATUS_RECIPE) {
                props.loadRecipes();
              } else if (value === FILTER_STATUS_BOOK) {
                props.loadBooks();
              } else if (value === FILTER_STATUS_ACCOUNT) {
                props.loadAccounts();
              }
            }}
          >
            <IconWrapper type="MaterialIcons" color="#000000" name={icon} />
          </TouchableOpacity>
        );
      })}
    </Wrapper>
  );
};

Filter.propTypes = {
  filterStatus: PropTypes.string,
  setFilterStatus: PropTypes.func,
  loadRecipes: PropTypes.func,
  loadBooks: PropTypes.func,
  loadAccounts: PropTypes.func,
};

export default withSearch(Filter);
