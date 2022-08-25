import React, { useEffect, useState, Fragment } from 'react';
import { compose } from 'redux';
import { StyleSheet, View, Text, ScrollView, RefreshControl, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';

import { withArticle } from '../../providers/Article';
import Header from '../../components/Header';
import Gap from '../../components/Gap';
import Highlight from './Highlight';
import Latest from './Latest';
import { withExplore } from '../../providers/Explore';

import IconCampaign from '../Explore/Campaign/icon';

const Article = props => {
  const [refreshing, setRefreshing] = useState(false);
  const [articleAll, setArticleAll] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setArticleAll([]);
    props.loadArticleHighlight();
    props.loadArticleLatest(page);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setArticleAll([]);
    setPage(1);
    props.loadArticleHighlight();
    props.loadArticleLatest(1);
    setRefreshing(false);
  };

  useEffect(() => {
    if (props.articleLatest && props.articleLatest.count() > 0) {
      const data = props.articleLatest.get('data');
      const newData = [...articleAll];
      // eslint-disable-next-line array-callback-return
      data.map(item => {
        newData.push({
          id: item.get('id'),
          title: item.get('title'),
          image: item.get('image'),
          user: item.get('user').get('fullname'),
          date: item.get('created_at'),
          origin: item,
        });
      });
      setArticleAll(newData);
      setIsLoading(false);
    } else {
      setArticleAll([]);
      setIsLoading(false);
    }
  }, [props.articleLatest]);

  useEffect(() => {
    props.loadArticleLatest(page);
  }, [page]);

  const onLoadMore = () => {
    if (!isLoading) {
      setPage(page + 1);
      setIsLoading(true);
    }
  };

  const RenderHighlight = () => (
    <Fragment>
      <Gap height={30} />
      <Text style={styles.title}>Highlight</Text>
      <Gap height={10} />
      {loadingHighlight && <Spinner color="#888888" />}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Gap width={16} />
        {!loadingHighlight &&
          (articleHighlight && articleHighlight.count() > 0) &&
          articleHighlight.get('data').map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>
              <Highlight
                onPress={() => navigation.navigate('ArticleDetail', { article: item })}
                title={item.get('title')}
                image={item.get('image')}
                user={item.get('user').get('fullname')}
                date={item.get('created_at')}
                desc={item.get('meta_desc')}
              />
              <Gap width={10} />
            </Fragment>
          ))}
      </ScrollView>
      <Gap height={15} />
      <Text style={styles.title}>Terbaru</Text>
      <Gap height={10} />
      {loadingLatest && <Spinner color="#888888" />}
    </Fragment>
  );

  // eslint-disable-next-line react/prop-types
  const RenderItem = ({ item }) => (
    <Latest
      onPress={() => navigation.navigate('ArticleDetail', { article: item.origin })}
      title={item.title}
      image={item.image}
      user={item.user}
      date={item.created_at}
    />
  );

  const { navigation, loadingHighlight, articleHighlight, loadingLatest } = props;
  return (
    <View style={styles.page}>
      <Header title="Artikel" />
      <FlatList
        ListHeaderComponent={<RenderHighlight />}
        columnWrapperStyle={styles.flatList}
        data={articleAll}
        renderItem={RenderItem}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onEndReachedThreshold={0.1}
        onEndReached={() => onLoadMore()}
      />
      {isLoading && <Spinner color="#888888" />}
      <IconCampaign {...props}/>
    </View>
  );
};

Article.propTypes = {
  articleHighlight: PropTypes.object,
  loadingHighlight: PropTypes.bool,
  loadArticleHighlight: PropTypes.func,
  articleLatest: PropTypes.object,
  loadingLatest: PropTypes.bool,
  loadArticleLatest: PropTypes.func,
  campaign: PropTypes.object,
  webviewCampaign: PropTypes.func,
};

export default compose(
  withArticle,
  withExplore,
)(Article);


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  wrapperLatest: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  flatList: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});
