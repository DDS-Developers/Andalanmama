/* eslint-disable react/no-unescaped-entities */
/**
 * scenes/PrivacyPolicy/index.js
 *
 */
import React, { PureComponent } from 'react';
import { Container, H3, View } from 'native-base';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Text from '../../components/Text';
import Paragraph from '../Help/Paragraph';
import Title from '../Help/Title';
import Ul from '../Help/Ul';
import LiNum from '../Help/LiNumber';
import Wrapper from './Wrapper';

export class PrivacyPolicyScene extends PureComponent {
  static navigationOptions = {
    title: 'Privacy Policy',
    header: null,
  };

  render() {
    return (
      <Container>
        <Header title="Privacy Policy" leftSettings={{ type: 'back' }} />
        <Content>
          <Wrapper>
            <H3
              style={{
                textAlign: 'center',
                borderBottomWidth: 1,
                borderColor: '#000000',
                paddingBottom: 20,
                marginBottom: 30,
              }}
            >
              KEBIJAKAN PRIVASI APLIKASI DAN WEBSITEANDALAN MAMA BY FILMA
            </H3>
            <Paragraph marginBottom="25" textStyles={{ size: 400 }}>
              HARAP BACA KEBIJAKAN PRIVASI INI DENGAN CERMAT SEBELUM MENGGUNAKAN SITUS DAN/ATAU
              APLIKASI INI
            </Paragraph>
            <Title>Informasi yang kami terima</Title>
            <Paragraph>
              Informasi yang Anda berikan secara sukarela atau atas persetujuan Anda sebelumnya
              seperti:
            </Paragraph>
            <Ul>
              <LiNum no="1">
                Informasi yang kami terima adalah informasi yang anda berikan pada situs atau
                aplikasi Andalan Mama secara sukarela, yaitu seperti data diri saat Anda melakukan
                pendaftaran.
              </LiNum>
              <LiNum no="2">
                Konten yang ada masukkan, seperti resep, artikel, pertanyaan, jawaban, dan lainnya
                yang terdapat pada situs atau aplikasi Andalan Mama.
              </LiNum>
              <LiNum no="3">
                Informasi teman yang Anda masukkan atau bisa di-import dari kontak email Anda
                melalui persetujuan Anda sebelumnya.
              </LiNum>
            </Ul>
            <Paragraph>Informasi dari aktivitas yang Anda lakukan di situs Andalan Mama</Paragraph>
            <Ul>
              <LiNum no="1">
                Seperti aktifitas "like" di postingan yang terdapat di situs atau aplikasi Andalan
                Mama
              </LiNum>
              <LiNum no="2">
                Informasi perangkat dan browser yang Anda gunakan saat mengakses situs atau aplikasi
                Andalan Mama. Kami dapat mengambil informasi mengenai perangkat atau tipe browser,
                lokasi dan IP Address, dan halaman-halaman yang Anda kunjungi saat Anda mengakses
                Andalan Mama
              </LiNum>
              <LiNum no="3">Cookie Information.</LiNum>
            </Ul>
            <Paragraph>
              Informasi yang kami dapat dari pihak ketiga atas persetujuan Anda sebelumnya
            </Paragraph>
            <Ul>
              <LiNum no="1">
                Seperti email, kontak, atau data lainnya di luar situs atau aplikasi Andalan Mama
              </LiNum>
            </Ul>
            <Title>Informasi yang akan ditampilkan untuk umum di Andalan Mama</Title>
            <Ul>
              <LiNum no="1">
                Andalan Mama akan memperlihatkan data diri seperti nama, jenis kelamin, profil foto
                pada profil Anda sebagai member Andalan Mama.
              </LiNum>
              <LiNum no="2">
                Selain itu di profil Anda juga akan muncul data resep atau artikel yang telah Anda
                daftarkan ke Andalan Mama.
              </LiNum>
            </Ul>
            <Title>Informasi yang berhubungan dengan pihak lain</Title>
            <Ul>
              <LiNum no="1">
                Andalan Mama akan mempublikasikan konten data yang Anda share atau bagikan ke sosial
                media lainnya sesuai dengan persetujuan Anda sebelumnya.
              </LiNum>
              <LiNum no="2">
                Andalan Mama berhak memberikan izin mempublikasikan konten resep, artikel, bumbu dan
                bahan yang ada di Andalan Mama kepada pihak sponsor untuk kepentingan promosi dan
                kepentingan lainnya
              </LiNum>
              <LiNum no="3">
                Semua resep yang masuk di situs atau aplikasi Andalan Mama, baik yang diposting oleh
                admin dan member, menjadi hak milik Andalan Mama berupa digital asset. Segala
                tuntutan yang datang dari pihak ketiga atas semua resep yang di posting member,
                menjadi tanggung jawab member yang bersangkutan, dalam hal ini Andalan Mama
                dibebaskan dan tidak terkait dari tuntutan apapun atas penggunaan materi konten.
              </LiNum>
            </Ul>
            <Title>Fungsi Informasi yang Anda berikan</Title>
            <Paragraph>
              Kami menggunakan informasi yang Anda berikan untuk memberikan kenyamanan layanan
              terbaik di Andalan Mama . Dengan informasi yang Anda berikan, kami akan menggunakannya
              dengan detail seperti berikut :
            </Paragraph>
            <Ul>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
                <Text style={{ marginRight: 6 }}>1.</Text>
                <View>
                  <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Mengatur layanan</Text>
                  <Text>
                    Kami menggunakan informasi Anda untuk mengatur dan menjaga layanan kami tetap
                    nyaman bagi Anda. Selain itu, informasi yang Anda berikan juga kami gunakan
                    untuk mengukur dan menganalisa demi perbaikan layanan kami. Kami juga
                    menggunakan informasi yang Anda berikan sebagai pencegahan terjadinya hal-hal
                    ilegal yang dapat menimbulkan ketidaknyamanan Anda.
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
                <Text style={{ marginRight: 6 }}>2.</Text>
                <View>
                  <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>
                    Kemudahan menghubungi Anda
                  </Text>
                  <Text>
                    Informasi yang Anda berikan juga dapat kami gunakan untuk menghubungi Anda
                    secara langsung. Baik dalam rangka peningkatan layanan atau apabila terkait
                    dengan promosi-promosi tertentu yang mungkin terdapat pada Andalan Mama.
                  </Text>
                </View>
              </View>
            </Ul>

            <Title>Bagaimana mengubah informasi Anda</Title>
            <Paragraph>
              Informasi yang Anda masukkan seperti nama, nomor telepon, alamat email dan lainnya
              dapat Anda ubah sesuai keinginan dan data terbaru Anda saat itu.
            </Paragraph>

            <Title>Perlindungan Informasi</Title>
            <Paragraph>
              Untuk melindungi informasi atau data diri Anda, pastikan lakukan log out setiap
              selesai pemakaian Andalan Mama. Demi keamanan data diri dan privasi Anda, jangan
              sebarkan atau memberitahukan password Anda ke orang lain
            </Paragraph>
            <Paragraph>
              Jika Anda menggunakan kompute r publik seperti di warnet, atau kantor, pastikan
              browser Anda tidak secara otomatis mengingat password Anda
            </Paragraph>

            <Title>Lainnya</Title>
            <Paragraph>
              Kebijakan privasi ini dapat berubah sewaktu-waktu tanpa pemberitahuan apapun kepada
              seluruh member Andalan Mama.
            </Paragraph>
          </Wrapper>
        </Content>
      </Container>
    );
  }
}

export default PrivacyPolicyScene;
