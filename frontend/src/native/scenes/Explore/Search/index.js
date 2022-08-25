import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import FormSearch from '../../ExploreFilter/Header/Form';
import ButtonFilter from '../../ExploreFilter/Header/ButtonFilter';

const Search = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginTop: 30,
        marginBottom: 10,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1 }}>
        <FormSearch
          handler={() => {
            navigation.navigate('Search');
          }}
        />
      </View>
      <ButtonFilter />
    </View>
  );
};

export default Search;
