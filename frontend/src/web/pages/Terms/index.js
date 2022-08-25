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
import ContentWrapper from './ContentWrapper';

export const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <MetaTag
        title="Syarat & Ketentuan - Andalan Mama by Filma"
        description="Temukan resep hidangkan masakan terbaik untuk keluarga dengan Filma"
      />
      <PageInner>
        <Header />
        <PageContent>
          <Container>
            <ContentWrapper>
              <Title className="_top--title" size={400} color="primary">
                Syarat & Ketentuan
              </Title>
              <Text className="_intro">
                HARAP BACA SYARAT DAN KETENTUAN INI DENGAN CERMAT SEBELUM MENGGUNAKAN APLIKASI INI
              </Text>
              <Text>
                Syarat penggunaan (selanjutnya disebut “Syarat Penggunaan”) ini berisi syarat yang
                harus Anda ketahui dalam menggunakan aplikasi resmi perangkat mobile Andalan Mama by
                Filma (selanjutnya disebut “Aplikasi / Aplikasi Kami”). Adapun hal-hal yang termasuk
                penggunaan Aplikasi adalah diantaranya; mengakses, menjelajah, atau mendaftar untuk
                menggunakan Aplikasi.
              </Text>
              <Text>Aplikasi dioperasikan oleh PT Smart Tbk.</Text>
              <Text>
                Dengan menggunakan Aplikasi Andalan Mama, Anda menyatakan menerima dan setuju untuk
                mematuhi Syarat Penggunaan yang ditetapkan berikut ini. Jika Anda tidak menyetujui
                Syarat Penggunaan tersebut, Anda tidak boleh menggunakan Aplikasi ini. Ketika kami
                menggunakan istilah "kami (subjek)", "kami (objek)" atau "miliki kami" kami merujuk
                pada Andalan Mama by Filma dan "Grup Kami" yang berarti entitas yang mengendalikan,
                dikendalikan oleh atau di bawah kendali umum.
              </Text>
              <Text tagName="h4">1. INFORMASI TENTANG KAMI</Text>
              <Text>
                Kami adalah salah satu perusahan publik produk konsumen berbasis kelapa sawit yang
                terintegrasi dan terkemuka di Indonesia yang berfokus pada produksi sawit yang
                lestari.
              </Text>
              <Text>
                Jika Anda punya pertanyaan atau keluhan tentang Aplikasi, atau terkait dengan
                Andalan Mama by Filma, silakan hubungi kami di admin.marketing@sinarmas-agri.com
              </Text>
              <Text tagName="h4">2. INFORMASI TENTANG APLIKASI KAMI</Text>
              <Text>
                Aplikasi kami memberikan Anda kemampuan untuk berbagi resep dengan pengguna lain di
                Aplikasi kami, dan menjelajah resep pengguna lain. Layanan aplikasi Andalan Mama by
                Filma diberikan secara gratis.
              </Text>
              <Text>
                Kami tidak menjamin bahwa Aplikasi kami, konten yang ada padanya, atau layanan yang
                mungkin diberikan oleh penyedia layanan pihak ketiga tersebut akan bebas dari
                kesalahan atau kelalaian.
              </Text>
              <Text tagName="h4">3. INFORMASI PENTING TERKAIT RESEP</Text>
              <Text>
                Aplikasi Andalan Mama tidak menyaring atau memeriksa resep sebelum ditampilkan
                (posting), sehingga mungkin ada resep yang kurang tepat atau tidak aman, bahan atau
                metode memasak yang kurang sesuai. Resep, komentar atau informasi lain yang
                diberikan pada Situs atau Aplikasi kami tidak dimaksudkan sebagai saran yang harus
                Anda ikuti, dan setiap penggunaan atau kepercayaan terhadap setiap resep atau konten
                lain yang diberikan pada Situs atau Aplikasi kami adalah risiko Anda sendiri.
              </Text>
              <Text tagName="h4">4. PENDAFTARAN DAN AKUN PENGGUNA</Text>
              <Text>
                Kami mengumpulkan informasi pribadi tentang pengguna kami untuk menyediakan produk,
                layanan, dan dukungan pelanggan kami. Tidak semua informasi yang diminta,
                dikumpulkan, dan diproses oleh kami adalah "Informasi Pribadi" karena tidak
                mengidentifikasi Anda sebagai orang alami. Ini akan mencakup sebagian besar "Konten
                Buatan Pengguna" yang Anda berikan kepada kami dengan maksud untuk dibagikan dengan
                pengguna lain. "Informasi Non-Pribadi" tersebut tidak dicakup oleh kebijakan privasi
                ini. Namun, karena informasi non-pribadi dapat digunakan secara agregat atau
                dihubungkan dengan informasi pribadi yang ada; ketika dalam formulir ini akan
                diperlakukan sebagai informasi pribadi. Dengan demikian, kebijakan privasi ini akan
                mencantumkan kedua jenis informasi demi transparansi.
              </Text>
              <Text>
                Dalam beberapa situasi, pengguna dapat memberi kami informasi pribadi tanpa kami
                memintanya, atau melalui cara yang tidak dimaksudkan untuk pengumpulan jenis
                informasi tertentu. Meskipun kami dapat mengambil langkah-langkah yang wajar untuk
                melindungi data ini, pengguna akan melewati sistem, proses, dan kontrol kami dan
                dengan demikian informasi yang diberikan tidak akan diatur oleh kebijakan privasi
                ini.
              </Text>
              <Text>
                Dalam beberapa situasi, pengguna dapat memberikan kami informasi pribadi melalui
                platform yang berada di luar kendali kami; misalnya melalui media sosial atau forum.
                Sementara setiap informasi yang dikumpulkan oleh kami diatur oleh Kebijakan Privasi
                ini, platform yang digunakan untuk berkomunikasi akan diatur oleh Kebijakan Privasi
                sendiri.
              </Text>
              <Text>
                Informasi yang kami minta, kumpulkan, dan prosesnya terutama digunakan untuk memberi
                pengguna produk atau layanan yang mereka minta. Lebih khusus lagi, kami dapat
                menggunakan informasi pribadi Anda untuk tujuan berikut:
              </Text>

              <ul>
                <Text tagName="li">Untuk menyediakan layanan atau produk yang Anda minta;</Text>
                <Text tagName="li">Untuk memfasilitasi pembuatan Kontrak Pengguna</Text>
                <Text tagName="li">Untuk memberikan dukungan teknis atau lainnya kepada Anda;</Text>
                <Text tagName="li">
                  Untuk menjawab pertanyaan tentang layanan kami, atau untuk menanggapi keluhan;
                </Text>
                <Text tagName="li">
                  Untuk mempromosikan program, produk, atau layanan kami yang lain yang mungkin
                  menarik bagi Anda (kecuali Anda memilih keluar dari komunikasi tersebut);
                </Text>
                <Text tagName="li">
                  Untuk memungkinkan debugging, menguji dan mengoperasikan platform kami;
                </Text>
                <Text tagName="li">
                  Untuk melakukan analisis data, meneliti dan membangun dan meningkatkan platform
                  kami;
                </Text>
                <Text tagName="li">
                  Untuk mematuhi kewajiban hukum dan peraturan; jika diizinkan atau diharuskan oleh
                  hukum; atau
                </Text>
                <Text tagName="li">
                  Untuk tujuan lain dengan persetujuan Anda, kecuali jika Anda menarik persetujuan
                  Anda untuk tujuan ini.
                </Text>
              </ul>

              <Text>
                Dasar 'pemrosesan hukum' di mana kami akan menggunakan informasi pribadi tentang
                pengguna kami adalah (tetapi tidak terbatas pada):
              </Text>

              <ul>
                <Text tagName="li">Ketika pengguna telah memberikan persetujuan;</Text>
                <Text tagName="li">
                  Bila perlu untuk pelaksanaan kontrak dimana pengguna menjadi salah satu pihaknya;
                </Text>
                <Text tagName="li">
                  Pemrosesan diperlukan untuk kepatuhan dengan kewajiban hukum kami;
                </Text>
                <Text tagName="li">
                  Pemrosesan diperlukan untuk melindungi kepentingan vital pengguna kami atau orang
                  lainnya.
                </Text>
                <Text tagName="li">
                  Pemrosesan dilakukan dalam mengejar kepentingan sah kami, di mana kepentingan ini
                  tidak melanggar hak-hak pengguna kami.
                </Text>
              </ul>

              <Text tagName="h4">5. PEMILIK KONTEN DAN HAK LISENSI</Text>
              <Text>
                Kami tidak mengklaim kepemilikan atas resep, foto, grafik, komentar, informasi,
                data, teks atau materi lain yang Anda unggah atau pasang pada Situs atau Aplikasi
                kami ("Content").
              </Text>
              <Text>
                Namun, ketika Anda mengunggah Konten termasuk resep Anda ke dalam Situs atau
                Aplikasi kami, Anda memberikan kepada kami lisensi bebas royalti, selamanya, yang
                tidak dapat dicabut, di seluruh dunia (yang juga bisa memberikan hak kepada afiliasi
                dan pihak ketiga, termasuk pengguna lain) untuk menggunakan, menyalin, mereproduksi,
                memproses, mengadaptasi, memodifikasi, menerjemahkan, menerbitkan, mengirimkan,
                menampilkan dan mendistribusikan (termasuk lewat pihak ketiga) atas Konten tersebut
                atau turunannya dalam satu atau seluruh media atau metode distribusi (yang tidak
                diketahui atau yang dikembangkan di kemudian hari) untuk setiap dan seluruh
                aktivitas usaha kami. Anda juga menyetujui bahwa:
              </Text>

              <ul>
                <Text tagName="li">
                  Lisensi ini termasuk hak bagi kami untuk memberikan promosi dan eksploitasi
                  komersial atas Konten yang diunggah ke Situs atau Aplikasi kami dengan sarana apa
                  pun, cara atau bentuk kepada atau dengan pengguna atau orang lain yang bermitra
                  dengan kami untuk distribusi atau publikasi Konten tersebut pada media dan layanan
                  lainnnya;
                </Text>
                <Text tagName="li">
                  penggunaan tambahan oleh kami, pengguna lain pada Situs atau Aplikasi kami dan
                  orang lain yang bermitra dengan kami untuk distribusi atau publikasi Konten Anda
                  dapat dilakukan tanpa pemberian kompensasi kepada Anda terkait dengan Konten yang
                  Anda unggah ke Situs atau Aplikasi kami;
                </Text>
                <Text tagName="li">
                  Anda mengotorisasi kami untuk melaporkan pelanggaran hak cipta atas nama Anda ke
                  agen yang ditentukan, pemilik situs, penyedia hosting atau kontak yang sesuai
                  lainnya ketika kami menemukan Konten Anda dibajak; dan
                </Text>
                <Text tagName="li">
                  Anda secara tanpa dapat dicabut kembali melepaskan seluruh hak-hak moral (dan hak
                  yang serupa di yuridikasi lain) yang Anda miliki dan akan Anda miliki baik
                  sekarang atau di masa mendatang terkait Konten Anda.
                </Text>
              </ul>

              <Text tagName="h4">6. HAK KEKAYAAN INTELEKTUAL</Text>
              <Text>
                Seluruh hak kekayaan intelektual materi pada Aplikasi kami, termasuk namun tanpa
                terbatas pada desain, grafis, teks, gambar, perangkat lunak, berkas lain dan
                pemilihan dan susunan lainnya (yang secara bersama-sama disebut dengan “Materi”)
                adalah milik kami dan/atau pemberi lisensi, Kecuali Konten milik Anda sendiri yang
                diunggah, termasuk resep Anda.
              </Text>
              <Text>
                Kami mengizinkan Anda untuk menggunakan Materi hanya selama, diperlukan untuk
                mengakses dan menggunakan Layanan Andalan Mama untuk penggunaan pribadi non
                komersial sesuai dengan Syarat Penggunaan ini. Seluruh hak lain secara tegas
                dilindungi undang-undang. Oleh karena itu: Anda tidak boleh menggunakan bagian mana
                pun dari Materi pada Aplikasi kami untuk tujuan komersial tanpa mendapatkan izin
                tertulis dari kami dan/atau (jika berlaku) dari pemberi lisensi;
              </Text>
              <Text>
                Anda tidak boleh menggunakan ilustrasi, foto, video atau audio atau grafik lain
                secara terpisah dari teks yang menyertainya; atau Anda tidak boleh menggunakan
                Materi di luar Aplikasi, khususnya dengan menghapus status kontributor yang ada
                seperti penulis Materi pada Aplikasi kami.
              </Text>

              <Text tagName="h4">7. KODE ETIK</Text>
              <Text>Anda setuju bahwa Anda tidak akan:</Text>

              <ol>
                <Text tagName="li">
                  Melanggar hak kekayaan intelektual pihak ketiga, termasuk tanpa terbatas pada hak
                  kekayaan intelektual seperti hak cipta dan merek dagang, dari kami, dari pengguna
                  lain atau pihak ketiga;
                </Text>
                <Text tagName="li">
                  Melanggar hak milik, hak privasi dan hak gambar dari kami, pengguna lain atau
                  pihak ketiga;
                </Text>
                <Text tagName="li">
                  Mengungkap informasi pribadi, seperti nama, alamat surat, nomor telepon dan alamat
                  surat elektronik dari individu tertentu tanpa izin, dan yang mana pihak ketiga
                  dapat mengidentifikasi individu yang dimaksud;
                </Text>
                <Text tagName="li">
                  Mendaftarkan beberapa alamat surat elektronik untuk mendapatkan beberapa akun,
                  meski sebenarnya satu pengguna;
                </Text>
                <Text tagName="li">
                  Mendapatkan akun atas nama Pengguna Terdaftar yang akunnya telah ditangguhkan atau
                  dihentikan;
                </Text>
                <Text tagName="li">
                  Bersikap diskriminatif, memfitnah atau merugikan reputasi dan kredibilitas
                  pengguna lain atau pihak ketiga;
                </Text>
                <Text tagName="li">
                  Mengubah dan/atau menghapus Materi yang tersedia lewat Aplikasi Andalan Mama
                </Text>
                <Text tagName="li">
                  Meniru kami, pengguna lain atau pihak ketiga (termasuk memalsukan kepala surat
                  elektronik untuk tujuan pemalsuan sumber kepala surat elektronik dan identitas
                  pengirim);
                </Text>
                <Text tagName="li">
                  Mengirimkan program komputer atau virus yang berbahaya atau menyebabkan pengguna
                  lain atau pihak ketiga menerima program atau virus tersebut;
                </Text>
                <Text tagName="li">
                  Mengirimkan, tanpa izin, surat elektronik yang merupakan iklan atau promosi atau
                  permohonan atau yang sifatnya menjijikkan (termasuk spam); menghalangi penerimaan
                  surat elektronik oleh orang lain atau pihak ketiga; meminta pengiriman rantai
                  surat elektronik dan/atau pengiriman rantai surat elektronik sesuai permintaan
                  tersebut;
                </Text>
                <Text tagName="li">
                  Mengedarkan informasi, perlengkapan dan perangkat lunak yang digunakan untuk
                  tujuan menonaktifkan atau menghindari fungsi kendali akses server atau fasilitas
                  lain;
                </Text>
                <Text tagName="li">
                  Mereproduksi, memodifikasi, membongkar, merekayasa atau menganalisa contoh atau
                  perangkat lunak yang terkandung di dalam Materi (kecuali yang diizinkan oleh
                  undang-undang, dan Anda setuju memberi tahu kami pada situasi tersebut);
                </Text>
                <Text tagName="li">
                  Mendapatkan informasi akun tanpa izin atau lewat penipuan (termasuk, namun tidak
                  terbatas pada phising atau metode yang serupa);
                </Text>
                <Text tagName="li">
                  Penggunaan Aplikasi Andalan Mama untuk mengambil keuntungan dan mengharapkan
                  keuntungan, kecuali atas persetujuan tertulis yang diperoleh dari kami;
                </Text>
                <Text tagName="li">
                  Menggunakan Aplikasi Andalan Mama untuk kampanye pemilu atau aktivitas politis
                  lainnya;
                </Text>
                <Text tagName="li">
                  Penggunaan Aplikasi berlawanan dengan undang-undang dan peraturan yang berlaku;
                </Text>
                <Text tagName="li">
                  Menghambat pengoperasian aplikasi atau menghambat pertukaran atau pembagian Konten
                  dari kontribusi pengguna lain atau pihak ketiga; atau menyebabkan kerusakan atau
                  kerugian kepada kami, pengguna lain atau pihak ketiga dengan merusak kredibilitas
                  mereka atau melanggar hak kekayaan intelektual mereka;
                </Text>
                <Text tagName="li">
                  Menyebabkan hambatan yang signifikan terhadap pengoperasian usaha kami lewat
                  permintaan atau surat elektronik yang berulang, sembrono, menjengkelkan, yang di
                  luar kewajiban kami dan/atau tidak masuk akal;
                </Text>
                <Text tagName="li">
                  Melanggar Syarat Ketentuan; atau menghalangi tatanan umum dan moralitas (termasuk,
                  namun tidak terbatas, dengan mengirimkan atau menampilkan Konten yang dapat
                  mempromosikan atau memicu kekerasan, gambar ilegal atau bunuh diri);
                </Text>
                <Text tagName="li">
                  Melanggar persyaratan lain yang mungkin kami terapkan dari waktu ke waktu atas
                  kebijaksanaan sendiri dan absolut
                </Text>
              </ol>

              <Text tagName="h4">8. TANGGUNGJAWAB KONTEN</Text>
              <Text>
                Anda bertanggung jawab sendiri atas Konten yang Anda kirim, unggah dan/atau
                diterbitkan menggunakan Layanan Cookpad. Kami tidak mengkaji atau menyaring Konten
                Anda sebelum Konten tersebut tampil atau dibagi.
              </Text>
              <Text>Anda menyatakan dan menjamin bahwa:</Text>

              <ol>
                <Text tagName="li">
                  Setiap Konten yang Anda kirim telah mematuhi Syarat Penggunaan ini;
                </Text>
                <Text tagName="li">
                  Anda berhak menggunakan, mengunggah, menampilkan (posting) atau menerbitkan Konten
                  pada Aplikasi atau Situs kami dan memberikan lisensi kepada kami.
                </Text>
                <Text tagName="li">
                  Penggunaan oleh Andalan Mama atas Konten yang Anda unggah, kirim atau terbitkan
                  tidak akan melanggar hak pihak ketiga mana pun.
                </Text>
              </ol>
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

export default TermsPage;
