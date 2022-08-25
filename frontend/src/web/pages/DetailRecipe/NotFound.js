import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Page/Container';
import image404 from './404.png';
import Wrapper404 from './Wrapper404';

const NotFound = () => (
  <Wrapper404>
    <Container>
      <img src={image404} alt="" />
      <p>
        Maaf, Halaman yang anda tuju tidak ditemukan, <br />
        kembali ke <Link to="/recipe">Menu Utama</Link>
      </p>
    </Container>
  </Wrapper404>
);

export default NotFound;
