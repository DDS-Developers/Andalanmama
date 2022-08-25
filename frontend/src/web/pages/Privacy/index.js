/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import PageWrapper from '../../components/Page/PageWrapper';
import PageInner from '../../components/Page/PageInner';
import PageContent from '../../components/Page/PageContent';
import Container from '../../components/Page/Container';
import Text from '../../components/Text';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MetaTag from '../../components/MetaTag';
import Title from '../../components/Title';
import ContentWrapper from '../Terms/ContentWrapper';

export const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <MetaTag
        title="Kebijakan Privasi - Andalan Mama by Filma"
        description="Temukan resep hidangkan masakan terbaik untuk keluarga dengan Filma"
      />
      <PageInner>
        <Header />
        <PageContent>
          <Container>
            <ContentWrapper>
              <Title className="_top--title" size={400} color="primary">
                Kebijakan Privasi
              </Title>
              <Text className="_intro">
                HARAP BACA KEBIJAKAN PRIVASI INI DENGAN CERMAT SEBELUM MENGGUNAKAN SITUS DAN/ATAU
                APLIKASI INI
              </Text>
              <Text tagName="h4">Informasi yang kami terima</Text>
              <Text>
                Informasi yang Anda berikan secara sukarela atau atas persetujuan Anda sebelumnya
                seperti:
              </Text>
              <ul>
                <Text tagName="li">
                  Informasi yang kami terima adalah informasi yang anda berikan pada situs atau
                  aplikasi Andalan Mama secara sukarela, yaitu seperti data diri saat Anda melakukan
                  pendaftaran.
                </Text>
                <Text tagName="li">
                  Konten yang ada masukkan, seperti resep, artikel, pertanyaan, jawaban, dan lainnya
                  yang terdapat pada situs atau aplikasi Andalan Mama.
                </Text>
                <Text tagName="li">
                  Informasi teman yang Anda masukkan atau bisa di-import dari kontak email Anda
                  melalui persetujuan Anda sebelumnya.
                </Text>
              </ul>
              <Text>Informasi dari aktivitas yang Anda lakukan di situs Andalan Mama</Text>
              <ul>
                <Text tagName="li">
                  Seperti aktifitas "like" di postingan yang terdapat di situs atau aplikasi Andalan
                  Mama
                </Text>
                <Text tagName="li">
                  Informasi perangkat dan browser yang Anda gunakan saat mengakses situs atau
                  aplikasi Andalan Mama. Kami dapat mengambil informasi mengenai perangkat atau tipe
                  browser, lokasi dan IP Address, dan halaman-halaman yang Anda kunjungi saat Anda
                  mengakses Andalan Mama
                </Text>
                <Text tagName="li">Cookie Information.</Text>
              </ul>
              <Text>
                Informasi yang kami dapat dari pihak ketiga atas persetujuan Anda sebelumnya
              </Text>
              <ul>
                <Text tagName="li">
                  Seperti email, kontak, atau data lainnya di luar situs atau aplikasi Andalan Mama
                </Text>
              </ul>
              <Text tagName="h4">Informasi yang akan ditampilkan untuk umum di Andalan Mama</Text>
              <ul>
                <Text tagName="li">
                  Andalan Mama akan memperlihatkan data diri seperti nama, jenis kelamin, profil
                  foto pada profil Anda sebagai member Andalan Mama.
                </Text>
                <Text tagName="li">
                  Selain itu di profil Anda juga akan muncul data resep atau artikel yang telah Anda
                  daftarkan ke Andalan Mama.
                </Text>
              </ul>
              <Text tagName="h4">Informasi yang berhubungan dengan pihak lain</Text>
              <ul>
                <Text tagName="li">
                  Andalan Mama akan mempublikasikan konten data yang Anda share atau bagikan ke
                  sosial media lainnya sesuai dengan persetujuan Anda sebelumnya.
                </Text>
                <Text tagName="li">
                  Andalan Mama berhak memberikan izin mempublikasikan konten resep, artikel, bumbu
                  dan bahan yang ada di Andalan Mama kepada pihak sponsor untuk kepentingan promosi
                  dan kepentingan lainnya
                </Text>
                <Text tagName="li">
                  Semua resep yang masuk di situs atau aplikasi Andalan Mama, baik yang diposting
                  oleh admin dan member, menjadi hak milik Andalan Mama berupa digital asset. Segala
                  tuntutan yang datang dari pihak ketiga atas semua resep yang di posting member,
                  menjadi tanggung jawab member yang bersangkutan, dalam hal ini Andalan Mama
                  dibebaskan dan tidak terkait dari tuntutan apapun atas penggunaan materi konten.
                </Text>
              </ul>
              <Text tagName="h4">Fungsi Informasi yang Anda berikan</Text>
              <Text>
                Kami menggunakan informasi yang Anda berikan untuk memberikan kenyamanan layanan
                terbaik di Andalan Mama . Dengan informasi yang Anda berikan, kami akan
                menggunakannya dengan detail seperti berikut :
              </Text>
              <ul>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginBottom: 10,
                  }}
                >
                  <Text tagName="strong" style={{ marginTop: 3, marginRight: 10 }}>
                    1.
                  </Text>
                  <div>
                    <div style={{ marginBottom: 4 }}>
                      <Text tagName="strong">Mengatur layanan</Text>
                    </div>
                    <Text>
                      Kami menggunakan informasi Anda untuk mengatur dan menjaga layanan kami tetap
                      nyaman bagi Anda. Selain itu, informasi yang Anda berikan juga kami gunakan
                      untuk mengukur dan menganalisa demi perbaikan layanan kami. Kami juga
                      menggunakan informasi yang Anda berikan sebagai pencegahan terjadinya hal-hal
                      ilegal yang dapat menimbulkan ketidaknyamanan Anda.
                    </Text>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginBottom: 10,
                  }}
                >
                  <Text tagName="strong" style={{ marginTop: 3, marginRight: 10 }}>
                    2.
                  </Text>
                  <div>
                    <div style={{ marginBottom: 4 }}>
                      <Text tagName="strong">Kemudahan menghubungi Anda</Text>
                    </div>
                    <Text>
                      Informasi yang Anda berikan juga dapat kami gunakan untuk menghubungi Anda
                      secara langsung. Baik dalam rangka peningkatan layanan atau apabila terkait
                      dengan promosi-promosi tertentu yang mungkin terdapat pada Andalan Mama.
                    </Text>
                  </div>
                </div>
              </ul>

              <Text tagName="h4">Bagaimana mengubah informasi Anda</Text>
              <Text>
                Informasi yang Anda masukkan seperti nama, nomor telepon, alamat email dan lainnya
                dapat Anda ubah sesuai keinginan dan data terbaru Anda saat itu.
              </Text>

              <Text tagName="h4">Perlindungan Informasi</Text>
              <Text>
                Untuk melindungi informasi atau data diri Anda, pastikan lakukan log out setiap
                selesai pemakaian Andalan Mama. Demi keamanan data diri dan privasi Anda, jangan
                sebarkan atau memberitahukan password Anda ke orang lain
              </Text>
              <Text>
                Jika Anda menggunakan kompute r publik seperti di warnet, atau kantor, pastikan
                browser Anda tidak secara otomatis mengingat password Anda
              </Text>

              <Text tagName="h4">Lainnya</Text>
              <Text>
                Kebijakan privasi ini dapat berubah sewaktu-waktu tanpa pemberitahuan apapun kepada
                seluruh member Andalan Mama.
              </Text>
            </ContentWrapper>
          </Container>
        </PageContent>
        <Footer />
      </PageInner>
    </PageWrapper>
  );
};

// ArticlePageContent.propTypes = {
//   fetchArticle: PropTypes.func,
//   highlight: PropTypes.array,
//   articles: PropTypes.object,
// };

export default PrivacyPage;
