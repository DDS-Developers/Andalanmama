import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-laravel-paginex';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import indo from 'date-fns/locale/id';
import CardArticleList from '../../../components/CardArticleList';
import Utils from '../../../helpers/utils';

const ListLayout = props => {
  const { articles, article, fetchArticle } = props;

  const items = articles.map(item => ({
    id: item.id,
    title: item.title,
    image: item.image,
    permalink: `/article/detail/${item.slug}`,
    user: item.user.fullname,
    time: distanceInWordsToNow(new Date(Utils.convertDateForIos(item.created_at)), {
      addSuffix: true,
      locale: indo,
    }),
  }));

  return (
    <React.Fragment>
      <div className="_list">
        <CardArticleList items={items} column="3" />
      </div>

      <Pagination
        containerClass="_pagination"
        numbersCountForShow={1}
        changePage={fetchArticle}
        data={article}
        nextButtonText="Selanjutnya"
        prevButtonText="Sebelumnya"
      />
    </React.Fragment>
  );
};

ListLayout.propTypes = {
  article: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
  fetchArticle: PropTypes.func.isRequired,
};

export default ListLayout;
