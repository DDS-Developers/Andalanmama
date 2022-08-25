/**
 * scenes/MyScheduleCreate/FieldRecipeOthers/index.js
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { withMyScheduleItem } from '../../../providers/MyScheduleItem';

import Pane from '../../../components/Pane';
import Text from '../../../components/Text';
import HeaderWrapper from './HeaderWrapper';
import EmptyWrapper from './EmptyWrapper';
import ItemWrapper from './ItemWrapper';
import ItemTextWrapper from './ItemTextWrapper';
import ButtonWrapper from './ButtonWrapper';

const FieldRecipes = ({ recipeMain }) => {
  const navigation = useNavigation();

  const renderEmpty = () => (
    <EmptyWrapper>
      <Text textAlign="center" color="#666666">
        Pilih Resep untuk dimasukkan dalam Jadwal Memasak kamu
      </Text>
    </EmptyWrapper>
  );

  const renderList = () => (
    <ItemWrapper>
      <Image
        style={{ width: 32, height: 32, borderRadius: 5 }}
        source={{ uri: recipeMain.get('image') }}
        resizeMode="contain"
      />
      <ItemTextWrapper numberOfLines={1} last>
        {recipeMain.get('name')}
      </ItemTextWrapper>
    </ItemWrapper>
  );

  return (
    <Pane column start>
      <HeaderWrapper>
        <Text>Pilih Menu Andalan</Text>
        <ButtonWrapper onPress={() => navigation.navigate('MyScheduleRecipeMain')}>
          {recipeMain ? (
            <Text>Ubah</Text>
          ) : (
            <Icon style={{ color: '#000000' }} type="MaterialIcons" name="add" />
          )}
        </ButtonWrapper>
      </HeaderWrapper>
      {recipeMain ? renderList() : renderEmpty()}
    </Pane>
  );
};

FieldRecipes.propTypes = {
  recipeMain: PropTypes.object,
  // removeRecipeOther: PropTypes.func,
  // deleteBookRecipe: PropTypes.func,
};

export default withMyScheduleItem(FieldRecipes);
