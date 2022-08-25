import React from 'react';
import PropTypes from 'prop-types';
import HomepageContainer from '../../../containers/Homepage';
import PageWrapper from '../../components/Page/PageWrapper';
import PageInner from '../../components/Page/PageInner';
import Container from '../../components/Page/Container';
import PageContent from '../../components/Page/PageContent';
import MetaTag from '../../components/MetaTag';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Top from './Top';
import Favorite from './Favorite';
import Article from './Article';
import Banner from './Banner';
// import AppInfo from './AppInfo';
import Deco from './Deco';
import DecoLeft from './decoLeft.png';
import DecoRight from './decoRight.png';

export const HomepageContent = props => {
  const { recipes, categories, articles, banner } = props;
  return (
    <PageWrapper>
      <MetaTag />
      <Deco>
        <img className="_deco-left" loading="lazy" src={DecoLeft} alt="" />
        <img className="_deco-right" loading="lazy" src={DecoRight} alt="" />
      </Deco>
      <PageInner>
        <Header />
        <PageContent>
          <Container>
            <Top categories={categories} {...props} />
          </Container>
          <Favorite recipes={recipes} />
          {/* <AppInfo /> */}
          <Article articles={articles} />
        </PageContent>
        <Footer />
        {Object.keys(banner).length > 0 ? <Banner banner={banner} /> : null}
      </PageInner>
    </PageWrapper>
  );
};

HomepageContent.propTypes = {
  articles: PropTypes.array,
  categories: PropTypes.array,
  recipes: PropTypes.array,
  banner: PropTypes.object,
};

const Homepage = props => <HomepageContainer Layout={HomepageContent} {...props} />;

export default Homepage;
