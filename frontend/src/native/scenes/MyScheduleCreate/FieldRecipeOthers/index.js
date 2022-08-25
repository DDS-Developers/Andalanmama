/**
 * scenes/MyScheduleCreate/FieldRecipeOthers/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Icon, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { withMyScheduleItem } from '../../../providers/MyScheduleItem';

import Pane from '../../../components/Pane';
import Text from '../../../components/Text';
import HeaderWrapper from './HeaderWrapper';
import EmptyWrapper from './EmptyWrapper';
import ListWrapper from './ListWrapper';
import ItemWrapper from './ItemWrapper';
import ItemTextWrapper from './ItemTextWrapper';
import ButtonWrapper from './ButtonWrapper';
import RemoveWrapper from './RemoveWrapper';

const FieldRecipes = ({ recipeOthers, removeRecipeOther }) => {
  const navigation = useNavigation();

  const renderEmpty = () => (
    <EmptyWrapper>
      <Text textAlign="center" color="#666666">
        Pilih Resep untuk dimasukkan dalam Jadwal Memasak kamu, Maksimal 4 Resep
      </Text>
    </EmptyWrapper>
  );

  const renderList = () => {
    const count = recipeOthers.count();

    return (
      <ListWrapper
        data={recipeOthers.toArray()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={data => {
          const { item, index } = data;
          return (
            <ItemWrapper>
              <Image
                style={{ width: 32, height: 32, borderRadius: 5 }}
                source={{ uri: item.get('image') }}
                resizeMode="contain"
              />
              <ItemTextWrapper numberOfLines={1} last={count === index + 1}>
                {item.get('name')}
              </ItemTextWrapper>
            </ItemWrapper>
          );
        }}
        renderHiddenItem={(data, rowMap) => {
          const { item, index } = data;
          const id = item.get('id');
          return (
            <View>
              <RemoveWrapper
                onPress={() => {
                  // if (recipeBook) {
                  //   this.props.deleteBookRecipe(id, recipeBook.get('id'));
                  // } else {
                  //   this.props.removeBookRecipe(id);
                  // }
                  removeRecipeOther(id);
                  rowMap[index].closeRow();
                }}
              >
                <Text textAlign="center" color="#ffffff">
                  Hapus
                </Text>
              </RemoveWrapper>
            </View>
          );
        }}
        rightOpenValue={-110}
      />
    );
  };

  return (
    <Pane column start>
      <HeaderWrapper>
        {/* <Text>Select Complementary Recipe</Text> */}
        <Text>Pilih Resep</Text>
        <ButtonWrapper onPress={() => navigation.navigate('MyScheduleRecipeAlt')}>
          <Icon style={{ color: '#000000' }} type="MaterialIcons" name="add" />
        </ButtonWrapper>
      </HeaderWrapper>
      {recipeOthers && recipeOthers.count() > 0 ? renderList() : renderEmpty()}
    </Pane>
  );
};

FieldRecipes.propTypes = {
  // recipeBook: PropTypes.object,
  recipeOthers: PropTypes.object,
  removeRecipeOther: PropTypes.func,
  // deleteBookRecipe: PropTypes.func,
};

export default withMyScheduleItem(FieldRecipes);
