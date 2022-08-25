import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  Image,
  Share,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TimeAgo from 'react-native-timeago';
import IcComment from './ic-comment-white.png';
import IcShare from './ic-share-white.png';
import IcTime from './ic-time.png';
import Gap from '../../../components/Gap';

const Highlight = ({ onPress, title, image, date, totalComment }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'Please open or install Andalan Mama Apps, To Open : https://open.andalanmama.app Or Download On Playstore https://play.google.com/store/apps/details?id=com.andalanmama',
        url: 'https://play.google.com/store/apps/details?id=com.andalanmama',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      // alert(error.message);
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground source={{ uri: image }} style={styles.background}>
        <LinearGradient
          colors={['#DE3046', 'rgba(0,0,0,0)']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
        >
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Gap height={15} />
          <View style={styles.info}>
            <View style={styles.infoLeft}>
              <Image source={IcComment} style={styles.icon} />
              <Gap width={5} />
              <Text style={styles.textInfo}>{totalComment} Comments</Text>
              <Gap width={10} />
              <Image source={IcTime} style={styles.icon} />
              <Gap width={5} />
              <Text style={styles.textInfo}>
                <TimeAgo time={date} />
              </Text>
              <Gap width={10} />
            </View>
            <TouchableOpacity onPress={() => onShare()}>
              <Image source={IcShare} style={styles.iconShare} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

Highlight.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  image: PropTypes.string,
  totalComment: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  date: PropTypes.string,
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
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  iconShare: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  textInfo: {
    fontSize: 8,
    color: '#FFFFFF',
  },
});
