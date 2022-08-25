import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'native-base';
import { View, ImageBackground, Image, Dimensions, TouchableWithoutFeedback, Linking } from 'react-native';

import { withAuth } from '../../../providers/Auth';
import Logo from '../../../components/MainLogo/Logo.png';
import TagsList from '../../ExploreFilter/FilterCategory/InputTags/List';
import Search from '../Search';
import ExploreBg from './explore-bg.png';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');
const imageWidth = width;
const imageRatio = imageWidth/1425;

const Top: () => React$Node = p => {
  const { loggedIn, authData, banner } = p

  const [ activeSlide, setActiveSlide ] = useState(0);

  const itemStyle = {width: imageWidth, height: (527 * imageRatio)};

  const renderItem = (data, i) => {
    // data = {
    //   ...data,
    //   item: {
    //     ...data.item,
    //     scene_name: 'WebviewCampaign',
    //     scene_params: "{\"url\":\"https://jsonformatter.org/json-stringify-online\"}"
    //   }
    // }

    return <TouchableWithoutFeedback onPress={() => {
      if (data.item.scene_name) {
        const params = data.item.scene_params ? JSON.parse(data.item.scene_params) : {};

        p.navigation.navigate(data.item.scene_name, params);
      }

      if (data.item.url) {
        Linking.openURL(data.item.url)
      }
    }}><Image style={itemStyle} key={i} source={{ uri: data.item.image }}/></TouchableWithoutFeedback>;
  };

  const data = banner ? banner.toArray().map(item => ({image: item.get('image')})) : [];

  return (
    <View>
      <ImageBackground
        source={ExploreBg}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          top: 0,
          position: 'absolute',
        }}
      />
      <View style={{ padding: 10 }}>
        <Image
          style={{
            height: 52,
            marginVertical: 20,
            alignSelf: 'center',
          }}
          source={Logo}
          resizeMode="contain"
        />
        <Text style={{ textAlign: 'center', fontSize: 15 }}>
          Selamat Datang
          {loggedIn ? `, ${authData.getIn(['user', 'fullname'])}` : ''}
        </Text>
      </View>
      <View>
        <Carousel
          autoplay={true}
          loop={true}
          hasParallaxImages={true}
          data={data}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={i => setActiveSlide(i)}/>
          <Pagination
            activeDotIndex={activeSlide}
            dotsLength={data.length}
            containerStyle={{marginTop: -10, marginBottom: -30}}
            dotStyle={{
                width: 5,
                height: 5,
                borderRadius: 5,
            }}
            inactiveDotStyle={{
                width: 10,
                height: 10,
                borderRadius: 10,
            }}/>
      </View>
      <View style={{ padding: 20, paddingTop: 0 }}>
        <Search />
        <TagsList />
      </View>
    </View>
  )
}

Top.propTypes = {
  loggedIn: PropTypes.bool,
  authData: PropTypes.object,
  banner: PropTypes.object,
};

export default Top;
