import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../components/Page/PageWrapper';
import PageInner from '../../components/Page/PageInner';
import PageContent from '../../components/Page/PageContent';
import Container from '../../components/Page/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Top from './Top';
import Recipe from './Recipe';
import Deco from '../Recipe/Deco';
import DecoLeft from '../Recipe/decoLeft.png';
import DecoRight from '../Recipe/decoRight.png';

const HomeList = props => {
  const { categories } = props;
  return (
    <PageWrapper>
      <Deco>
        <img className="_deco-left" loading="lazy" src={DecoLeft} alt="" />
        <img className="_deco-right" loading="lazy" src={DecoRight} alt="" />
      </Deco>
      <PageInner>
        <Header />
        <PageContent>
          <Container>
            <Top categories={categories} />
            <Recipe />
          </Container>
        </PageContent>
        <Footer />
      </PageInner>
    </PageWrapper>
  );
};

HomeList.propTypes = {
  categories: PropTypes.array,
};

export default HomeList;
