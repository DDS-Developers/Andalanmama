import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const CampaignIcon = p => {
  const [ data, setData ] = useState(null);

  const { loggedIn, authData, campaign } = p;

  useEffect(() => {
    if (campaign) {
      setData(campaign);
    }

  }, [campaign])

  const navigation = useNavigation();

  if (data) {
    return (
      <View style={{
        position: 'absolute',
        left: 15,
        bottom: 15,
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 50,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.05,
        shadowradius: 2.22,
        elevation: 5
      }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WebviewCampaign', {url: data.url, title: data.title});
          }} style={{zIndex: 1}}>
          <Image
            resizeMode="contain"
            style={{
              width: 78,
              height: 78,
            }}
            source={{uri: data.floating}}
          />
        </TouchableOpacity>
      </View>
    );
  } else {
    return null;
  }
};

export default CampaignIcon;