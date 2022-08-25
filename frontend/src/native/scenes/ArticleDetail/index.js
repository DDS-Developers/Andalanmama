import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, StyleSheet, Text, View, Linking } from 'react-native';
import HTMLView from 'react-native-htmlview';
import TimeAgo from 'react-native-timeago';
import Gap from '../../components/Gap';
import Header from '../../components/Header';
import IcTime from './ic-time.png';
import IcUser from './ic-user.png';

const ArticleDetail = ({ route }) => {
  const [article, setArticle] = useState(false);

  useEffect(() => {
    const { params } = route;
    setArticle(params.article);
  }, []);

  return (
    <View style={styles.page}>
      <Header leftSettings={{ type: 'back' }} title="Artikel" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        <Gap height={30} />
        {article && (
          <Image source={{ uri: article.get('image') }} style={styles.image} resizeMode="cover" />
        )}
        <Gap height={5} />
        <View style={styles.info}>
          <Image source={IcUser} style={styles.icon} />
          <Gap width={5} />
          {article && <Text style={styles.textInfo}>By {article.get('user').get('fullname')}</Text>}
          <Gap width={10} />
          <Image source={IcTime} style={styles.icon} />
          <Gap width={5} />
          {article && (
            <Text style={styles.textInfo}>
              <TimeAgo time={article.get('created_at')} />
            </Text>
          )}
        </View>
        <Gap height={20} />
        {article && <Text style={styles.textTitle}>{article.get('title').toUpperCase()}</Text>}
        <Gap height={20} />
        <View style={styles.line} />
        <Gap height={20} />
        {article && (
          <HTMLView
            value={`<div>${JSON.parse(article.get('body').replace(/(\r\n|\n|\r)/gm, ''))}</div>`}
            onLinkPress={url => Linking.openURL(url)}
            stylesheet={stylesBodyText}
          />
        )}
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

ArticleDetail.propTypes = {
  route: PropTypes.object,
};

export default ArticleDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 180,
  },
  wrapper: {
    paddingHorizontal: 16,
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
    color: '#000000',
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#EF3648',
  },
  line: {
    backgroundColor: '#b2bec3',
    height: 1,
  },
  textContent: {
    fontSize: 10,
    color: '#000000',
  },
});

const stylesBodyText = StyleSheet.create({
  p: {
    lineHeight: 26,
    color: 'black',
    fontSize: 14
  }
});
