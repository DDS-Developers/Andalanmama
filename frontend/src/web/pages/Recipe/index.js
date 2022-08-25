import React from 'react';
import PropTypes from 'prop-types';
import ExploreRecipeContainer from '../../../containers/ExploreRecipe';
import PageWrapper from '../../components/Page/PageWrapper';
import PageInner from '../../components/Page/PageInner';
import PageContent from '../../components/Page/PageContent';
import Container from '../../components/Page/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MetaTag from '../../components/MetaTag';
import Top from './Top';
import Favorite from './Favorite';
import Video from './Video';
// import AppInfo from './AppInfo';
import Deco from './Deco';
import DecoLeft from './decoLeft.png';
import DecoRight from './decoRight.png';

export const ExploreRecipeContent = props => {
  const { favorites, categories, recipebook } = props;
  return (
    <PageWrapper>
      <MetaTag
        title="Resep - Andalan Mama by Filma"
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
            <Top categories={categories} {...props} />
          </Container>
          <Favorite favorites={favorites} />
          <Container>
            <Video recipebook={recipebook} />
            {/* <AppInfo /> */}
          </Container>
        </PageContent>
        <Footer />
      </PageInner>
    </PageWrapper>
  );
};

ExploreRecipeContent.propTypes = {
  favorites: PropTypes.array,
  categories: PropTypes.array,
  recipebook: PropTypes.array,
};

const ExploreRecipe = props => <ExploreRecipeContainer Layout={ExploreRecipeContent} {...props} />;

export default ExploreRecipe;
