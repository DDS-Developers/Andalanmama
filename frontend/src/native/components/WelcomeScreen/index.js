/* eslint-disable global-require */
/**
 * components/WelcomeScreen/index.js
 *
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Text, View, H2 } from 'native-base';
import { StatusBar, ImageBackground, SafeAreaView, Image, ScrollView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Texture from '../../images/texture-bg.png';
import Logo from './Logo.png';

const slides = [
  {
    key: '1',
    title: 'Tes Kecocokan Resep',
    text: 'Lihat seberapa cocok kumpulan menu \nyang mama buat dijadwal masak',
    image: require('./screen-1.png'),
  },
  {
    key: '2',
    title: 'Buat Buku Resep',
    text: 'Submit resep original buatan mama, \ndapatkan poin dan klaim hadiahnya',
    image: require('./screen-2.png'),
  },
  {
    key: '3',
    title: 'Buat Jadwal Masak',
    text: 'Buat jadwal masak setiap hari, untuk \nmembantu kegiatan memasak mama',
    image: require('./screen-3.png'),
  },
  {
    key: '4',
    title: 'Eksplor Resep',
    text: 'Eksplor dan temukan bermacam resep \ndari andalan mama dan semua orang ',
    image: require('./screen-4.png'),
  },
  {
    key: '5',
    text: 'Selamat datang di aplikasi andalan mama, \n yuk eksplor berbagai macam resep',
    image: require('./screen-5.png'),
    lastSlide: true,
  },
];

// eslint-disable-next-line react/prefer-stateless-function
export class WelcomeScreen extends PureComponent {
  componentDidMount() {
    StatusBar.setBarStyle('dark-content');
  }

  renderItem = ({ item }) => {
    if (item.lastSlide) {
      return (
        <View
          style={{
            flex: 1,
            paddingTop: 25,
            paddingHorizontal: 15,
            alignItems: 'center',
          }}
        >
          <ImageBackground
            source={Texture}
            resizeMode="cover"
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              position: 'absolute',
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                height: 350,
              }}
              source={item.image}
            />
            <Image
              style={{
                width: 223,
                height: 92,
                marginBottom: 30,
                alignSelf: 'center',
              }}
              source={Logo}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: 'center',
              }}
            >
              {item.text}
            </Text>
          </View>
        </View>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 25,
          paddingHorizontal: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ImageBackground
          source={Texture}
          resizeMode="cover"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <Image
            style={{
              height: 77,
              marginBottom: 20,
              marginTop: 40,
              alignSelf: 'center',
            }}
            source={Logo}
            resizeMode="contain"
          />
          <Image resizeMode="contain" style={{ height: 300 }} source={item.image} />
          <View style={{ marginBottom: 40 }}>
            <H2
              style={{
                color: '#E83249',
                fontWeight: '600',
                textAlign: 'center',
                marginBottom: 10,
              }}
            >
              {item.title}
            </H2>
            <Text
              style={{
                textAlign: 'center',
              }}
            >
              {item.text}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  renderNextButton = () => <Text style={{ height: 0 }} />;

  render() {
    const { onDone } = this.props;
    return (
      <Container>
        <SafeAreaView>
          <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
        </SafeAreaView>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <AppIntroSlider
            slides={slides}
            renderItem={this.renderItem}
            activeDotStyle={{
              backgroundColor: '#000000',
              width: 10,
              height: 10,
              marginHorizontal: 3,
              borderRadius: 5,
            }}
            dotStyle={{
              backgroundColor: 'rgba(0, 0, 0, .5)',
              width: 10,
              height: 10,
              marginHorizontal: 3,
              borderRadius: 5,
            }}
            renderNextButton={this.renderNextButton}
            bottomButton
            buttonStyle={{
              backgroundColor: '#E83249',
              borderRadius: 4,
              shadowColor: 'transparent',
            }}
            buttonTextStyle={{
              color: '#ffffff',
              fontSize: 17,
              fontWeight: 'bold',
            }}
            doneLabel="MULAI"
            onDone={onDone}
          />
        </ScrollView>
      </Container>
    );
  }
}

WelcomeScreen.propTypes = {
  onDone: PropTypes.func,
};

export default WelcomeScreen;
