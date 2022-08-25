import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { TourGuideZone } from 'rn-tourguide';
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
        <TourGuideZone
          zone={1}
          shape="rectangle_and_keep"
          keepTooltipPosition
          text="Temukan user dan resep Andalan kamu di sini"
        >
          <FormSearch
            handler={() => {
              navigation.navigate('Search');
            }}
          />
        </TourGuideZone>
      </View>

      <TourGuideZone zone={2} text="Gunakan Fitur Filter untuk Pencarian yang lebih spesifik">
        <ButtonFilter />
      </TourGuideZone>
    </View>
  );
};

export default Search;
