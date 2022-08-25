import React from 'react';
import PropTypes from 'prop-types';

import DetailArticleContainer from '../../../containers/DetailArticle';
import PageWrapper from '../../components/Page/PageWrapper';
import PageInner from '../../components/Page/PageInner';
import PageContent from '../../components/Page/PageContent';
import Container from '../../components/Page/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MetaTag from '../../components/MetaTag';
import NotFound from '../../components/NotFound';

import More from './More';
import Detail from './Detail';
import Deco from '../Articlepage/Deco';
import DecoLeft from '../Articlepage/decoLeft.png';
import DecoRight from '../Articlepage/decoRight.png';

const DetailArticleContent = props => {
  const { article } = props;
  return (
    <PageWrapper>
      {article ? (
        <MetaTag title={article.meta_title} description={article.meta_desc} image={article.image} />
      ) : null}

      <Deco>
        <img className="_deco-left" loading="lazy" src={DecoLeft} alt="" />
        <img className="_deco-right" loading="lazy" src={DecoRight} alt="" />
      </Deco>
      <PageInner>
        <Header />
        {article ? (
          <PageContent>
            <Container>
              <Detail article={article} />
            </Container>
          </PageContent>
        ) : null}
        {article === null ? (
          <NotFound
            title="Artikel tidak ditemukan"
            text="Artikel yang anda cari belum terdapat pada konten kami"
          />
        ) : null}
        {article ? <More articles={article.related} /> : null}

        <Footer />
      </PageInner>
    </PageWrapper>
  );
};

DetailArticleContent.propTypes = {
  article: PropTypes.object,
};

const DetailArticle = props => <DetailArticleContainer Layout={DetailArticleContent} {...props} />;

export default DetailArticle;
