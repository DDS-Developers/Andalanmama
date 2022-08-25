import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TimeAgo from 'react-native-timeago';
import IcUser from './ic-user.png';
import IcTime from './ic-time.png';
import Gap from '../../../components/Gap';

const Highlight = ({ onPress, title, image, user, date, desc }) => (
  <TouchableOpacity onPress={onPress}>
    <ImageBackground source={{ uri: image }} style={styles.background}>
      <LinearGradient
        colors={['#DE3046', 'rgba(0,0,0,0)']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.linearGradient}
      >
        <Text style={styles.title} numberOfLines={2}>
          {title.toUpperCase()}
        </Text>
        <Text style={styles.desc} numberOfLines={3}>
          {desc}
        </Text>
        <Gap height={10} />
        <View style={styles.info}>
          <Image source={IcUser} style={styles.icon} />
          <Gap width={5} />
          <Text style={styles.textInfo}>By {user}</Text>
          <Gap width={10} />
          <Image source={IcTime} style={styles.icon} />
          <Gap width={5} />
          <Text style={styles.textInfo}>
            <TimeAgo time={date} />
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  </TouchableOpacity>
);

Highlight.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  image: PropTypes.string,
  user: PropTypes.string,
  date: PropTypes.string,
  desc: PropTypes.string,
};

export default Highlight;

const styles = StyleSheet.create({
  background: {
    width: 328,
    height: 184,
    backgroundColor: 'red',
    position: 'relative',
  },
  linearGradient: {
    paddingHorizontal: 16,
    paddingBottom: 10,
    height: 110,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 19,
    color: '#FFFFFF',
    maxWidth: 320,
  },
  desc: {
    fontSize: 7,
    color: '#FFFFFF',
    maxWidth: 210,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  textInfo: {
    fontSize: 8,
    color: '#FFFFFF',
  },
});
