import React from 'react';
import { Link } from 'react-router-dom';

import PageWrapper from '../../components/Page/PageWrapper';
import PageInner from '../../components/Page/PageInner';
import Container from '../../components/Page/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Deco from '../DetailRecipe/Deco';
import DecoLeft from '../DetailRecipe/decoLeft.png';
import DecoRight from '../DetailRecipe/decoRight.png';

import image404 from './404.png';
import Wrapper404 from './Wrapper';

const NotFound = () => (
  <PageWrapper>
    <Deco>
      <img className="_deco-left" loading="lazy" src={DecoLeft} alt="" />
      <img className="_deco-right" loading="lazy" src={DecoRight} alt="" />
    </Deco>
    <PageInner>
      <Header hideHeader />
      <Wrapper404>
        <Container>
          <img src={image404} alt="" />
          <p>
            Maaf, Halaman yang anda tuju tidak ditemukan, <br />
            kembali ke <Link to="/">Menu Utama</Link>
          </p>
        </Container>
      </Wrapper404>
      <Footer />
    </PageInner>
  </PageWrapper>
);

export default NotFound;
