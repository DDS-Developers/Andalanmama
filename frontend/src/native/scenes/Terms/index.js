/* eslint-disable react/no-unescaped-entities */
/**
 * scenes/Terms/index.js
 *
 */
import React, { PureComponent } from 'react';
import { Container, H3 } from 'native-base';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Paragraph from '../Help/Paragraph';
import Title from '../Help/Title';
import Ul from '../Help/Ul';
import Li from '../Help/Li';
import LiNum from '../Help/LiNumber';
import Wrapper from './Wrapper';

export class TermsScene extends PureComponent {
  static navigationOptions = {
    title: 'Ketentuan',
    header: null,
  };

  render() {
    return (
      <Container>
        <Header title="Ketentuan" leftSettings={{ type: 'back' }} />
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
              SYARAT PENGGUNAAN APLIKASI ANDALAN MAMA{'/n'} BY FILMA
            </H3>
            <Paragraph>
              HARAP BACA SYARAT DAN KETENTUAN INI DENGAN CERMAT SEBELUM MENGGUNAKAN APLIKASI INI
            </Paragraph>
            <Paragraph>
              Syarat penggunaan (selanjutnya disebut “Syarat Penggunaan”) ini berisi syarat yang
              harus Anda ketahui dalam menggunakan aplikasi resmi perangkat mobile Andalan Mama by
              Filma (selanjutnya disebut “Aplikasi / Aplikasi Kami”). Adapun hal-hal yang termasuk
              penggunaan Aplikasi adalah diantaranya; mengakses, menjelajah, atau mendaftar untuk
              menggunakan Aplikasi.
            </Paragraph>
            <Paragraph>Aplikasi dioperasikan oleh PT Smart Tbk.</Paragraph>
            <Paragraph>
              Dengan menggunakan Aplikasi Andalan Mama, Anda menyatakan menerima dan setuju untuk
              mematuhi Syarat Penggunaan yang ditetapkan berikut ini. Jika Anda tidak menyetujui
              Syarat Penggunaan tersebut, Anda tidak boleh menggunakan Aplikasi ini. Ketika kami
              menggunakan istilah "kami (subjek)", "kami (objek)" atau "miliki kami" kami merujuk
              pada Andalan Mama by Filma dan "Grup Kami" yang berarti entitas yang mengendalikan,
              dikendalikan oleh atau di bawah kendali umum.
            </Paragraph>
            <Title>1. INFORMASI TENTANG KAMI</Title>
            <Paragraph>
              Kami adalah salah satu perusahan publik produk konsumen berbasis kelapa sawit yang
              terintegrasi dan terkemuka di Indonesia yang berfokus pada produksi sawit yang
              lestari.
            </Paragraph>
            <Paragraph>
              Jika Anda punya pertanyaan atau keluhan tentang Aplikasi, atau terkait dengan Andalan
              Mama by Filma, silakan hubungi kami di admin.marketing@sinarmas-agri.com
            </Paragraph>
            <Title>2. INFORMASI TENTANG APLIKASI KAMI</Title>
            <Paragraph>
              Aplikasi kami memberikan Anda kemampuan untuk berbagi resep dengan pengguna lain di
              Aplikasi kami, dan menjelajah resep pengguna lain. Layanan aplikasi Andalan Mama by
              Filma diberikan secara gratis.
            </Paragraph>
            <Paragraph>
              Kami tidak menjamin bahwa Aplikasi kami, konten yang ada padanya, atau layanan yang
              mungkin diberikan oleh penyedia layanan pihak ketiga tersebut akan bebas dari
              kesalahan atau kelalaian.
            </Paragraph>
            <Title>3. INFORMASI PENTING TERKAIT RESEP</Title>
            <Paragraph>
              Aplikasi Andalan Mama tidak menyaring atau memeriksa resep sebelum ditampilkan
              (posting), sehingga mungkin ada resep yang kurang tepat atau tidak aman, bahan atau
              metode memasak yang kurang sesuai. Resep, komentar atau informasi lain yang diberikan
              pada Situs atau Aplikasi kami tidak dimaksudkan sebagai saran yang harus Anda ikuti,
              dan setiap penggunaan atau kepercayaan terhadap setiap resep atau konten lain yang
              diberikan pada Situs atau Aplikasi kami adalah risiko Anda sendiri.
            </Paragraph>
            <Title>4. PENDAFTARAN DAN AKUN PENGGUNA</Title>
            <Paragraph>
              Kami mengumpulkan informasi pribadi tentang pengguna kami untuk menyediakan produk,
              layanan, dan dukungan pelanggan kami. Tidak semua informasi yang diminta, dikumpulkan,
              dan diproses oleh kami adalah "Informasi Pribadi" karena tidak mengidentifikasi Anda
              sebagai orang alami. Ini akan mencakup sebagian besar "Konten Buatan Pengguna" yang
              Anda berikan kepada kami dengan maksud untuk dibagikan dengan pengguna lain.
              "Informasi Non-Pribadi" tersebut tidak dicakup oleh kebijakan privasi ini. Namun,
              karena informasi non-pribadi dapat digunakan secara agregat atau dihubungkan dengan
              informasi pribadi yang ada; ketika dalam formulir ini akan diperlakukan sebagai
              informasi pribadi. Dengan demikian, kebijakan privasi ini akan mencantumkan kedua
              jenis informasi demi transparansi.
            </Paragraph>
            <Paragraph>
              Dalam beberapa situasi, pengguna dapat memberi kami informasi pribadi tanpa kami
              memintanya, atau melalui cara yang tidak dimaksudkan untuk pengumpulan jenis informasi
              tertentu. Meskipun kami dapat mengambil langkah-langkah yang wajar untuk melindungi
              data ini, pengguna akan melewati sistem, proses, dan kontrol kami dan dengan demikian
              informasi yang diberikan tidak akan diatur oleh kebijakan privasi ini.
            </Paragraph>
            <Paragraph>
              Dalam beberapa situasi, pengguna dapat memberikan kami informasi pribadi melalui
              platform yang berada di luar kendali kami; misalnya melalui media sosial atau forum.
              Sementara setiap informasi yang dikumpulkan oleh kami diatur oleh Kebijakan Privasi
              ini, platform yang digunakan untuk berkomunikasi akan diatur oleh Kebijakan Privasi
              sendiri.
            </Paragraph>
            <Paragraph>
              Informasi yang kami minta, kumpulkan, dan prosesnya terutama digunakan untuk memberi
              pengguna produk atau layanan yang mereka minta. Lebih khusus lagi, kami dapat
              menggunakan informasi pribadi Anda untuk tujuan berikut:
            </Paragraph>

            <Ul>
              <Li>Untuk menyediakan layanan atau produk yang Anda minta;</Li>
              <Li>Untuk memfasilitasi pembuatan Kontrak Pengguna</Li>
              <Li>Untuk memberikan dukungan teknis atau lainnya kepada Anda;</Li>
              <Li>
                Untuk menjawab pertanyaan tentang layanan kami, atau untuk menanggapi keluhan;
              </Li>
              <Li>
                Untuk mempromosikan program, produk, atau layanan kami yang lain yang mungkin
                menarik bagi Anda (kecuali Anda memilih keluar dari komunikasi tersebut);
              </Li>
              <Li>Untuk memungkinkan debugging, menguji dan mengoperasikan platform kami;</Li>
              <Li>
                Untuk melakukan analisis data, meneliti dan membangun dan meningkatkan platform
                kami;
              </Li>
              <Li>
                Untuk mematuhi kewajiban hukum dan peraturan; jika diizinkan atau diharuskan oleh
                hukum; atau
              </Li>
              <Li>
                Untuk tujuan lain dengan persetujuan Anda, kecuali jika Anda menarik persetujuan
                Anda untuk tujuan ini.
              </Li>
            </Ul>

            <Paragraph>
              Dasar 'pemrosesan hukum' di mana kami akan menggunakan informasi pribadi tentang
              pengguna kami adalah (tetapi tidak terbatas pada):
            </Paragraph>

            <Ul>
              <Li>Ketika pengguna telah memberikan persetujuan;</Li>
              <Li>
                Bila perlu untuk pelaksanaan kontrak dimana pengguna menjadi salah satu pihaknya;
              </Li>
              <Li>Pemrosesan diperlukan untuk kepatuhan dengan kewajiban hukum kami;</Li>
              <Li>
                Pemrosesan diperlukan untuk melindungi kepentingan vital pengguna kami atau orang
                lainnya.
              </Li>
              <Li>
                Pemrosesan dilakukan dalam mengejar kepentingan sah kami, di mana kepentingan ini
                tidak melanggar hak-hak pengguna kami.
              </Li>
            </Ul>

            <Title>5. PEMILIK KONTEN DAN HAK LISENSI</Title>
            <Paragraph>
              Kami tidak mengklaim kepemilikan atas resep, foto, grafik, komentar, informasi, data,
              teks atau materi lain yang Anda unggah atau pasang pada Situs atau Aplikasi kami
              ("Content").
            </Paragraph>
            <Paragraph>
              Namun, ketika Anda mengunggah Konten termasuk resep Anda ke dalam Situs atau Aplikasi
              kami, Anda memberikan kepada kami lisensi bebas royalti, selamanya, yang tidak dapat
              dicabut, di seluruh dunia (yang juga bisa memberikan hak kepada afiliasi dan pihak
              ketiga, termasuk pengguna lain) untuk menggunakan, menyalin, mereproduksi, memproses,
              mengadaptasi, memodifikasi, menerjemahkan, menerbitkan, mengirimkan, menampilkan dan
              mendistribusikan (termasuk lewat pihak ketiga) atas Konten tersebut atau turunannya
              dalam satu atau seluruh media atau metode distribusi (yang tidak diketahui atau yang
              dikembangkan di kemudian hari) untuk setiap dan seluruh aktivitas usaha kami. Anda
              juga menyetujui bahwa:
            </Paragraph>

            <Ul>
              <Li>
                Lisensi ini termasuk hak bagi kami untuk memberikan promosi dan eksploitasi
                komersial atas Konten yang diunggah ke Situs atau Aplikasi kami dengan sarana apa
                pun, cara atau bentuk kepada atau dengan pengguna atau orang lain yang bermitra
                dengan kami untuk distribusi atau publikasi Konten tersebut pada media dan layanan
                lainnnya;
              </Li>
              <Li>
                penggunaan tambahan oleh kami, pengguna lain pada Situs atau Aplikasi kami dan orang
                lain yang bermitra dengan kami untuk distribusi atau publikasi Konten Anda dapat
                dilakukan tanpa pemberian kompensasi kepada Anda terkait dengan Konten yang Anda
                unggah ke Situs atau Aplikasi kami;
              </Li>
              <Li>
                Anda mengotorisasi kami untuk melaporkan pelanggaran hak cipta atas nama Anda ke
                agen yang ditentukan, pemilik situs, penyedia hosting atau kontak yang sesuai
                lainnya ketika kami menemukan Konten Anda dibajak; dan
              </Li>
              <Li>
                Anda secara tanpa dapat dicabut kembali melepaskan seluruh hak-hak moral (dan hak
                yang serupa di yuridikasi lain) yang Anda miliki dan akan Anda miliki baik sekarang
                atau di masa mendatang terkait Konten Anda.
              </Li>
            </Ul>

            <Title>6. HAK KEKAYAAN INTELEKTUAL</Title>
            <Paragraph>
              Seluruh hak kekayaan intelektual materi pada Aplikasi kami, termasuk namun tanpa
              terbatas pada desain, grafis, teks, gambar, perangkat lunak, berkas lain dan pemilihan
              dan susunan lainnya (yang secara bersama-sama disebut dengan “Materi”) adalah milik
              kami dan/atau pemberi lisensi, Kecuali Konten milik Anda sendiri yang diunggah,
              termasuk resep Anda.
            </Paragraph>
            <Paragraph>
              Kami mengizinkan Anda untuk menggunakan Materi hanya selama, diperlukan untuk
              mengakses dan menggunakan Layanan Andalan Mama untuk penggunaan pribadi non komersial
              sesuai dengan Syarat Penggunaan ini. Seluruh hak lain secara tegas dilindungi
              undang-undang. Oleh karena itu: Anda tidak boleh menggunakan bagian mana pun dari
              Materi pada Aplikasi kami untuk tujuan komersial tanpa mendapatkan izin tertulis dari
              kami dan/atau (jika berlaku) dari pemberi lisensi;
            </Paragraph>
            <Paragraph>
              Anda tidak boleh menggunakan ilustrasi, foto, video atau audio atau grafik lain secara
              terpisah dari teks yang menyertainya; atau Anda tidak boleh menggunakan Materi di luar
              Aplikasi, khususnya dengan menghapus status kontributor yang ada seperti penulis
              Materi pada Aplikasi kami.
            </Paragraph>

            <Title>7. KODE ETIK</Title>
            <Paragraph>Anda setuju bahwa Anda tidak akan:</Paragraph>

            <Ul>
              <LiNum no="1">
                Melanggar hak kekayaan intelektual pihak ketiga, termasuk tanpa terbatas pada hak
                kekayaan intelektual seperti hak cipta dan merek dagang, dari kami, dari pengguna
                lain atau pihak ketiga;
              </LiNum>
              <LiNum no="2">
                Melanggar hak milik, hak privasi dan hak gambar dari kami, pengguna lain atau pihak
                ketiga;
              </LiNum>
              <LiNum no="3">
                Mengungkap informasi pribadi, seperti nama, alamat surat, nomor telepon dan alamat
                surat elektronik dari individu tertentu tanpa izin, dan yang mana pihak ketiga dapat
                mengidentifikasi individu yang dimaksud;
              </LiNum>
              <LiNum no="4">
                Mendaftarkan beberapa alamat surat elektronik untuk mendapatkan beberapa akun, meski
                sebenarnya satu pengguna;
              </LiNum>
              <LiNum no="5">
                Mendapatkan akun atas nama Pengguna Terdaftar yang akunnya telah ditangguhkan atau
                dihentikan;
              </LiNum>
              <LiNum no="6">
                Bersikap diskriminatif, memfitnah atau merugikan reputasi dan kredibilitas pengguna
                lain atau pihak ketiga;
              </LiNum>
              <LiNum no="7">
                Mengubah dan/atau menghapus Materi yang tersedia lewat Aplikasi Andalan Mama
              </LiNum>
              <LiNum no="8">
                Meniru kami, pengguna lain atau pihak ketiga (termasuk memalsukan kepala surat
                elektronik untuk tujuan pemalsuan sumber kepala surat elektronik dan identitas
                pengirim);
              </LiNum>
              <LiNum no="9">
                Mengirimkan program komputer atau virus yang berbahaya atau menyebabkan pengguna
                lain atau pihak ketiga menerima program atau virus tersebut;
              </LiNum>
              <LiNum no="10">
                Mengirimkan, tanpa izin, surat elektronik yang merupakan iklan atau promosi atau
                permohonan atau yang sifatnya menjijikkan (termasuk spam); menghalangi penerimaan
                surat elektronik oleh orang lain atau pihak ketiga; meminta pengiriman rantai surat
                elektronik dan/atau pengiriman rantai surat elektronik sesuai permintaan tersebut;
              </LiNum>
              <LiNum no="11">
                Mengedarkan informasi, perlengkapan dan perangkat lunak yang digunakan untuk tujuan
                menonaktifkan atau menghindari fungsi kendali akses server atau fasilitas lain;
              </LiNum>
              <LiNum no="12">
                Mereproduksi, memodifikasi, membongkar, merekayasa atau menganalisa contoh atau
                perangkat lunak yang terkandung di dalam Materi (kecuali yang diizinkan oleh
                undang-undang, dan Anda setuju memberi tahu kami pada situasi tersebut);
              </LiNum>
              <LiNum no="13">
                Mendapatkan informasi akun tanpa izin atau lewat penipuan (termasuk, namun tidak
                terbatas pada phising atau metode yang serupa);
              </LiNum>
              <LiNum no="14">
                Penggunaan Aplikasi Andalan Mama untuk mengambil keuntungan dan mengharapkan
                keuntungan, kecuali atas persetujuan tertulis yang diperoleh dari kami;
              </LiNum>
              <LiNum no="15">
                Menggunakan Aplikasi Andalan Mama untuk kampanye pemilu atau aktivitas politis
                lainnya;
              </LiNum>
              <LiNum no="16">
                Penggunaan Aplikasi berlawanan dengan undang-undang dan peraturan yang berlaku;
              </LiNum>
              <LiNum no="17">
                Menghambat pengoperasian aplikasi atau menghambat pertukaran atau pembagian Konten
                dari kontribusi pengguna lain atau pihak ketiga; atau menyebabkan kerusakan atau
                kerugian kepada kami, pengguna lain atau pihak ketiga dengan merusak kredibilitas
                mereka atau melanggar hak kekayaan intelektual mereka;
              </LiNum>
              <LiNum no="18">
                Menyebabkan hambatan yang signifikan terhadap pengoperasian usaha kami lewat
                permintaan atau surat elektronik yang berulang, sembrono, menjengkelkan, yang di
                luar kewajiban kami dan/atau tidak masuk akal;
              </LiNum>
              <LiNum no="19">
                Melanggar Syarat Ketentuan; atau menghalangi tatanan umum dan moralitas (termasuk,
                namun tidak terbatas, dengan mengirimkan atau menampilkan Konten yang dapat
                mempromosikan atau memicu kekerasan, gambar ilegal atau bunuh diri);
              </LiNum>
              <LiNum no="20">
                Melanggar persyaratan lain yang mungkin kami terapkan dari waktu ke waktu atas
                kebijaksanaan sendiri dan absolut
              </LiNum>
            </Ul>

            <Title>8. TANGGUNGJAWAB KONTEN</Title>
            <Paragraph>
              Anda bertanggung jawab sendiri atas Konten yang Anda kirim, unggah dan/atau
              diterbitkan menggunakan Layanan Cookpad. Kami tidak mengkaji atau menyaring Konten
              Anda sebelum Konten tersebut tampil atau dibagi.
            </Paragraph>
            <Paragraph>Anda menyatakan dan menjamin bahwa:</Paragraph>

            <Ul>
              <LiNum no="1">
                Setiap Konten yang Anda kirim telah mematuhi Syarat Penggunaan ini;
              </LiNum>
              <LiNum no="2">
                Anda berhak menggunakan, mengunggah, menampilkan (posting) atau menerbitkan Konten
                pada Aplikasi atau Situs kami dan memberikan lisensi kepada kami.
              </LiNum>
              <LiNum no="3">
                Penggunaan oleh Andalan Mama atas Konten yang Anda unggah, kirim atau terbitkan
                tidak akan melanggar hak pihak ketiga mana pun.
              </LiNum>
            </Ul>
          </Wrapper>
        </Content>
      </Container>
    );
  }
}

export default TermsScene;
