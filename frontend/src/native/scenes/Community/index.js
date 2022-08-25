import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, RefreshControl, Spinner } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Gap from '../../components/Gap';
import Highlight from './Highlight';
import Thread from './Thread';
import { withCommunity } from '../../providers/Community';

const Community = props => {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    props.loadCommunityHighlight();
    props.loadCommunityThread();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    props.loadCommunityHighlight();
    props.loadCommunityThread();
    setRefreshing(false);
  };

  const {
    navigation,
    loadingHighlight,
    communityHighlight,
    loadingThread,
    communityThread,
  } = props;
  return (
    <View style={styles.page}>
      <Header title="Forum" leftSettings={{ type: 'back' }} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <Gap height={30} />
        <Text style={styles.title}>Highlight</Text>
        <Gap height={10} />
        <View style={styles.wrapperHighlight}>
          {loadingHighlight ? (
            <Spinner color="#888888" />
          ) : (
            communityHighlight &&
            communityHighlight.count() > 0 && (
              <Highlight
                onPress={() =>
                  navigation.navigate('CommunityDetail', { id: communityHighlight.get('id') })
                }
                title={communityHighlight.get('title')}
                image={communityHighlight.get('image')}
                date={communityHighlight.get('created_at')}
                totalComment={communityHighlight.get('replies_count')}
              />
            )
          )}
        </View>
        <Gap height={30} />
        <Text style={styles.title}>Thread Lainnya</Text>
        <Gap height={10} />
        <View style={styles.wrapperThread}>
          {loadingThread ? (
            <Spinner color="#888888" />
          ) : (
            <>
              {communityThread && communityThread.count() > 0 ? (
                <>
                  {communityThread.get('data').map((item, index) => (
                    <Thread
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      onPress={() => navigation.navigate('CommunityDetail', { id: item.get('id') })}
                      title={item.get('title')}
                      image={item.get('image')}
                      date={item.get('created_at')}
                      totalComment={item.get('replies_count')}
                    />
                  ))}
                </>
              ) : null}
            </>
          )}
        </View>
        {/* <View style={styles.wrapperThread}>
          { loadingThread ?
            <Spinner color="#888888" />
            :
            (communityThread && communityThread.count() > 0) &&
            communityThread.get('data').map((item, index) => <Thread
                                    key={index}
                                    onPress={() => navigation.navigate('CommunityDetail', {id: item.get('id')})}
                                    title={item.get('title')}
                                    image={item.get('image')}
                                    date={item.get('created_at')}
                                    totalComment={item.get('replies_count')}
                                />)
          )}
          </View> */}
      </ScrollView>
    </View>
  );
};

Community.propTypes = {
  communityHighlight: PropTypes.object,
  loadingHighlight: PropTypes.bool,
  loadCommunityHighlight: PropTypes.func,
  communityThread: PropTypes.object,
  loadingThread: PropTypes.bool,
  loadCommunityThread: PropTypes.func,
};

export default withCommunity(Community);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperHighlight: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  wrapperThread: {
    paddingHorizontal: 16,
  },
});
