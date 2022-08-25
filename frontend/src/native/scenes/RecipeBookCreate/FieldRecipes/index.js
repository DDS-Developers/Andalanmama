/**
 * scenes/RecipeBookCreate/FieldRecipes/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import DraggableFlatList from 'react-native-draggable-flatlist';

import { withRecipeBook } from '../../../providers/RecipeBook';
import Pane from '../../../components/Pane';
import Text from '../../../components/Text';
import HeaderWrapper from './HeaderWrapper';
import EmptyWrapper from './EmptyWrapper';
import ListItem from './ListItem';
import ButtonWrapper from './ButtonWrapper';

const FieldRecipes = ({ bookRecipes, setBookRecipes }) => {
  const navigation = useNavigation();

  const renderEmpty = () => (
    <EmptyWrapper>
      <Text textAlign="center" color="#666666">
        Pilih Resep untuk dimasukkan dalam Buku Resep kamu
      </Text>
    </EmptyWrapper>
  );

  const onMoveEnd = ({ data }) => {
    setBookRecipes(data ? [...data] : []);
  };

  const renderList = () => (
    <View style={{ width: '100%' }}>
      <DraggableFlatList
        data={bookRecipes.toArray()}
        renderItem={renderListItem}
        keyExtractor={(item, index) => index.toString()}
        scrollPercent={5}
        onMoveEnd={onMoveEnd}
        contentContainerStyle={{
          flex: 1,
        }}
      />
    </View>
  );

  const renderListItem = data => {
    const { item, move, moveEnd, isActive, index } = data;
    const count = bookRecipes.count();

    return (
      <ListItem
        item={item}
        count={count}
        index={index}
        move={move}
        moveEnd={moveEnd}
        isActive={isActive}
      />
    );
  };

  return (
    <Pane column start>
      <HeaderWrapper>
        <Text>Pilih Resep</Text>
        <ButtonWrapper onPress={() => navigation.navigate('RecipeBookItems')}>
          <Icon style={{ color: '#000000' }} type="MaterialIcons" name="add" />
        </ButtonWrapper>
      </HeaderWrapper>
      {bookRecipes && bookRecipes.count() > 0 ? renderList() : renderEmpty()}
    </Pane>
  );
};

FieldRecipes.propTypes = {
  // recipeBook: PropTypes.object,
  bookRecipes: PropTypes.object,
  setBookRecipes: PropTypes.func,
  // removeBookRecipe: PropTypes.func,
};

export default withRecipeBook(FieldRecipes);
