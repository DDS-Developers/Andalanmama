import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity, Image, Share } from 'react-native';
import TimeAgo from 'react-native-timeago';
import IcComment from './ic-comment-black.png';
import IcShare from './ic-share-black.png';
import IcTime from './ic-time-black.png';
import Gap from '../../../components/Gap';

const Thread = ({ onPress, title, image, totalComment, date }) => {
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
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={4}>
          {title}
        </Text>
        <Gap width={10} />
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Gap height={15} />
      <View style={styles.info}>
        <View style={styles.infoLeft}>
          <Image source={IcComment} style={styles.icon} />
          <Gap width={5} />
          <Text style={styles.textInfo}>{totalComment} Reply</Text>
          <Gap width={10} />
          <Image source={IcTime} style={styles.icon} />
          <Gap width={5} />
          <Text style={styles.textInfo}>
            <TimeAgo time={date} />
          </Text>
          <Gap width={10} />
        </View>
        <TouchableOpacity onPress={() => onShare()} style={styles.btnShare}>
          <Image source={IcShare} style={styles.iconShare} />
          <Gap width={5} />
          <Text style={styles.textInfo}>Share</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

Thread.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  image: PropTypes.string,
  totalComment: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  date: PropTypes.string,
};

export default Thread;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#b2bec3',
  },
  btnShare: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'cover',
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
  textInfo: {
    fontSize: 8,
    color: '#000000',
  },
  title: {
    fontSize: 13,
    color: '#000000',
    flex: 1,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
  },
  iconShare: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
});
