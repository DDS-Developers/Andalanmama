import React from 'react';
import { func, object, string } from 'prop-types';
import SearchContainer from '../../../containers/Search';
import Container from '../../components/Page/Container';
import PageWrapper from '../../components/Page/PageWrapper';
import PageInner from '../../components/Page/PageInner';
import PageContent from '../../components/Page/PageContent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import NotFound from '../../components/NotFound';
import Top from './Top';
import Recipe from './Recipe';
import Deco from './Deco';
import DecoLeft from './decoLeft.png';
import DecoRight from './decoRight.png';

const SearchContent = props => (
  <PageWrapper>
    <Deco>
      <img className="_deco-left" loading="lazy" src={DecoLeft} alt="" />
      <img className="_deco-right" loading="lazy" src={DecoRight} alt="" />
    </Deco>
    <PageInner>
      <Header />
      <PageContent>
        <Container>
          <Top {...props} />
        </Container>
        {props.recipe.data.length > 0 && <Recipe recipes={props.recipe.data} />}
        {props.recipe.data.length === 0 && (
          <NotFound
            title="Pencarian tidak ditemukan"
            text="Resep yang anda cari belum terdapat pada konten kami"
          />
        )}

        {props.recipe.current_page < props.recipe.last_page && (
          <div style={{ textAlign: 'center' }}>
            <Button onClick={props.nextPage}> Muat lebih banyak </Button>
          </div>
        )}
      </PageContent>
      <Footer />
    </PageInner>
  </PageWrapper>
);

SearchContent.propTypes = {
  query: string,
  recipe: object,
  nextPage: func,
};

const Search = props => <SearchContainer Layout={SearchContent} {...props} />;

export default Search;
