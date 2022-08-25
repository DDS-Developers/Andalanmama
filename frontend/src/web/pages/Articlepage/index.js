import React from 'react';
import PropTypes from 'prop-types';
import ArticlePageContainer from '../../../containers/ArticlePage';
import PageWrapper from '../../components/Page/PageWrapper';
import PageInner from '../../components/Page/PageInner';
import PageContent from '../../components/Page/PageContent';
import Container from '../../components/Page/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MetaTag from '../../components/MetaTag';
import ArticleSlider from './ArticleSlider';
import Explore from './Explore';
import Article from './Article';
import Deco from './Deco';
import DecoLeft from './decoLeft.png';
import DecoRight from './decoRight.png';

export const ArticlePageContent = props => {
  const { highlight, articles, fetchArticle } = props;
  return (
    <PageWrapper>
      <MetaTag
        title="Tips & Artikel - Andalan Mama by Filma"
        description="Temukan resep hidangkan masakan terbaik untuk keluarga dengan Filma"
      />
      <Deco>
        <img className="_deco-left" src={DecoLeft} alt="" />
        <img className="_deco-right" src={DecoRight} alt="" />
      </Deco>
      <PageInner>
        <Header />
        <PageContent>
          <Container>
            <ArticleSlider articles={highlight} />
            {/* <Explore articles={articles.data.slice(0, 1)} page={articles.current_page} /> */}
            <Explore articles={articles.data.slice(0, 1)} />
            <Article articles={articles} fetchArticle={fetchArticle} />
          </Container>
        </PageContent>
        <Footer />
      </PageInner>
    </PageWrapper>
  );
};

ArticlePageContent.propTypes = {
  fetchArticle: PropTypes.func,
  highlight: PropTypes.array,
  articles: PropTypes.object,
};

const ArticlePage = props => (
  <ArticlePageContainer Layout={ArticlePageContent} count={3} {...props} />
);

export default ArticlePage;
