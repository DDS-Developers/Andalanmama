import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Modal, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'native-base';

const windowWidth = Dimensions.get('window').width;

const Campaign = p => {
  const [ visible, setVisible ] = useState(false);
  const [ data, setData ] = useState(null);

  const { loggedIn, authData, campaign } = p;

  useEffect(() => {
    if (campaign) {
      setVisible(true);

      setData(campaign);
    }

  }, [campaign])

  const navigation = useNavigation();

  if (data && visible) {
    return (
      <Modal visible={visible} transparent={true} animationType="fade">
        <View style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
          position: 'relative'
        }}>
          <TouchableOpacity style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: '#000000', opacity: 0.3}} onPress={() => setVisible(false)}/>
          <View style={{position: 'relative'}}>
            <TouchableOpacity style={{
              width: 30,
              height: 30,
              backgroundColor: '#ffffff',
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              right: -15,
              top: -15,
              zIndex: 2
            }} onPress={() => setVisible(false)}>
              <Icon type="MaterialIcons" name="close" style={{ fontSize: 20, color: '#e83249' }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);

                navigation.navigate('WebviewCampaign', {url: data.url, title: data.title});
              }} style={{zIndex: 1}}>
              <Image
                resizeMode="contain"
                style={{
                  width: windowWidth - 40,
                  height: windowWidth - 40,
                }}
                source={{uri: data.image}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  } else {
    return null;
  }
};

export default Campaign;