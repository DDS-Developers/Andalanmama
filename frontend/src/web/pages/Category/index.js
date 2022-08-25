import React from 'react';
import { array, func, object } from 'prop-types';
import CategoryContainer from '../../../containers/Category';
import PageWrapper from '../../components/Page/PageWrapper';
import Container from '../../components/Page/Container';
import PageInner from '../../components/Page/PageInner';
import PageContent from '../../components/Page/PageContent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import MetaTag from '../../components/MetaTag';
import NotFound from '../../components/NotFound';
import Top from './Top';
import Recipe from './Recipe';
import Deco from './Deco';
import DecoLeft from './decoLeft.png';
import DecoRight from './decoRight.png';

const CategoryContent = props => (
  <PageWrapper>
    <MetaTag
      title="Kategori Resep - Andalan Mama by Filma"
      description="Temukan kategori resep hidangkan masakan terbaik untuk keluarga dengan Filma"
    />
    <Deco>
      <img className="_deco-left" src={DecoLeft} alt="" />
      <img className="_deco-right" src={DecoRight} alt="" />
    </Deco>
    <PageInner>
      <Header />
      <PageContent>
        <Container>
          <Top categories={props.categories} {...props} />
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

CategoryContent.propTypes = {
  categories: array,
  recipe: object,
  nextPage: func,
};

const Category = props => <CategoryContainer Layout={CategoryContent} {...props} />;

export default Category;
