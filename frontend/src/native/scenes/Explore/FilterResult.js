import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { View, Image } from 'react-native';
import { Spinner } from 'native-base';
import { withFilter } from '../../providers/Filter';
import List, { withList } from '../../containers/List';
import Paragraph from '../../components/Paragraph';
import EmptyWrapper from '../MyRecipe/EmptyWrapper';
import ListWrapper from '../MyRecipe/ListWrapper';
import IconCooking from '../../images/icon-cooking.png';
import RecipeItem from '../ExploreFilter/RecipeItem';
import LoaderWrapper from './Loader';

const Recent = props => {
  const { listItems, listLoading, selectedCategories, loadResult } = props;
  const [tags, setTags] = useState('');

  useEffect(() => {
    loadResult();

    // Get Tags
    const tagsItems = [];
    let tagsString = '';
    selectedCategories.forEach(item => {
      tagsItems.push(item.get('name'));
    });

    if (tagsItems.length > 0) {
      tagsString = tagsItems.join(', ');
    }

    setTags(tagsString);
  }, [selectedCategories]);

  const renderLoader = () => {
    if (listLoading) {
      return (
        <LoaderWrapper>
          <Spinner color="#888888" />
        </LoaderWrapper>
      );
    }
    return null;
  };

  const renderEmpty = () => (
    <EmptyWrapper>
      <Image style={{ height: 70 }} source={IconCooking} resizeMode="contain" />
      <Paragraph center style={{ marginTop: 20, marginBottom: 0 }}>
        {'Kamu belum punya resep apapun di sini, ayo buat resep original kamu'}
      </Paragraph>
    </EmptyWrapper>
  );

  const renderList = () => (
    <ListWrapper>
      {listItems.map(item => (
        <RecipeItem key={`recipe-filter-${item.get('id')}`} recipe={item} tags={tags} />
      ))}
    </ListWrapper>
  );

  return (
    <View style={{ flex: 1, zIndex: 1, position: 'relative' }}>
      <List>
        {renderLoader()}
        <View style={{ flex: 1, zIndex: 1 }}>
          {listItems && listItems.count() > 0 ? renderList() : renderEmpty()}
        </View>
      </List>
    </View>
  );
};

Recent.propTypes = {
  selectedCategories: PropTypes.object,
  listLoading: PropTypes.bool,
  listItems: PropTypes.object,
  loadResult: PropTypes.func,
};

export default compose(
  withFilter,
  withList,
)(Recent);
