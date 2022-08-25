import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import TimeAgo from 'react-native-timeago';
import PropTypes from 'prop-types';
import IcTime from './ic-time.png';
import Gap from '../../../components/Gap';

const widthItem = Dimensions.get('window').width / 2 - 25;

const Latest = ({ onPress, title, image, user, date }) => (
  <TouchableOpacity style={{ width: widthItem, ...styles.wrapper }} onPress={onPress}>
    <ImageBackground source={{ uri: image }} style={styles.image}>
      <View style={styles.info}>
        <Image source={IcTime} style={styles.icon} />
        <Gap width={5} />
        <Text style={styles.textInfo}>
          <TimeAgo time={date} />
        </Text>
      </View>
    </ImageBackground>
    <View style={styles.content}>
      <Text style={styles.title} numberOfLines={3}>
        {title.toUpperCase()}
      </Text>
      <Gap height={5} />
      <Text style={styles.desc}>Article by {user}</Text>
    </View>
  </TouchableOpacity>
);

Latest.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  image: PropTypes.string,
  user: PropTypes.string,
  date: PropTypes.string,
};

export default Latest;

const styles = StyleSheet.create({
  wrapper: {
    height: 250,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 161,
    resizeMode: 'cover',
    position: 'relative',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 6,
    right: 0,
    left: 6,
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
  title: {
    fontSize: 13,
    color: '#000000',
  },
  desc: {
    fontSize: 8,
    color: '#000000',
  },
  content: {
    padding: 10,
  },
});
