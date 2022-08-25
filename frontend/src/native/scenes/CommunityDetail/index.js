import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  RefreshControl,
  Share,
  TouchableOpacity,
} from 'react-native';
import { Spinner } from 'native-base';
import HTMLView from 'react-native-htmlview';
import TimeAgo from 'react-native-timeago';

import Header from '../../components/Header';
import Gap from '../../components/Gap';
import { withCommunity } from '../../providers/Community';

import IcComment from './ic-comment-black.png';
import IcShare from './ic-share-black.png';
import IcTime from './ic-time-black.png';
import IcSend from './ic-send.png';
import Comment from './Comment';

const CommunityDetail = props => {
  const [refreshing, setRefreshing] = useState(false);
  const [message, setMessage] = useState('');

  const onRefresh = () => {
    // eslint-disable-next-line prefer-destructuring
    const params = props.route.params;
    setRefreshing(true);
    props.loadCommunityDetail(params.id);
    setRefreshing(false);
  };

  useEffect(() => {
    if (!props.loadingReply) {
      // eslint-disable-next-line prefer-destructuring
      const params = props.route.params;
      props.loadCommunityDetail(params.id);
    }
  }, [props.loadingReply]);

  const onSubmit = () => {
    // eslint-disable-next-line prefer-destructuring
    const params = props.route.params;
    const reply = {
      id: params.id,
      body: message,
    };
    props.addCommunityReply(reply);
    setMessage('');
  };

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

  const { loadingDetail, communityDetail } = props;
  return (
    <View style={styles.page}>
      <Header leftSettings={{ type: 'back' }} title="Forum" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {loadingDetail ? (
          <Spinner color="#888888" />
        ) : (
          communityDetail &&
          communityDetail !== null && (
            <Fragment>
              <View style={styles.wrapper}>
                <Gap height={30} />
                <Text style={styles.textTitle}>{communityDetail.get('title')}</Text>
                <Gap height={20} />
                <Image source={{ uri: communityDetail.get('image') }} style={styles.image} />
                <Gap height={15} />
                <View style={styles.info}>
                  <View style={styles.infoLeft}>
                    <Image source={IcComment} style={styles.icon} />
                    <Gap width={5} />
                    <Text style={styles.textInfo}>
                      {communityDetail.get('replies_count')} Reply
                    </Text>
                    <Gap width={10} />
                    <Image source={IcTime} style={styles.icon} />
                    <Gap width={5} />
                    <Text style={styles.textInfo}>
                      <TimeAgo time={communityDetail.get('created_at')} />
                    </Text>
                    <Gap width={10} />
                  </View>
                  <TouchableOpacity onPress={() => onShare()} style={styles.btnShare}>
                    <Image source={IcShare} style={styles.iconShare} />
                    <Gap width={5} />
                    <Text style={styles.textInfo}>Share</Text>
                  </TouchableOpacity>
                </View>
                <Gap height={20} />
                <HTMLView
                  value={`<div>${JSON.parse(
                    communityDetail.get('body').replace(/(\r\n|\n|\r)/gm, ''),
                  )}</div>`}
                />
                <Gap height={20} />
              </View>
              <View style={styles.wrapperComment}>
                <Gap height={20} />
                {communityDetail
                  .get('replies')
                  .get('data')
                  .count() > 0 &&
                  communityDetail
                    .get('replies')
                    .get('data')
                    .map((item, index) => (
                      <Comment
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        userId={item.get('user').get('id')}
                        image={item.get('user').get('image')}
                        name={item.get('user').get('fullname')}
                        message={item.get('body')}
                        date={item.get('created_at')}
                      />
                    ))}
              </View>
            </Fragment>
          )
        )}
      </ScrollView>
      <View style={styles.formReply}>
        <TextInput
          style={styles.input}
          placeholder="Reply Thread"
          value={message}
          onChangeText={e => setMessage(e)}
        />
        <TouchableOpacity style={styles.btnSend} onPress={() => onSubmit()}>
          <Gap width={15} />
          <Image source={IcSend} style={styles.iconSend} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

CommunityDetail.propTypes = {
  communityDetail: PropTypes.object,
  loadingDetail: PropTypes.bool,
  loadCommunityDetail: PropTypes.func,
  addCommunityReply: PropTypes.func,
  loadingReply: PropTypes.bool,
  route: PropTypes.object,
};

export default withCommunity(CommunityDetail);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnShare: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnSend: {
    flexDirection: 'row',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  wrapper: {
    paddingHorizontal: 16,
  },
  image: {
    width: 329,
    height: 194,
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
  iconShare: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  iconSend: {
    width: 27,
    height: 23,
    resizeMode: 'contain',
  },
  wrapperComment: {
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 16,
  },
  formReply: {
    backgroundColor: '#E83249',
    paddingVertical: 5,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderRadius: 10,
    height: 34,
    padding: 8,
    backgroundColor: 'white',
    flex: 1,
  },
});
