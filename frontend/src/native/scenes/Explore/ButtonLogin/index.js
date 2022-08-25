import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'native-base';
import { View } from 'react-native';

const ButtonLogin = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#EAEAEA',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text style={{ fontSize: 10, paddingRight: 10 }}>
        Daftar/Masuk sekarang untuk pengalaman memasak {'\n'} yang lebih lengkap
      </Text>
      <Button
        block
        style={{
          height: 28,
          width: 84,
          borderRadius: 12,
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: '#E83249',
        }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text
          uppercase={false}
          style={{
            fontSize: 12,
            paddingLeft: 0,
            paddingRight: 0,
            width: '100%',
            textAlign: 'center',
            lineHeight: 12,
          }}
        >
          Masuk
        </Text>
      </Button>
    </View>
  );
};

export default ButtonLogin;
