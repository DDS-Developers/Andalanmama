<?php

use Illuminate\Database\Seeder;

use App\User;
use App\Blog;
use Carbon\Carbon;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (env('APP_ENV') == 'staging') {
            $admin = User::where('type', 'admin')->first();

            $data = [
                [
                    'title' => 'Rahasia Mengolah Ayam Agar Lebih Lezat!',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-25/top.png">
                    <p>Siapa sih yang tidak suka ayam? Selain lezat, ayam juga bisa diolah jadi masakan apapun seperti digoreng, dipanggang atau direbus. Tapi apapun jenis masakannya, kunci mengolah ayam terletak pada cara membumbuinya lho Moms. Jika bumbu meresap sempurna sampai ke tulang ayam, dijamin masakan Moms makin istimewa. Nih ada tips supaya masakan ayam yang Moms buat bumbunya meresap hingga ke dalam. Ikutin yuk!</p>
                    <ol>
                    <li>Teknik Marinasi</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-25/cara-1.png">
                    <p>Teknik marinasi akan menghasilkan daging ayam yang empuk lho. Caranya, Moms bisa memotong ayam menjadi beberapa bagian sesuai selera, biasanya satu ekor ayam bisa dipotong menjadi 8 atau 12 bagian. Setelah dipotong, cuci ayam hingga bersih, jangan sampai ada bulu yang masih tertinggal ya, Moms. Supaya bumbu bisa lebih meresap, Moms bisa mencoba mengerat daging ayam yang sudah dibersihkan dengan pisau tajam, kerat beberapa garis saja tidak perlu terlalu dalam karena mengerat terlalu dalam, daging ayam akan mudah hancur ketika dimasak. Setelah dikerat, Lakukan teknik marinasi, yaitu rendam potongan daging ayam dengan bumbu dan diamkan selama 3-4 jam sampai bumbunya benar-benar meresap.</p>
                    <ol start="2">
                    <li>Teknik Menggoreng Slow Cooking</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-25/cara-2.png">
                    <p>Memasak menggunakan api yang kecil bisa membuat ayam matang merata dan bumbunya meresap sempurna lho Moms. Memasak dengan api yang kecil disebut teknik slow cooking. Caranya hampir sama dengan teknik marinasi, hanya saja masukkan ayam yang sudah dipotong dan dicuci bersih ke dalam panci, lalu berikan bumbu rempah, selanjutnya masukan air sampai daging ayam terendam. Jangan memberi air yang terlalu banyak karena akan membuat daging ayam tidak renyah saat digoreng Moms. setelah dibumbui, Moms tinggal pilih mau digoreng langsung atau didiamkan dulu di freezer, ayam yang sudah dibumbui akan lebih gurih saat digoreng, apalagi menggorengnya pakai minyak Filma yang sudah terjamin kualitasnya, dijamin ayam goreng buatan Moms, pasti matang sempurna.
                    Ternyata, ada banyak teknik supaya daging ayam yang Moms buat lezat kan. Gimana Moms tips membumbui ayamnya? Mudah kan? Selamat Mencoba!</p>',
                    'attachment' => 'articles/artikel-25/thumbnail.png',
                    'publish_at' => Carbon::parse('November 1st 2018'),
                    'status' => 1,
                    'highlight' => 1
                ],
                [
                    'title' => 'Menyimpan Lemon Supaya Tetap Segar!',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-26/top.png">
                    <p>Lemon terkenal memiliki rasa asam dan segar, pastinya Moms suka membelinya kan? Buah Lemon biasanya digunakan untuk hidangan pelengkap makanan, minuman, hingga digunakan untuk menghilangkan bau amis pada ikan. Sayangnya, buah lemon hanya bertahan seminggu jika disimpan dalam suhu ruangan, selebihnya akan mengering dan tidak segar lagi. Lalu, gimana sih cara menyimpan buah lemon supaya tahan lebih lama? berikut info lengkapnya, Moms: </p>
                    <ol>
                    <li>Simpan Lemon Utuh dalam Plastik</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-26/cara-1.png">
                    <p>Moms tidak mau langsung memakai lemon setelah dibeli? Supaya lemon tetap segar, simpan pada tempat yang jauh dari sinar matahari. Caranya, masukan lemon ke dalam kantong plastik dengan segel (zip lock), kemudian letakkan di rak tengah atau di rak pintu kulkas. Sebelum diletakkan ke dalam kulkas, pastikan tidak ada udara di dalam plastik ya Moms. Nah, suhu yang ideal untuk menyimpan lemon utuh agar tetap segar antara 4ºc sampai 10ºc. Dengan cara ini, lemon akan bertahan selama 3 minggu dan tetap segar. </p>
                    <ol start="2">
                    <li>Simpan Potongan Lemon dalam Wadah</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-26/cara-2.png">
                    <p>Kalau Moms sudah terlanjur memotong buah lemon, dan masih terdapat sisa yang masih bisa digunakan, simpan saja untuk digunakan kembali saat dibutuhkan. Caranya, tutup bagian lemon yang terpotong dengan plastik, pastikan tidak ada udara dalam kantong plastik ya moms. Masukan ke dalam wadah yang kedap udara supaya sari buah lemon tidak hilang dan lemon tidak kering moms. Setelah itu, masukan wadah yang berisi lemon tersebut ke dalam kulkas ya. Perlu diketahui, buah lemon yang sudah terpotong hanya bertahan selama 2-3 hari, jadi harus secepat mungkin ya digunakannya.</p>
                    <ol start="3">
                    <li>Simpan Sari Buah Lemon dalam Cetakan</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-26/cara-3.png">
                    <p>Moms sering menyimpan sari buah lemon? Jangan sembarangan menyimpannya lho Moms, karena sari buah lemon dapat menjadi sarang bakteri kalau disimpan dalam suhu ruangan. Jika di simpan dalam kulkas selama 2-4 hari, Sari buah lemon bisa berubah rasa menjadi aneh. Nah, Moms bisa mengatasinya dengan cara membekukan sari buah lemon di dalam cetakan es batu, dan dibekukan. Setelah menjadi es, masukkan ke dalam plastik dan masukan lagi ke freezer.  Dengan cara ini, sari buah lemon akan lebih tahan lama dan rasanya pun tidak berubah. </p>
                    <ol start="3">
                    <li>Simpan Kulit Lemon dalam Wadah</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-26/cara-4.png">
                    <p>Untuk Moms yang suka menyimpan kulit lemon agar tahan lama, parut kulit lemon, masukan ke dalam wadah kering dan kedap udara, lalu simpan wadah di dalam kulkas. Dengan begini, kulit lemon akan bertahan selama seminggu dan pastinya tetap segar.</p>
                    <p>Gimana moms? Sudah tahu kan cara menyimpan lemon yang benar? Selamat mencoba!</p>',
                    'attachment' => 'articles/artikel-26/thumbnail.png',
                    'publish_at' => Carbon::parse('November 18th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Cara Mudah Membuat Tempura Udang Agar Renyah',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-27/top.png">
                    <p>Moms, Siapa sih yang tidak suka dengan tempura udang khas Jepang? Daging udang yang tebal, lembut dan gurih, dibalut dengan adonan tepung yang renyah, sangat nikmat dan cocok jika disantap dengan nasi putih yang hangat. Ternyata, membuat adonan tempura itu nggak mudah lho Moms karena beda resep menentukan kerenyahan tempura.</p>
                    <p>Moms selalu gagal membuat tempura udang yang renyah? Tidak perlu khawatir Moms, sebenarnya cara membuat adonan tempura udang cukup sederhana dan praktis, tapi Moms harus memperhatikan beberapa hal penting sebelum dan ketika memasaknya. Yuk coba beberapa Tips ini:</p>
                    <ol>
                    <li>Pilih Udang yang Segar dan Bersih</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-27/cara-1.png">
                    <p>Hal utama yang harus diperhatikan yaitu kesegaran udangnya, pilih udang yang benar-benar segar ya Moms. Untuk jenisnya bisa disesuaikan tergantung selera. Jangan lupa untuk bersihkan udang dari kotoran di kepalanya dan pastikan cukup kering saat akan diolah. Nah, agar tempura udang tidak bengkok ataupun menciut saat digoreng, kulit di tubuh udang harus dibuang dan cukup sisakan kulit di bagian ekornya saja. </p>
                    <ol start="2">
                    <li>Campurkan Tepung dengan Air Dingin atau Air Soda</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-27/cara-2.png">
                    <p>Kunci rahasia jika Moms ingin membuat adonan tempura yang renyah sempurna adalah adonan tepung harus selalu dingin. Caranya, campurkan tepung dengan air es karena kerenyahan tempura muncul dari perbedaan suhu antara adonan tepung yang dingin dan minyak panas yang digunakan untuk menggoreng. Selain itu, Moms juga bisa mencampurkan air soda yang dingin ke dalam adonan tempura karena bisa menambah udara dan meringankan campuran tepung, sehingga membuat tempura lebih renyah. </p>
                    <ol start="3">
                    <li>Goreng dengan Minyak Panas</li>
                    </ol>
                    <p>Menggoreng dengan minyak panas dapat membuat adonan tepung tempura tetap menempel di dagingnya saat digoreng lho Moms. Panasnya minyak untuk menggoreng tempura idealnya bersuhu 170 derajat celcius. Tidak perlu menunggu minyak hingga mendidih karena jika terlalu panas tepung akan mudah gosong sementara udang belum terlalu matang. Angkat tempura ketika berwarna kuning kecoklatan, dan jangan lupa untuk menggunakan minyak Filma saat menggoreng tempura, supaya tempura udang buatan Moms matang sempurna. Karena minyak Filma sudah jelas teruji kualitasnya. </p>
                    <p>Mudah kan Moms membuat tempura udang yang renyah untuk disajikan di rumah? Selamat mencoba!</p>',
                    'attachment' => 'articles/artikel-27/thumbnail.png',
                    'publish_at' => Carbon::parse('November 20th 2018'),
                    'status' => 1,
                    'highlight' => 1
                ],
                [
                    'title' => 'Menyimpan Kentang Agar Tidak Mudah Busuk',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-28/top.png">
                    <p>Jika Moms sering membeli kentang dalam jumlah banyak untuk persediaan di rumah, Moms harus  tahu cara yang tepat untuk menyimpan kentang agar tetap segar dan tidak bertunas lho. Menyimpan kentang dengan benar bisa membuat kentang bertahan selama satu hingga dua bulan. Ikuti tipsnya yuk Moms!</p>
                    <ol>
                    <li>Pilah Kentang Sesuai dengan Kualitas</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-28/cara-1.png">
                    <p>Hal utama yang harus Moms lakukan yaitu pisahkan kentang yang kulitnya rusak dengan kentang yang kulitnya masih bagus,  karena dapat menyebabkan kebusukan pada kentang yang masih bagus dan utuh. Jika pada kulit kentang terdapat bintik-bintik atau noda hitam, simpan paling lama hanya 2 hari dan harus langsung diolah saat itu juga ya Moms. Setelah memisahkan kentang yang rusak dan yang masih bagus, jangan mencuci kentang yang kotor karena kulit kentang terdapat tanah yang menggumpal. Moms cukup membersihkanya dengan sikat kering dan tidak perlu menggunakan air. Dengan cara ini, moms mencegah agar kentang tidak lembab dan membusuk. </p>
                    <ol start="2">
                    <li>Rendam Kentang di dalam Air Es</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-28/cara-2.png">
                    <p>Jika Moms ingin kentang bertahan lama, jangan menyimpan kentang di dalam kulkas dengan suhu yang dingin karena dapat membuat pati kentang berubah menjadi gula, sehingga rasanya jadi manis. Warna kentang juga akan berubah jika Moms menyimpannya di dalam kulkas. Ketika kentang sudah dipotong, kentang harus segera dimasak karena daging kentang yang terkena udara tidak bisa disimpan lagi untuk waktu yang lama.  Untuk menyiasatinya, rendam kentang yang sudah dikupas di dalam air es selama 5 menit, agar warnanya tidak cepat menghitam. Perlu diingat moms, merendam kentang dengan air es hanya dilakukan jika kentang akan dimasak karena jika tidak, kentang dapat menyerap sehingga mengubah cita rasa alaminya.</p>
                    <ol start="3">
                    <li>Jauhkan dari Sinar Matahari</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-28/cara-3.png">
                    <p>Simpanlah kentang yang masih bagus di tempat yang tidak terkena cahaya, dan jangan menyimpan kentang di dalam wadah yang kedap udara ya Moms. Walaupun moms sudah menyimpan kentang di tempat yang tidak terkena cahaya dan cukup udara, moms harus tetap memeriksa kentang seminggu sekali untuk memastikan kalau kentang tidak mengalami tanda-tanda kebusukan. Tanda-tanda kebusukan pada kentang yang biasa timbul seperti muncul warna hijau yang tipis, daging kentang yang melunak serta kelihatan layu, kemudian terdapat pucuk kecil seperti tunas. Selain itu, kentang yang busuk mengeluarkan bau tidak enak dan teksturnya lunak atau berjamur.</p>
                    <p>Sekarang Moms jadi tidak perlu khawatir lagi kan jika ingin menyimpan kentang dalam jumlah yang banyak? Selamat mencoba! </p>',
                    'attachment' => 'articles/artikel-28/thumbnail.png',
                    'publish_at' => Carbon::parse('November 24th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Tips Mengolah Daging Sapi Agar Empuk!',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-21/top.png">
                    <p>Moms suka memasak daging sapi? Memasak daging sapi memang lumayan tricky karena dagingnya cenderung alot dan harus direbus lumayan lama agar empuk. Tapi nggak perlu khawatir Moms, ternyata nggak perlu lho merebus daging terlalu lama karena kurang efektif dan bisa membuat tekstur daging menjadi alot seperti karet. Intip tips-tips ini supaya mengolah dagingnya lebih mudah, Moms!</p>
                    <ol>
                    <li>Potong berlawanan arah dari seratnya </li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-21/cara-1.png">
                    <p>Banyak faktor yang bisa membuat daging jadi tidak empuk ketika dimasak, salah satunya kesalahan pada saat memotong daging. Cara memotong daging yang benar ternyata sangat berpengaruh lho Moms, apalagi kalau mengolahnya dalam jumlah yang banyak.
                    Kunci utama memotong daging ialah memotong daging sesuai ukuran yang diinginkan dan sayatannya berlawanan dari arah seratnya. Dengan teknik memotong seperti ini, bisa membuat seratnya tidak mudah menyatu saat dimasak sehingga daging akan cepat empuk dan teksturnya pun jadi tidak alot.</p>
                    <ol start="2">
                    <li>Pukul-pukul daging</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-21/cara-2.png">
                    <p>Memukul daging sebelum dimasak memang terdengar agak janggal, tapi ternyata cara ini sudah banyak dilakukan agar daging bisa empuk dengan cepat ketika dimasak, lho Moms. Moms hanya perlu menyiapkan alat pemukul yang banyak dijual di pasar, namun jika Moms tidak sempat membelinya bisa juga menggunakan rolling pin yang berbahan kayu. Selain itu, siapkan juga talenan sebagai alas.
                    Pukul semua sisi daging secara merata sampai tekstur daging sedikit lebih empuk. Jangan terlalu keras ya Moms karena bisa membuat daging menjadi hancur dan serat-seratnya malah jadi berantakan. Cukup pukul secara perlahan kurang lebih selama 5 menit. Setelah itu jangan lupa dibumbui ya.</p>
                    <ol start="3">
                    <li>Bungkus dengan daun pepaya</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-21/cara-3.png">
                    <p>Kalau cara yang satu ini, sepertinya sudah jadi rahasia turun temurun yang memang ampuh Moms. Daun pepaya mengandung zat papain yang bisa membuat daging menjadi empuk, cocok untuk olahan daging bakar seperti sate atau steak BBQ. Caranya sangat mudah dan cepat kok Moms, pertama ambil beberapa lembar daun pepaya muda, kemudian remas daun tersebut hingga mengeluarkan getah. Setelah itu, gunakan daun pepaya tersebut untuk membungkus daging selama 30 menit. Jika sudah, jangan lupa cuci bersih dagingnya ya Moms.</p>
                    <ol start="4">
                    <li>Oles daging dengan buah nanas atau kiwi</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-21/cara-4.png">
                    <p>Buah nanas dan kiwi juga bisa membuat daging jadi empuk lho. Jika moms ingin menggunakan buah nanas, caranya adalah dengan memilih nanas yang masih muda, lalu parut hingga halus. Setelah itu balurkan nanas tersebut pada daging dan diamkan selama 30 menit.
                    Jika moms ingin menggunakan buah kiwi, caranya juga mudah kok, Moms. Hancurkan satu buah kiwi sampai halus, lalu oleskan pada potongan daging. Untuk 1kg daging biasanya memerlukan 1-2 buah kiwi ya, Moms. Tapi perlu diingat, dengan mengoleskan daging dengan buah nanas maupun kiwi, prosesnya agak lama Moms. Daging harus didiamkan 1-2 jam sebelum dimasak.
                    Nah sekarang sudah tahu kan acara mengolah daging agar empuk? Tingkat keberhasilan dalam mengolah daging sapi terlihat pada teksturnya yang lembut dan mudah dicerna. Nggak susah kan untuk mendapatkan tekstur daging yang empuk dengan waktu yang singkat? Selamat mencoba Moms! </p>',
                    'attachment' => 'articles/artikel-21/thumbnail.png',
                    'publish_at' => Carbon::parse('June 2nd 2018'),
                    'status' => 1,
                    'highlight' => 1
                ],
                [
                    'title' => 'Taklukkan Pare yang Pahit dengan Cara Berikut!',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-22/top.png">
                    <p>Sayuran berwarna hijau dengan tekstur kulit yang kasar dan penuh tonjolan ini memang terkenal dengan rasa pahitnya, Moms. Selain itu, pare juga memiliki rasa getir yang membuat kebanyakan orang jadi tidak ingin menyantapnya.
                    Tapi tidak sedikit juga yang menyukai si pahit yang satu ini. Bagi Moms pecinta pare, tidak perlu khawatir karena rasa pahit dan getir dari sayuran ini ternyata baik dan banyak mengandung vitamin juga mineral. Bila memang rasa pahitnya bikin gak tahan, lakukan saja 3 cara berikut ini untuk mengurangi kepahitannya!</p>
                    <ol>
                    <li>Memilih ukuran dan warna pare yang benar </li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-22/cara-1.png">
                    <p>Jenis dan ukuran pare ternyata berpengaruh juga dengan rasa pahitnya lho, Moms. Jika Moms ingin mengolah pare, ada baiknya untuk memilih pare dengan ukuran yang tidak terlalu besar, karena semakin besar ukuran pare, maka semakin pahit juga rasa yang dihasilkan dari pare tersebut. Setelah memilih ukurannya, pilih pare yang berwarna hijau muda belum matang karena pare yang matang biasanya memiliki rasa yang jauh lebih getir dan pahit, Moms.</p>
                    <ol start="2">
                    <li>Buang biji pare dan Remas dengan garam atau gula pasir</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-22/cara-2.png">
                    <p>Sebelum dimasak, cuci bersih pare dan belah menjadi dua bagian. Kemudian buang biji pare bersamaan dengan selaput putih yang menempel pada bagian daging pare. Nah apapun olahan pare yang ingin Moms buat, pastikan selalu mengiris pare dengan tipis, kemudian taburi garam dan remas-remas agar garam meresap dan mengurangi rasa pahitnya. Selain memakai garam, Moms juga bisa meremasnya dengan gula. Setelah itu diamkan sebentar sampai pare agak layu dan selanjutnya cuci kembali hingga bersih dengan air yang mengalir.</p>
                    <ol start="3">
                    <li>Rebus dengan daun jambu biji</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-22/cara-3.png">
                    <p>Merebus pare dengan daun jambu biji bisa sangat membantu untuk menghilangkan rasa pahit dan getir yang ada pada pare. Sebelum pare direbus dengan jambu biji, terlebih dahulu remas-remas daun jambu yang sudah disiapkan hingga hampir halus. Rebus pare bersama dengan daun jambu biji selama 5 menit atau sampai pare jadi setengah matang. Jika Moms memasak 1/2 kg pare, maka rebus pare menggunakan 10 lembar daun jambu biji. Dengan merebus pare dengan daun jambu biji, rasa pahit dan getir dari pare bisa berkurang sehingga lebih sedap untuk disantap.
                    Tapi perlu diingat, rasa pahit dan getir dari pare tidak bisa sepenuhnya hilang Moms. Tapi setidaknya, pare masih bisa disantap dengan rasa yang tidak terlalu pahit. Nah mudah kan Moms untuk dicoba? Selamat mencoba!</p>',
                    'attachment' => 'articles/artikel-22/thumbnail.png',
                    'publish_at' => Carbon::parse('June 10th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Memasak Cumi Agar Rasanya Lebih Lezat, Ini Dia Caranya!',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-23/top.png">
                    <p>Cumi-cumi jadi hidangan laut yang tidak perlu diragukan lagi kelezatannya. Menyantap cumi-cumi tidak perlu harus pergi ke restoran seafood kok, Moms. Moms bisa mengolah sendiri dengan berbagai macam resep.
                    Tapi moms tau nggak sih jika ingin cumi-cumi yang Moms masak terasa lebih nikmat, ada beberapa hal yang harus diperhatikan? Nah agar olahan cumi yang Moms buat hasilnya sempurna, yuk ikutin caranya!</p>
                    <ol>
                    <li>Memilih cumi yang masih baik</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-23/cara-1.png">
                    <p>Ketika membeli cumi, pastikan selalu memilih cumi yang masih segar dan utuh. Cara memastikan bahwa cumi tersebut masih segar atau tidak, Moms harus pastikan cuminya berwarna putih kelabu dengan bintik-bintik kemerahan dan matanya terlihat jernih. Pastikan juga bagian kepala dan tubuhnya masih menyatu.
                    Setelah itu tekan bagian tubuh cumi-cumi. Jika dagingnya terasa kenyal dan kemungkinan mengeluarkan tinta, tandanya cumi tersebut masih segar. Selain itu, pastikan bau cumi tidak menyengat. Cumi yang masih segar memiliki bau khas amis laut, tapi tidak menyengat. Hindari juga membeli cumi dalam keadaan yang terendam di dalam air, dengan warna yang sudah berubah menjadi ungu tua serta tentakel berwarna kekuningan, karena cumi itu bisa jadi telah diawetkan.
                    Nah jika ingin membeli cumi yang sudah beku, pastikan warna dan ciri-ciri yang lainnya masih sama seperti cumi yang masih segar ya Moms!</p>
                    <ol start="2">
                    <li>Bersihkan sebelum dimasak</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-23/cara-2.png">
                    <p>Sebelum dimasak, jangan lupa untuk membersihkannya terlebih dahulu. Pertama-tama cabut kantong tinta yang menempel pada bagian dalam tubuh cumi secara perlahan agar tinta cumi tidak pecah dan berceceran ke dagingnya. Lalu, cabut tulang yang menempel pada bagian dagingnya ya, Moms. Kalau ingin cumi terlihat lebih bersih dan menarik, Moms bisa mengupas kulitnya yang berwarna kemerahan, sehingga tampilan cumi akan berwarna putih polos. Setelah itu cuci bersih cumi dengan menggunakan air yang mengalir. </p>
                    <ol start="3">
                    <li>Memasaknya agar tidak amis dan alot</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-23/cara-3.png">
                    <p>Sudah dicuci berkali-kali tapi kok cumi tetap berbau amis? Tenang Moms, semuanya bisa diatasi dengan parutan jahe, perasan air jeruk nipis atau air perasan asam jawa. Lumuri cumi yang sudah dibersihkan dengan salah satu bahan tersebut, kemudian diamkan selama 5 menit agar meresap dan bau amisnya hilang. Setelah itu cuci kembali cumi hingga bersih.
                    Selain itu, pastikan cumi yang dimasak tidak keras dan alot. Kuncinya ada pada berapa lama waktu memasak. Idealnya cumi dimasak selama 5 menit dengan api besar karena jika lebih dari itu dagingnya akan terasa alot. Kalau ingin cumi direbus terlebih dahulu sebelum dimasak, pastikan merebusnya dengan waktu yang sebentar, kemudian langsung masukan cumi ke air dingin dengan es batu agar daging cumi tidak alot.</p>
                    <ol start="4">
                    <li>Bentuk cumi sesuai selera</li>
                    </ol>
                    <p>Karena teksturnya yang cukup kenyal, seringkali Moms atau keluarga kesulitan dalam menyantap cumi. Nah agar cumi lebih mudah disantap, Moms bisa memotong cumi dengan bentuk bulat cincin. Dengan bentuk bulat cincin, cumi akan lebih mudah disantap karena seukuran dengan satu kali suapan. Atau jika ingin menyajikan cumi dengan bentuk yang utuh, Moms bisa juga mengkerat tubuh cumi dengan bentuk kotak-kotak tipis agar terlihat lebih menarik.
                    Nggak sulit kan Moms memasak cumi agar mendapatkan hasil akhir yang lezat, tidak alot dan tidak berbau amis? Selamat mencoba! </p>',
                    'attachment' => 'articles/artikel-23/thumbnail.png',
                    'publish_at' => Carbon::parse('June 15th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Suka Memasak Menggunakan Santan? Simak Hal Berikut!',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-24/top.png">
                    <p>Santan jadi bahan masakan yang sangat penting untuk beberapa masakan Indonesia. Fungsi santan adalah menambah cita rasa gurih pada masakan dan membuat rasanya menjadi nikmat. Tapi masih banyak lho yang belum tahu cara memasak santan dengan benar.
                    Santan yang diolah dengan cara yang salah bisa jadi pecah dan membuat rasa masakan jadi tidak kuat, tidak  gurih dan aroma harum khas santan gak akan keluar. Tidak hanya itu, santan yang rusak atau pecah bisa membuat tampilan masakan jadi gak menarik karena santan akan menggumpal dan tidak menyatu dengan kuah masakan. Apalagi kalau Moms membuat opor ayam, soto atau sayur lodeh, Moms harus ekstra hati-hati dalam mengolah dan memasak santan.  Jadi, ikuti tips-tips menggunakan santan ini ya Moms!</p>
                    <ol>
                    <li>Pilih kelapa tua dengan daging tebal</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-24/cara-1.png">
                    <p>Jika ingin membuat santan sendiri, pastikan Moms membeli kelapa yang sudah tua serta daging buahnya tebal agar santan yang dihasilkan kental dan gurih. Kelapa yang dagingnya masih muda teksturnya lebih empuk, sehingga rasanya kurang kuat dan teksturnya sulit diparut.</p>
                    <ol start="2">
                    <li>Parut kelapa dan campur dengan air hangat</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-24/cara-2.png">
                    <p>Setelah memilih kelapanya, kupas kulit kelapa yang berwarna coklat dan sisakan daging buahnya saja yang berwarna putih, kemudian parut sampai halus. Lalu, tuangkan 500ml air hangat ke dalam parutan kelapa per satu buah kelapa parut agar santannya jadi tahan lama. Aduk hingga rata dan diamkan selama 3 menit sampai air menyerap pada kelapa parut, baru peras menggunakan saringan sambil ditampung dalam wadah yang bersih.</p>
                    <ol start="3">
                    <li>Masak santan dengan api kecil</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-24/cara-3.png">
                    <p>Kalau dirasa santan sudah cukup kental, segera masukan santan kental dalam panci lalu masak sambil diaduk dengan api yang kecil agar santannya tidak pecah. Aduk santan sampai mendidih, lalu langsung matikan kompor dan tuangkan santan setelah agak dingin. Cara ini berguna untuk menjaga aromanya supaya tetap wangi dan membuat teksturnya makin baik.
                    Buat Moms yang masih bingung gimana caranya memasak santan agar tidak pecah dan matang sempurna, semuanya sudah terjawab kan? Jadi gak bingung lagi deh, selamat mencoba Moms! </p>',
                    'attachment' => 'articles/artikel-24/thumbnail.png',
                    'publish_at' => Carbon::parse('June 20th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Agar Talenan Kayu Tidak Mudah Berjamur, Simak Tips untuk Merawatnya Yuk!',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-17/top.png">
                    <p>Talenan memegang peranan yang cukup penting saat memasak, Moms. Tidak hanya untuk mengiris atau memotong bahan memasak, talenan juga bisa melindungi bahan masakan dari kotoran sehingga lebih higienis pada saat sedang menyiapkan bahan-bahan. Memilih jenis talenan tentu berpengaruh pada bahan yang akan dimasak, walaupun sangat dianjurkan untuk memiliki talenan dengan bahan dasar kayu karena ketebalan dan ketahanannya lebih kuat. Selain itu, memakai talenan berbahan dasar plastik juga tidak baik  karena bisa membuat plastik terkelupas dan masuk ke dalam masakan. </p>
                    <p>Tapi, talenan kayu yang sudah dipakai harus dirawat dengan benar, karena kayu sifatnya bukan seperti plastik yang lebih mudah kering. Setelah mencuci talenan kayu, harus langsung dikeringkan ya Moms, agar tidak tumbuh jamur dan berbahaya pada bahan masakan yang akan diolah. Supaya talenan kayu yang Moms punya bisa tetap bersih dan tidak berjamur, yuk simak cara untuk merawatnya!</p>
                    <ol>
                    <li>Olesi dengan minyak goreng</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-17/cara-1.png">
                    <p>Agar talenan kayu  lebih bersih dan higienis untuk bahan masakan yang nantinya akan diolah, sebelum dipakai sebaiknya bersihkan talenan kayu dengan cara diolesi minyak zaitun. Oleskan secara merata sambil sedikit digosok supaya kotorannya terangkat, setelah itu tutup dengan serbet atau kain bersih, bisa juga ditutup dengan alumunium foil. Diamkan talenan yang telah dioles dengan minyak selama 10-12 jam, lalu cuci bersih talenan tersebut di air yang mengalir dan keringkan sampai benar-benar kering. Untuk merawatnya agar selalu bersih dan tidak terlihat kusam, Moms juga bisa mengolesnya dengan minyak zaitun sehabis talenan digunakan.</p>
                    <ol start="2">
                    <li>Bersihkan dengan Jeruk Nipis  </li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-17/cara-2.png">
                    <p>Nah, jika talenan kayu milik Moms terlanjur kotor dan berbau tidak sedap, Moms bisa mengatasinya dengan jeruk nipis atau lemon Moms! Caranya, taburi sedikit garam di atas talenan, kemudian gosok talenan dengan garam tersebut menggunakan irisan jeruk nipis atau lemon sampai kotoran dan noda-noda di talenan terangkat seluruhnya. Air perasan jeruk nipis atau lemon juga bisa digunakan, caranya oles talenan dengan air perasan jeruk nipis maupun lemon, diamkan selama satu malam, lalu bilas sampai bersih dan kering keesokan harinya.</p>
                    <ol start="3">
                    <li>Rendam Talenan dengan air cuka</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-17/cara-3.png">
                    <p>Air yang dicampurkan dengan cuka juga bisa membersihkan talenan, Moms. Rendam talenan kayu selama beberapa menit di dalam air yang dicampurkan dengan cuka, lalu bilas hingga bersih dan kering. Selain mengangkat kotoran yang tidak terlihat, cuka juga bisa menghilangkan bau yang tidak sedap pada talenan, sehingga saat digunakan aroma bahan masakan jadi gak tercampur dengan bau-bau yang gak enak dari talenan.</p>
                    <p>Tidak susah kan untuk merawat talenan kayu agar terhindar dari jamur? Selamat mencoba Moms!</p>',
                    'attachment' => 'articles/artikel-17/thumbnail.png',
                    'publish_at' => Carbon::parse('July 3rd 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Coba Cara Berikut Untuk Menyelamatkan Masakan yang Keasinan',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-18/top.png">
                    <p>Permasalahan yang sering muncul ketika memasak salah satunya adalah masakan yang keasinan. Tapi, kadang rasa asin ini bukan berasal dari penambahan garam yang terlalu banyak, bisa juga karena bahan dasar dari masakan yang akan diolah memang sudah terasa asin. Makanya Moms harus bisa menakar jumlah garam yang akan ditambahkan ke dalam masakan. Supaya masakan yang keasinan tidak terbuang sia-sia, Moms masih bisa menyiasatinya dengan beberapa cara berikut kok! Simak ya!</p>
                    <ol>
                    <li>Menambahkan air</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-18/cara-1.png">
                    <p>Menambahkan air pada masakan yang keasinan bisa dilakukan untuk olahan yang berkuah seperti sup atau soto. Tambahkan air kemudian tunggu sampai mendidih. Kalau dirasa masakan yang sudah ditambahkan air masih tetap terasa asin, tambahkan juga bumbu lain yang bisa menetralkan rasa asin seperti gula dan lada. Cara mudah untuk memastikan masakan yang Moms buat keasinan atau tidak yaitu dengan mencicipi masakan ketika sudah agak dingin, karena jika mencicipinya saat masih panas, rasa asin yang dikeluarkan tidak terlalu kuat.</p>
                    <ol start="2">
                    <li>Tambahkan kentang</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-18/cara-2.png">
                    <p>Masakan yang keasinan bisa disiasati dengan menambahkan potongan kentang ke dalam masakan karena bisa menyerap rasa asin yang berlebihan. Tapi pastikan masakan tersebut cocok jika ditambahkan dengan kentang ya, Moms. Potong kentang dengan bentuk kotak berukuran sedang, lalu masukan kentang ke dalam masakan yang berkuah maupun masakan yang ditumis. Kentang mampu menetralkan masakan yang mempunyai rasa asin berlebih saat mengolah makanan. </p>
                    <ol start="3">
                    <li>Tambahkan susu atau santan</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-18/cara-3.png">
                    <p>Kalau masakan yang Moms olah mengandung susu atau santan seperti pasta atau sayur lodeh dan rasanya keasinan, Moms bisa menambahkan sedikit santan atau susu di dalamnya. Susu dan santan termasuk bahan yang dapat membuat masakan yang keasinan menjadi netral, tapi pastikan Moms menggunakan susu UHT yang tidak ada rasanya ya.</p>
                    <ol start="4">
                    <li>Menambahkan gula atau lemon</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-18/cara-4.png">
                    <p>Gula pasir menjadi alternatif yang cukup ampuh untuk mengatasi olahan seperti tumisan yang keasinan. Tapi jangan terlalu banyak juga memasukkan gula ke dalam tumisan yang Moms buat, bisa jadi masakan malah terasa kemanisan. Masukkan sedikit saja gula untuk menetralkan rasa asin. Kalau masakan malah terasa kemanisan, Moms gak perlu panik, cukup tambahkan sedikit perasan lemon pada masakan. Lemon juga dapat membuat rasa masakan yang asin dan kemanisan jadi normal kembali, namun takarannya harus disesuaikan dengan selera ya Moms. </p>
                    <p>Jangan bingung lagi jika masakan yang Moms buat terlalu asin.  Semuanya masih bisa disiasati dengan cara-cara yang mudah untuk dipraktekan kok! selamat mencoba Moms!</p>',
                    'attachment' => 'articles/artikel-18/thumbnail.png',
                    'publish_at' => Carbon::parse('July 14th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Memasak Sayuran Agar Gizi dan Vitaminnya Tetap Utuh',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-19/top.png">
                    <p>Sayuran memang sangat enak dan lezat jika disantap dalam keadaan matang dan dimasak dengan menggunakan berbagai jenis bumbu maupun rempah-rempah. Apalagi, mengonsumsi sayuran pastinya membuat tubuh menjadi lebih sehat karena banyak mengandung vitamin, mineral dan nutrisi. Tapi kalau salah dalam mengolahnya, gizi dan semua kebaikan yang terdapat di dalam sayuran malah bisa hilang. </p>
                    <p>Banyaknya cara dalam memasak sayuran tentu punya hasil kematangan yang berbeda-beda. Walaupun teknik memasaknya yang berbeda, Moms harus memastikan agar semua kebaikan gizi, vitamin dan mineral yang terdapat di dalam sayuran terjaga. Nah, agar sayuran tetap bergizi ketika dimasak, yuk simak cara berikut!</p>
                    <ol>
                    <li>Cuci Bersih Sayuran</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-19/cara-1.png">
                    <p>Setelah membeli sayuran, pastikan bahwa sayuran sudah bersih sebelum dimasak. Cuci di air yang mengalir selama beberapa menit. Mencuci sayuran sangat penting lho Moms untuk menghilangkan kotoran, bakteri serta sisa pestisida yang masih menempel. Tapi awas, mencuci sayuran dengan cara direndam itu tidak benar lho, Moms, karena merendam sayuran hanya akan membuat kandungan nutrisinya hilang. </p>
                    <ol start="2">
                    <li>Potong Sayuran</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-19/cara-2.png">
                    <p>Pemotongan sayuran juga berpengaruh dalam menjaga gizinya agar tetap utuh, untuk itu disarankan memotong sayuran dengan bentuk yang besar agar nutrisinya tidak mudah hilang selama proses memasak. Semakin kecil potongan sayuran maka semakin kecil juga kandungan yang terdapat didalamnya dan semakin mudah hilang nutrisinya. Kalau Moms merasa susah mengonsumsi sayuran dengan potongan yang terlalu besar, Moms bisa memotongnya dengan ukuran yang lebih kecil ketika sayuran sudah matang. </p>
                    <ol start="3">
                    <li>Teknik memasak</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-19/cara-3.png">
                    <p>Dengan teknik memasak yang tepat, gizi dari sayuran bisa tidak banyak yang terbuang. Memasak sayuran dengan cara dikukus merupakan teknik memasak yang paling baik untuk mempertahankan nutrisinya, terutama untuk sayuran yang banyak mengandung air seperti brokoli, wortel, kacang panjang, kembang kol dan sayuran berdaun hijau. </p>
                    <p>Nah jika Moms ingin memasak dengan cara ditumis, cukup masukkan sedikit minyak untuk menumis sayuran dan pastikan untuk tidak menumisnya terlalu lama. Jenis sayuran yang cocok untuk ditumis adalah buncis, kacang panjang, kol dan jamur.  </p>
                    <p>Selain dikukus dan ditumis, direbus sepertinya paling sering digunakan saat memasak sayuran. Ada baiknya Moms mencoba teknik blanching, yaitu merebus sayuran dalam waktu yang sangat cepat pada suhu air yang lebih rendah, sebelum air mendidih agar gizinya tidak hilang.</p>
                    <p>Nah dengan beberapa tips diatas, tidak perlu takut kandungan baik pada sayuran akan menghilang. Kuncinya masaklah sayuran menggunakan suhu yang tidak terlalu panas atau api sedang. Jangan memasaknya dengan waktu yang terlalu lama, apalagi sampai berubah warna. Mudah kan? Selamat mencoba! </p>',
                    'attachment' => 'articles/artikel-19/thumbnail.png',
                    'publish_at' => Carbon::parse('July 22nd 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Menyimpan Beras Agar Tidak Ada Kutu dan Berjamur',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-20/top.png">
                    <p>Moms suka membeli beras dalam jumlah yang banyak? Kalau iya, perawatannya juga harus ekstra karena jamur dan kutu menjadi ancaman untuk semua jenis beras nih Moms. Mau beras yang kualitasnya biasa sampai yang kualitasnya bagus, beras merupakan tempat untuk kutu berkembang dengan baik. </p>
                    <p>Nah jangan sampai beras yang Moms beli terserang kutu. Karena jika sudah seperti ini, pastinya jadi tidak enak dikonsumsi, dan aromanya pun sudah lain dan tidak wangi. Untuk mencegah jamur dan kutu berkembang biak di dalam beras, ternyata menyimpan beras di tempat yang bersih saja belum tentu menjamin. Jadi, ikuti tips-tips berikut ya Moms!</p>
                    <ol>
                    <li>Simpan di wadah tertutup dan kering</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-20/cara-1.png">
                    <p>Wadah beras yang lembab bisa jadi sarang jamur dan kutu lho, Moms. Jadi, simpan beras di wadah yang kering, tertutup, dan pastinya tidak lembab. Jika jumlah berasnya banyak, simpan di wadah yang lebih besar juga ya Moms, jangan di wadah kecil karena lebih mudah lembab.</p>
                    <ol start="2">
                    <li>Campur beras dengan daun jeruk</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-20/cara-2.png">
                    <p>Mencampur daun jeruk purut untuk menyimpan beras bisa menghindarinya dari kutu dan jamur. Tapi sebelum dicampur, Moms harus menumbuk daun jeruknya dulu, lalu balut dengan kain kasa supaya tidak mengotori berasnya. Oh iya, daun jeruk ini juga bisa membuat berasnya beraroma wangi dan segar lho, Moms.</p>
                    <ol start="3">
                    <li>Selipkan bawang putih di tiap sudut wadah beras</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-20/cara-3.png">
                    <p>Aroma bawang putih tidak disukai kutu, jadi Moms bisa masukkan bawang putih ke dalam wadah beras. Tapi jangan asal dimasukkan ya, kupas dulu bawang putihnya lalu selipkan di setiap ujung wadah beras.</p>
                    <ol start="4">
                    <li>Taruh wadah beras di tempat sejuk dan terpapar cahaya matahari</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-20/cara-4.png">
                    <p>Kutu dan jamur tidak suka tempat yang terkena cahaya matahari. Jadi, Moms simpan beras dalam wadah tertutup yang kering dan bersih, kemudian letakkan  di ruangan yang sejuk serta terdapat cahaya matahari dan udara yang cukup.</p>
                    <p>Setelah itu, sebelum beras dimasak, pastikan beras benar-benar dicuci  bersih ya Moms. jadi jika ada kotoran seperti pasir kecil atau gabah tidak ikut termasak juga. Selamat mencoba! </p>',
                    'attachment' => 'articles/artikel-20/thumbnail.png',
                    'publish_at' => Carbon::parse('July 28th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Tips Mudah Membersihkan Cobek Batu',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-33/top.png">
                    <p>Moms pastinya punya alat dapur yang satu ini kan? Cobek seringkali digunakan untuk menyiapkan bumbu masakan tradisional. Beberapa bumbu masakan yang dihaluskan dengan cobek terasa lebih nikmat dibandingkan menghaluskan bumbu menggunakan mesin. Cobek biasanya terbuat dari batu atau kayu, tapi kebanyakan orang memilih cobek batu karena lebih kuat dan tahan lama. Sebenarnya tidak perlu perawatan khusus untuk cobek batu ini, namun membersihkan cobek batu dengan asal-asalan bisa jadi membahayakan kesehatan keluarga Moms, maka dari itu Moms perlu mengerti cara membersihkan cobek yang benar agar cobek tetap higienis. </p>
                    <ol>
                    <li>Pastikan mencuci cobek</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-33/cara-1.png">
                    <p>Setelah selesai dipakai, sebaiknya segera cuci bersih cobek batu menggunakan air hangat. Gunakan sikat kasar atau kawat pencuci piring agar sisa-sisa kotoran yang tertinggal di dalam pori-pori cobek bisa terangkat seluruhnya. Setelah itu bersihkan menggunakan sabun pencuci piring dan gosok-gosok lagi hingga bersih. </p>
                    <ol start="2">
                    <li>Bersihkan dengan beras</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-33/cara-2.png">
                    <p>Jika Moms merasa kotoran yang tersisa di cobek tidak terangkat, Moms bisa menggunakan beras untuk membersihkannya. Tuangkan sekitar dua sendok makan beras putih ke dalam cobek. Ulek hingga beras berubah warna menjadi gelap. Buang beras dan ulangi lagi proses yang sama hingga beras benar-benar putih, yang menandakan bahwa cobek sudah benar-benar bersih. Setelah itu bilas dengan air hangat dan pastikan kalau cobek benar-benar sudah kering sebelum disimpan.</p>
                    <ol start="3">
                    <li>Simpan di tempat kering</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-33/cara-3.png">
                    <p>Tempat penyimpanan cobek akan mempengaruhi kondisi cobek. Cobek batu akan lebih tahan jamur jika disimpan di tempat kering dan tidak lembab. Moms bisa mengeringkannya dibawah sinar matahari atau lap menggunakan kain bersih. Jika cobek dalam keadaan lembab maka akan mudah jamuran yang jelas-jelas berbahaya untuk kesehatan. </p>
                    <p>Nah sekarang udah tau kan Moms caranya agar cobek batu yang sering dipakai tetap terjaga kebersihannya? Selamat mencoba ya, Moms! </p>',
                    'attachment' => 'articles/artikel-33/thumbnail.png',
                    'publish_at' => Carbon::parse('September 1st 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Kegunaan Baking Powder Selain Untuk Memasak',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-34/top.png">
                    <p>Moms suka membuat kue? Berarti udah gak asing lagi dong dengan bahan pembuat kue yang satu ini. Baking powder jadi bahan yang sangat penting dalam pembuatan kue agar adonan kue yang Moms buat dapat mengembang sempurna dan bisa memberikan tekstur yang menarik pada hasil kue nantinya.</p>
                    <p>Uniknya, baking powder ini bukan cuma bisa digunakan untuk memasak, Moms. Sebagai bubuk dengan bahan dasar bikarbonasi, ia juga mampu menjadi bahan pembersih untuk beberapa perabot penting di dapur. Mau tahu apa aja? Intip di sini ya, Moms!</p>
                    <ol>
                    <li>Mengosongkan pipa wastafel</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-34/cara-1.png">
                    <p>Pipa saluran wastafel sering tersumbat? Enggak usah lagi memanggil orang lain untuk membersihkan kotoran yang menyumbatnya, sebungkus baking powder cukup lho untuk mengosongkan pipa wastafel yang tersumbat. Tuangkan air panas ke dalam pipa yang penyaring kotorannya telah diangkat, masukkan baking powder ke dalamnya, lalu tunggu selama 5 menit. Kemudian, masukkan cuka dapur &amp; air panas lagi ke dalamnya dan tunggu sekitar 5-10 menit. Setelah itu, alirkan pipa dengan air keran. Kotoran yang menyumbat wastafelnya akan keluar dari saluran pipanya deh, Moms!</p>
                    <ol start="2">
                    <li>Membersihkan perabot makan silver</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-34/cara-2.png">
                    <p>Perabot makan silver seperti sendok, garpu, dan pisau roti yang sudah kotor atau berubah warna bisa bersih kembali seperti baru lho, Moms. Caranya, bersihkan perabot makan dengan pasta yang terdiri dari baking powder dan air dengan perbandingan 3:1, lalu usapkan pasta ini ke bagian-bagian perabot yang kotor. Gosok hingga noda kotor menghilang. Mudah kan, Moms?</p>
                    <ol start="3">
                    <li>Menghapus sisa adonan di loyang</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-34/cara-3.png">
                    <p>Siapa sangka baking powder yang dipakai untuk memanggang kue juga bisa untuk membersihkan sisa panggangannya? Jika ada sisa adonan di loyang yang sulit dibersihkan, Moms tinggal merendam permukaannya dengan campuran taburan baking powder, air hangat, dan sabun cuci, lalu tunggu sekitar 15 menit. Dengan cara ini, kotoran adonan tadi akan terkelupas tanpa merusak loyangnya.</p>
                    <ol start="4">
                    <li>Pembersih wadah plastik</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-34/cara-4.png">
                    <p>Plastik memang wadah makanan yang merepotkan karena pewarna dan bau bahan makanan di dalamnya bisa menempel selama berminggu-minggu jika tidak dibersihkan dengan benar. Untuk membersihkannya, rendam wadah plastik yang kotor dengan campuran baking powder dan air hangat dengan rasio 4:1, lalu tunggu sekitar 15 menit. Terakhir, Moms gosok permukaannya untuk benar-benar melenyapkan bau dan kotorannya.</p>
                    <p>Tapi ingat, baking powder yang sudah mengeras tidak bisa lagi digunakan, jadi simpan baik-baik di wadah tertutup dan jangan dibiarkan terkena udara terlalu lama. Selamat mencoba Moms! </p>',
                    'attachment' => 'articles/artikel-34/thumbnail.png',
                    'publish_at' => Carbon::parse('September 5th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Kenali Jenis-jenis Bumbu Dapur dan Manfaatnya Untuk Masakan',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-35/top.png">
                    <p>Ngomongin soal masakan Indonesia, Moms pastinya setuju kan kalau bumbu dapur jadi kunci utama yang membuat masakan menjadi lezat? Banyaknya jenis bumbu dapur tentunya memiliki karakter dan peranan yang berbeda-beda juga untuk masakan yang akan dibuat, kalau Moms masih suka bingung dan suka tertukar dengan nama-nama nya, yuk simak penjelasannya</p>
                    <ol>
                    <li>Merica atau lada</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-35/cara-1.png">
                    <p>Merica dan lada itu dua hal yang sama kok Moms, hanya saja penyebutan yang berbeda. Umumnya merica punya rasa yang pedas dan sedikit pahit. Merica yang masih bulat diolah dengan cara ditumbuk dan banyak dijadikan bumbu menu masakan sehari-hari seperti sayur sop, bumbu ayam goreng dan masih banyak lagi. Merica juga tersedia dalam bentuk bubuk yang biasanya digunakan sebagai pelengkap makanan seperti saat memakan mie ataupun soto.</p>
                    <ol start="2">
                    <li>Ketumbar</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-35/cara-2.png">
                    <p>Kalau bumbu dapur yang satu ini mempunyai bentuk bulat dan berukuran sangat kecil, biasanya diolah dengan cara ditumbuk sampai halus. Aromanya yang khas dari ketumbar tentunya menambah kelezatan pada masakan yang Moms buat, macam-macam olahan yang menggunakan ketumbar sebagai bumbunya seperti dendeng, tempe bacem dan bumbu ungkep ayam goreng. </p>
                    <ol start="3">
                    <li>Serai</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-35/cara-3.png">
                    <p>Batang tanaman ini jadi bumbu andalan yang selalu dipakai dalam masakan tradisional. Serai tidak memiliki rasa yang khas, tapi ia mempunyai aroma yang mampu membuat masakan menjadi harum. Serai diolah dengan cara dimemarkan lalu bagian ujung batangnya diikat agar tidak terlalu panjang, bisa juga diiris dengan halus. Serai berwarna hijau dan daging dalamnya berwarna putih, masakan yang menggunakan serai sebagai bumbunya ialah sambal matah, tom yum dan sate lilit.</p>
                    <ol start="4">
                    <li>Lengkuas</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-35/cara-4.png">
                    <p>Terkadang susah membedakan antara lengkuas dan jahe. Kalau dilihat dari bentuknya lengkuas memang sangat menyerupai jahe karena sama-sama berakar dan bentuknya berantakan, tapi yang membedakan ialah teksturnya. Lengkuas memiliki tekstur yang kasar dengan serat yang banyak. Selain itu, aroma khasnya bisa membuat masakan menjadi sedap. Olahan yang memakai lengkuas sebagai bumbunya seperti sayur asam dan aneka tumisan. Lengkuas diolah dengan cara dipotong dan dimemarkan. </p>
                    <ol start="5">
                    <li>Jahe</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-35/cara-5.png">
                    <p>Bumbu dapur yang satu ini terkenal mempunyai rasa pedas dan hangat. Tapi berbeda dari pedasnya cabai, rasa pedasnya bisa menghangatkan tubuh sehingga jahe juga sering dibuat menjadi minuman dan obat-obatan. Jahe juga mempunyai manfaat untuk menghilangkan bau amis, gak jarang jahe digunakan sebagai bumbu olahan saat memasak ikan sarden dan cumi. Jahe biasanya diolah dengan cara dipotong kecil atau diparut halus tergantung selera dan kebutuhan.</p>
                    <p>Itulah beberapa bumbu dapur yang sering digunakan sebagai bumbu wajib saat memasak, udah tau kan Moms cara mengolahnya seperti apa, selamat mencoba!</p>',
                    'attachment' => 'articles/artikel-35/thumbnail.png',
                    'publish_at' => Carbon::parse('September 10th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Cara Ampuh Menghilangkan Bau Bawang Putih yang Menempel di Tangan',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-36/top.png">
                    <p>Hampir semua masakan menggunakan bawang putih sebagai bumbunya. Keunggulan dari bawang putih sendiri yaitu bisa membuat masakan menjadi lebih lezat dan gurih, namun di setiap kelebihan pastinya selalu ada kekurangan kan, Moms.</p>
                    <p>Karena aromanya yang terlalu kuat, saat mengiris bawang putih seringkali meninggalkan bau yang kurang sedap di tangan. Meski sudah mencuci tangan berkali-kali, baunya masih tetap saja menempel. Gak jarang jadi menjengkelkan banget ketika harus mengiris bahan masakan yang satu ini.  Kalau Moms sering merasa seperti ini, berikut ada cara mudah yang bisa menghilangkan aroma bawang putih agar tidak menempel ditangan </p>
                    <ol>
                    <li>Pasta gigi</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-36/cara-1.png">
                    <p>Siapa yang menyangka pasta gigi bisa menghilangkan bau bawang putih yang menyengat. Caranya cukup oleskan pasta gigi pada telapak tangan lalu gosokan kedua tangan selayaknya mencuci tangan menggunakan sabun. Setelah itu bilas tangan hingga bersih.</p>
                    <ol start="2">
                    <li>Cuka</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-36/cara-2.png">
                    <p>Cuka bisa jadi alternatif yang tepat untuk membersihkan aroma bawang putih, tapi tidak perlu banyak-banyak saat menuang cuka ke tangan karena bisa-bisa malah jadi bau cuka. Cuka termasuk cairan asam yang bisa mengangkat kotoran serta bau yang melekat pada tangan. Membasuh tangan dengan cuka selama 30 detik sebelum mencucinya akan membantu menghilangkan bau bawang putih ini.</p>
                    <ol start="3">
                    <li>Stainless steel</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-36/cara-3.png">
                    <p>Ternyata benda yang terbuat dari stainless steel bisa menghilangkan bau bawang putih lho Moms, caranya juga sangat mudah kok tinggal gosokan tangan ke benda-benda stainless steel seperti sendok, oven atau bak cuci piring. Bau bawang yang terjadi karena kandungan sulfur di dalamnya akan bereaksi dengan chromium yang terdapat di stainless steel yang kemudian akan menetralisir bau bawang yang menempel di tangan.</p>
                    <ol start="4">
                    <li>Lemon dan garam</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-36/cara-4.png">
                    <p>Garam juga bisa lho membuat tangan Moms menjadi wangi kembali. Caranya, ambil garam dan letakkan di telapak tangan lalu beri air sedikit, lalu gosok tangan selama beberapa saat dan bilas hingga bersih. Selain garam, Moms juga bisa merendam tangan yang beraroma bawang putih dengan air perasan lemon. Rendam selama beberapa menit, lalu bilas. Tangan pun menjadi harum dan bebas dari bau bawang putih yang menyengat.</p>
                    <p>Gak perlu khawatir lagi kan Moms sama bau bawang putih yang gak bisa hilang? Semuanya dapat diselesaikan menggunakan cara mudah diatas, selamat mencoba!</p>',
                    'attachment' => 'articles/artikel-36/thumbnail.png',
                    'publish_at' => Carbon::parse('September 22nd 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Kenali Jenis-Jenis Potongan untuk Masakanmu!',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-29/top.png">
                    <p>Moms, sering kebingungan ketika sedang membaca buku resep terdapat istilah potongan sayuran yang terdengar asing di telinga? Nama-nama tersebut adalah jenis potongan sayur yang sangat mempengaruhi hasil masakan karena tiap potongan memiliki bentuk akhir yang berbeda, dan satu jenis potongan gak selalu bisa dipakai untuk semua jenis sayur. Jadi, Moms harus paham jenis-jenis potongan sayurnya supaya bisa matang dengan merata dan penampilan masakannya jadi lebih menarik. Intip penjelasan jenis-jenis potongannya di sini ya, Mom!</p>
                    <ol>
                    <li>Dice (Kubus)</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-29/cara-1.png">
                    <p>Jenis potongan sayuran yang satu ini merupakan potongan yang paling umum digunakan pada saat memasak. Berbentuk kubus, potongan ini memiliki ukuran bermacam-macam ada ukuran yang  besar dan  kecil, tergantung kebutuhannya. Kunci dari potongan kubus ini ialah konsistensi ukurannya. Potongan ini sering sekali digunakan dalam banyak olahan makanan seperti sup, salad, isian lumpia, dan masih banyak lagi dengan sayuran bertekstur keras dan padat seperti kentang, wortel, lobak, dan sayuran akar lainnya. </p>
                    <ol start="2">
                    <li>Jardiniere (Memanjang)</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-29/cara-2.png">
                    <p>Kalau potongan yang satu ini, istilahnya pasti sering moms temukan di dalam resep masakan. Jangan khawatir, potongan jenis Jardiniere atau memanjang berbentuk balok ini sebenarnya cukup mudah untuk dilakukan, Moms. Potongan memanjang biasanya digunakan untuk sayuran seperti wortel, lobak, ubi, dan sayuran-sayuran keras lainnya. Selain itu, ukurannya pun bisa disesuaikan tergantung dari sayuran yang akan dimasak. </p>
                    <ol start="3">
                    <li>Chiffonade (Irisan)</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-29/cara-3.png">
                    <p>Jenis potongan yang diiris, pastinya sudah sering Moms praktekan saat memasak. Potongan ini istilah masaknya ialah Chiffonade atau iris tipis, sering digunakan ketika membuat bakwan atau saat menumis bumbu masakan, cocok untuk sayuran seperti kol, sawi putih dan seledri. Tebal dan tipisnya potongan irisan dapat Moms sesuaikan dengan sayuran yang akan dimasak.</p>
                    <ol start="4">
                    <li>Chopped (Cincang)</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-29/cara-4.png">
                    <p>Kalau jenis potongan yang satu ini, nama umumnya adalah cincang dengan bentuk yang tidak selalu beraturan dan ukuran nya pun tidak sama. Jika Moms tidak punya waktu banyak untuk menghaluskan bumbu dapur, moms bisa gunakan jenis potongan cincang ini untuk mengolah bumbu masakan seperti, bawang merah, bawang putih, bawang bombay dan cabai. Tapi bumbu-bumbu tersebut memang tidak akan sepenuhnya bertekstur halus ya, Moms!</p>
                    <ol start="5">
                    <li>Minced (Halus)</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-29/cara-5.png">
                    <p>Apa bedanya potongan cincangan dan potongan halus? Jelas beda Moms, potongan ini lebih halus dari potongan cincang. Ketika dilihat sekilas, hasil potongan ini seperti bumbu yang sudah dihaluskan atau di uleg, cocok untuk memotong bumbu dapur, seperti bawang merah, bawang putih, dan jahe. Potongan ini biasanya juga digunakan untuk sajian olahan makanan western. Jika ingin membuat saus untuk spaghetti atau cream soup, potongan halus ini bisa Moms praktekan. </p>
                    <p>Nah sekarang udah tau kan jenis-jenis potongan apa saja yang biasa digunakan, Moms? Selamat mencoba ya Moms!</p>',
                    'attachment' => 'articles/artikel-29/thumbnail.png',
                    'publish_at' => Carbon::parse('October 3rd 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Jenis-jenis Bawang untuk masakanmu',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-30/top.png">
                    <p>Hampir semua masakan yang Moms buat pasti menggunakan bawang sebagai bumbunya kan? Bawang merupakan salah satu bahan yang penting untuk berbagai jenis masakan. Selain untuk memberikan rasa, bawang juga menambah aroma masakan agar jadi lebih lezat disantap. Namun yang perlu moms tau, ternyata setiap jenis bawang mempunyai keunggulannya masing-masing lho. Penasaran? berikut penjelasannya:</p>
                    <ol>
                    <li>Bawang Merah</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-30/cara-1.png">
                    <p>Bawang merah biasanya diolah dengan cara dihaluskan untuk menambahkan rasa pada masakan, diiris, atau digoreng kering sebagai taburan pada makanan, tapi enggak jarang juga bawang merah dimakan mentah atau dijadikan acar untuk jenis-jenis masakan tertentu. Bawang Merah mengandung vitamin C, kalium, serat, asam folat, kalsium dan zat besi yang dapat memperkuat sistem kekebalan tubuh. Nah, agar bawang merah di rumah awet, moms harus menyimpan bawang merah di tempat yang kering agar tidak bertunas dan masih bisa digunakan, jangan di tempat lembab ya Moms!</p>
                    <ol start="2">
                    <li>Bawang Putih</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-30/cara-2.png">
                    <p>Bawang putih mengeluarkan rasa gurih &amp; aroma yang khas pada setiap masakan, serta dipercaya ampuh untuk menangkal beberapa jenis penyakit dan memiliki banyak manfaat untuk kesehatan, seperti menurunkan kadar kolesterol, mengendalikan tekanan darah, menjaga kesehatan otak, bahkan hingga penyakit seperti kanker dan jantung. Penggunaannya biasanya dicincang, dimemarkan, atau dihaluskan. Untuk tempat penyimpanannya sama nih, moms. Harus ditempat yang kering ya.</p>
                    <ol start="3">
                    <li>Bawang Bombay</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-30/cara-3.png">
                    <p>Bawang bombay ini berukuran besar, dengan kulit yang berwarna coklat kekuningan, berbeda dari bawang merah atau putih. Ia digunakan untuk memberikan aroma wangi yang ringan dan menambahkan rasa manis pada masakan. Biasanya bawang bombay harus ditumis terlebih dahulu hingga layu agar rasa manis dari bawang bombay keluar dan menambahkan cita rasa yang unik pada masakan, tapi cocok juga sebagai pelengkap makanan panggangan karena teksturnya renyah. Selain menambah cita rasa yang unik, bawang bombay mengandung vitamin B6 dan vitamin C yang sangat baik untuk sistem pencernaan.</p>
                    <ol start="4">
                    <li>Bawang Bombay Merah</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-30/cara-4.png">
                    <p>Berwarna ungu tua, ia sangat mirip dengan bawang merah namun lebih besar dan jarang ditemui di pasar. Perbedaan bawang bombay merah dengan bawang bombay yang biasa ialah terletak pada teksturnya yang sedikit lebih tebal dan keras. Kandungan dan vitamin bawang ini sama dengan bawang bombay pada umumnya, namun bawang bombay merah juga mengandung serat dan asam folat yang membantu memperbaiki sel tubuhmu. Biasanya, bawang bombay merah ini paling sering dipakai untuk campuran salad, isi burger, atau salah satu bumbu penyedap kari karena mengandung bau dan rasa yang lebih lembut daripada bawang lainnya.
                    Nah sekarang moms sudah tahu kan perbedaan dari beberapa jenis bawang yang biasa digunakan pada masakan-masakan? Coba dong moms, berikan saran atau komentar bagaimana bawang-bawang tersebut biasanya digunakan!</p>',
                    'attachment' => 'articles/artikel-30/thumbnail.png',
                    'publish_at' => Carbon::parse('October 11th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Mengupas Jahe Dengan Sendok? Bisa Kok!',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-31/top.png">
                    <p>Moms, pasti udah nggak asing dengan bumbu dapur yang satu ini kan? Jahe memang salah satu bumbu dapur wajib yang sering digunakan saat mengolah makanan ataupun minuman, terutama masakan tradisional Indonesia. Namun bentuknya yang tidak beraturan ini seringkali membuat moms kesulitan untuk mengupasnya.
                    Memang sih moms bisa mengupas jahe menggunakan pisau, tapi cara yang satu ini kayaknya sudah tidak efektif lagi nih Moms. Karena jika moms mengupas jahe dengan menggunakan pisau, secara tidak sadar akan banyak bagian dari jahe yang ikut terbuang bersama kulitnya nih.
                    Nah ternyata ada cara yang lebih mudah dan cepat untuk mengupas jahe nih moms. Caranya adalah dengan menggunakan sendok. Dengan mengupas menggunakan sendok, akan meminimalisir jahe yang ikut terbuang bersama kulitnya. Selain itu juga dengan sendok, moms bisa meminimalisir terjadinya kecelakaan terluka karena terkena pisau dapur. Bingung bagaimana caranya mengupas jahe menggunakan sendok? Ikuti langkah-langkah berikut ini ya!</p>
                    <ol>
                    <li>Cuci jahe</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-31/cara-1.png">
                    <p>Jahenya harus dicuci dulu sebelum dikupas ya Moms, agar kotorannya tidak tercampur ke dalam dagingnya ketika diiris dan lebih mudah memasaknya. Sambil dicuci, gosok-gosok permukaan kulit jahe sampai ke celah-celah kecilnya dengan jari atau ujung gagang sendok supaya benar-benar bersih.</p>
                    <ol start="2">
                    <li>Kupas dengan sendok</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-31/cara-2.png">
                    <p>Sebenarnya sendok yang dipakai bebas ukurannya tergantung ukuran jahenya sendiri, tapi Moms disarankan untuk menggunakan sendok teh agar tidak terlalu sulit untuk mengupas jahenya. Pegang jahe di tangan sebelah kiri dan sendok teh pada tangan sebelah kanan. Kemudian kerok tipis-tipis kulit jahe.</p>
                    <ol start="3">
                    <li>Simpan di freezer usai digunakan</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-31/cara-3.png">
                    <p>Usai menggunakan jahenya, Moms bisa menyimpannya di dalam freezer dengan batas waktu kadaluarsanya sekitar 6 bulan bila disimpan begini. Masukkan daging-daging jahenya ke dalam plastik zip agar baunya tidak menyebar dan simpan di freezer supaya bisa digunakan lagi, lalu tinggal Moms keluarkan dari freezer bila ingin digunakan lagi</p>
                    <p>Dengan cara ini dipercaya dapat mengurangi daging jahe yang ikut terbuang pada saat mengupasnya dengan pisau, karena hanya kulit jahe yang akan terbuang. Nah gimana moms, tertarik nggak untuk mencoba tips yang satu ini? Selamat mencobanya ya moms!</p>',
                    'attachment' => 'articles/artikel-31/thumbnail.png',
                    'publish_at' => Carbon::parse('October 22nd 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Tips Merebus Telur Sesuai Tingkat Kematangannya!',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-32/top.png">
                    <p>Moms ingin memasak telur rebus setengah matang untuk langsung disantap? atau matang untuk diolah jadi telur balado? Untuk merebus telur ternyata susah-susah gampang nih. Untuk bisa mendapatkan telur rebus yang sempurna untuk jenis masakanmu, perlu memperkirakan waktu yang digunakan nih moms. Mau bisa membuat telur rebus sesuai dengan tingkat kematangan yang moms inginkan? Tenang, itu semua bisa dilakukan dengan mengatur berapa lama waktu ketika merebusnya, waktu perebusan dihitung saat telur mulai  dimasukan ke dalam air yang mendidih ya, Moms! Tips lengkapnya? yuk, simak dibawah ini:</p>
                    <ol>
                    <li>4 menit</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-32/cara-1.png">
                    <p>Jika ingin mendapatkan hasil yang setengah matang dengan tekstur putih telur yang sudah matang sementara kuning telur masih cair, kuncinya adalah merebusnya dengan waktu tepat 4 menit. Dengan waktu perebusan selama 4 menit, tekstur telur yang Moms buat akan kokoh dari luar karena putih telur yang sudah matang, tapi runny pada bagian kuning telurnya. Tapi jangan biarkan si kecil  terlalu sering mengkonsumsi telur dengan tekstur setengah matang seperti ini ya, Moms!</p>
                    <ol start="2">
                    <li>8-9 menit</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-32/cara-2.png">
                    <p>Kalau Moms ingin mendapatkan hasil telur rebus yang matang namun teksturnya kuning telurnya masih lembut, merebus telur dengan jangka waktu 8-9 menit ini solusinya. Jika si kecil tidak suka telur yang masih setengah matang karena bau kuning yang masih amis, merebus telur seperti ini dijamin bikin si kecil suka dan lahap makan kerena kuning telur tidak berbau amis dan tekstur telurnya juga masih lembut.</p>
                    <ol start="3">
                    <li>12-14 menit</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-32/cara-3.png">
                    <p>Waktu memasak selama 14 menit akan menghasilkan telur rebus yang benar-benar matang sempurna, Moms! Bagian putih dan kuning telurnya akan matang dan memadat. Tekstur  telur rebus yang seperti ini biasanya sering dibuat untuk menu olahan seperti telur balado atau semur telur moms karena telur ini tidak mudah hancur.
                    Hindari memasak telur lebih dari 14 menit ya, moms jika tidak ingin telur rebus terlalu matang. Telur rebus yang terlalu matang juga tidak baik untuk dikonsumsi karena biasanya telur ini sudah memiliki sedikit rasa yang pahit akibat terlalu lama proses merebusnya. Ciri telur rebus yang terlalu matang yaitu sudah terdapat selaput berwarna abu-abu di bagian luar kuning telur. Jika dipotong melintang, selaput abu-abu tersebut terlihat seperti cincin. Telur rebus seperti ini sangat keras di bagian kuning telurnya sehingga terasa berpasir saat disantap.
                    Gimana tips merebus telur sesuai tingkat kematangannya, Moms?  Mudah kan untuk di praktekan? Selamat mencoba!</p>',
                    'attachment' => 'articles/artikel-32/thumbnail.png',
                    'publish_at' => Carbon::parse('October 29th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Mau Menyimpan Kelebihan Makanan? Cek Tips Berikut Moms!',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-13/top.png">
                    <p>Moms bingung jika membeli atau memasak makanan dalam porsi yang besar? Nah, Kelebihan makanan bisa Moms simpan untuk dimakan lagi dikemudian hari lho. Kelebihan makanan bisa disiasati dengan cara menghangatkan makanan sebelum disimpan. Makanan seperti sayur atau goreng-gorengan sebaiknya dipanaskan terlebih dahulu. Untuk masakan yang berkuah, pastikan memanaskannya sampai mendidih, sedangkan untuk makanan yang berbumbu kental, tambahkan sedikit air lalu tunggu sampai mendidih. Setelah dipanaskan jangan langsung simpan di wadah yang tertutup ya. Biarkan dulu beberapa saat sampai agak dingin karena uap air dapat menyebabkan makanan yang disimpan jadi tidak bisa tahan lama. Bagaimana sih cara menyimpan kelebihan makanan? Yuk simak Moms!</p>
                    <ol>
                    <li>Pilih Wadah yang Kedap Udara</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-13/cara-1.png">
                    <p>Saat menyimpan makanan, pilihlah wadah yang kedap udara supaya lebih aman dan terlindungi dari bakteri dan kuman. Kalau nggak ada wadah yang tertutup atau wadah kedap udara, Moms bisa membeli plastik wrapping untuk menutup makanan atau bisa juga menggunakan plastik es atau plastik bening yang diikat dengan karet. Makanan yang akan disimpan harus langsung disimpan ke dalam kulkas ya. Pastikan juga kulkas nggak penuh sesak oleh makanan lain supaya ada sirkulasi udara yang bisa membuat makanan lebih tahan lama.</p>
                    <ol start="2">
                    <li>Jangan Mencicipi Makanan dengan Tangan/Sendok yang Sudah Digunakan</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-13/cara-2.png">
                    <p>Gunakan sendok yang bersih ya Moms dan jangan juga terlalu sering mengaduk-aduk makanan yang sudah tersimpan di dalam kulkas. Jika ingin dikonsumsi, ambil makanan dengan menggunakan sendok yang bersih, kemudian simpan kembali kelebihan makanan yang masih tersisa.</p>
                    <p>Jadi sekarang udah tau kan Moms caranya supaya kelebihan makanan yang tidak terbuang begitu saja? Kalau bosan dengan sisa makanan yang ada, Moms masih bisa memanaskannya dan dikreasikan menjadi menu lainnya juga kok, selamat mencoba! </p>',
                    'attachment' => 'articles/artikel-13/thumbnail.png',
                    'publish_at' => Carbon::parse('January 5th 2019'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Cara Memilih Udang Yang Masih Segar',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-14/top.png">
                    <p>Nggak perlu diragukan lagi kalau udang menjadi salah satu seafood yang paling banyak digemari. Selain kaya akan nutrisi yang baik untuk tubuh, udang juga mempunyai rasa yang gurih dan manis, serta tekstur daging yang sangat lembut. Tapi jangan salah,udang bukan bahan makanan yang bisa bertahan lama lho, Moms. Udang sangat mudah rusak seperti jenis ikan dan seafood pada umumnya. </p>
                    <p>Jika ingin udang terasa lezat dan fresh ketika dimasak, kuncinya ada pada kesegaran dari udang itu sendiri. Memilih udang yang segar sebenarnya sangat mudah, kadang udang yang kelihatannya masih bagus belum tentu segar dan fresh. Banyak juga yang menggunakan bahan pengawet atau kimia agar udang tetap terlihat segar, untuk menghindarinya Moms harus benar-benar memahami cara memilih udang yang baik. </p>
                    <ol>
                    <li>Cium Aroma Udang</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-14/cara-1.png">
                    <p>Jika udang mengeluarkan aroma yang tidak enak seperti bau amis dan keasaman tandanya udang sudah tidak layak lagi untuk dikonsumsi. Udang yang masih segar, selayaknya aroma ikan yaitu berbau amis tapi tidak menyengat. Udang yang masih segar juga akan terlihat mengkilat dan tidak berlendir dibagian kulitnya. Jika Moms mendapati udang yang berlendir dan berbau tidak enak, sudah bisa dipastikan kalau udang tersebut memang tidak segar. </p>
                    <ol start="2">
                    <li>Perhatikan Warna dan Tekstur Udang</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-14/cara-2.png">
                    <p>Udang yang masih segar akan berwarna abu-abu cerah dan bening. Jika warnanya sudah berubah menjadi kemerahan atau malah membiru, itu tandanya tidak segar lagi. Selain dari warnanya, Udang segar juga bisa dikenali dari teksturnya yang kokoh dan utuh. Jangan pilih udang yang bertekstur lembek ya Moms, apalagi kalau bentuknya sudah tidak utuh lagi. Ciri-ciri udang yang utuh adalah kepala masih menyambung dengan bagian badannya. Selain itu, isi kepala udang juga belum pecah dan ditekan masih terasa kenyal dan keras. Kalau Moms sering membeli udang yang beku, ada baiknya jika proses “thawing” ( pencairan ) dilakukan perlahan-lahan dengan mendiamkannya dalam lemari dingin bersuhu 5 – 10 ° C. Dengan cara ini akan membuat tekstur daging udang tidak menjadi rusak dan juga tetap kenyal.</p>
                    <p>Jadi sekarang udah gak bingung lagi kan untuk memilih udang yang masih segar? Udang yang masih segar sangat berpengaruh pada kelezatan masakan lho, jangan sampai salah pilih ya Moms. selamat mencoba! </p>',
                    'attachment' => 'articles/artikel-14/thumbnail.png',
                    'publish_at' => Carbon::parse('January 13th 2019'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Cegah bau tidak sedap dengan rutin membersihkan kulkas',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-15/top.png">
                    <p>Kulkas atau lemari pendingin wajib banget untuk dibersihkan secara rutin Moms. Selain dapat menimbulkan bau yang tidak sedap, di dalam kulkas yang kotor juga bisa terdapat banyak kuman yang membuat makanan jadi tidak higienis lagi.</p>
                    <p>Terkadang membersihkan kulkas memang membutuhkan waktu yang cukup lama, tapi sebenarnya ada cara yang efektif dan efisien untuk membersihkan kulkas lho.  Bisa menghemat banyak waktu dan tidak terlalu merepotkan juga, Moms. Nih, simak ya caranya!</p>
                    <ol>
                    <li>Pastikan stop kontak kulkas sudah tercabut</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-15/cara-1.png">
                    <p>Supaya tidak tersengat listrik ketika dibersihkan, matikan dulu kulkasnya. Selain supaya aman, bau yang tersisa di dalamnya juga tidak akan tersebar ke seluruh bagian kulkas karena tidak ada sirkulasi udara dingin di dalamnya.</p>
                    <ol start="2">
                    <li>Pisahkan makanan yang masih layak konsumsi</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-15/cara-2.png">
                    <p>Seringkali bahan makanan yang terlalu lama disimpan di kulkas akan membusuk, mengeluarkan bau tidak sedap, dan bisa merusak bahan makanan lainnya. Moms harus segera pisahkan bahan makanan yang masih layak konsumsi dan buang sisanya yang sudah atau akan busuk.</p>
                    <ol start="3">
                    <li>Keluarkan semua rak dan laci kulkas</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-15/cara-3.png">
                    <p>Supaya setiap bagian kulkas bisa bersih, Moms harus melepas semua bagian rak dan laci kulkas yang bisa dilepas. Kemudian, cuci hingga bersih dengan menggunakan spons yang sudah dibasahi dengan sabun cuci piring dan campuran perasan buah lemon. </p>
                    <ol start="4">
                    <li>Keringkan rak dan laci yang sudah dicuci sebelum dipasang</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-15/cara-4.png">
                    <p>Kulkas yang basah akan melembabkan isi ruangannya, sehingga muncul bau tidak sedap. Jadi, Moms harus pastikan semua benda di dalam kulkas sudah kering, termasuk rak dan laci yang baru dicuci.</p>
                    <ol start="5">
                    <li>Bersihkan isi kulkas dengan baking soda</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-15/cara-5.png">
                    <p>Sambil menunggu rak dan laci kulkas mengering, Moms bisa membersihkan bagian dalam kulkas dengan menggunakan spons basah yang dicampur baking soda. Caranya mudah kok, ambil dua sendok makan baking soda lalu beri air hangat secukupnya, aduk hingga rata agar tidak menggumpal. Tuangkan ke spons yang sudah dibasahi kemudian gosok bagian bagian terpencil di dalam kulkas, maka dijamin noda dan kotoran di dalam kulkas langsung hilang. Jika kotoran susah dijangkau, Moms bisa menggunakan sikat gigi yang sudah tidak terpakai. </p>
                    <p>Supaya kulkas tetap terjaga kebersihannya, ada baiknya untuk membersihkan secara rutin  minimal 2 bulan sekali. Jika terdapat noda harus segera dibersihkan ya Moms, jangan sampai mengeras karena nantinya malah susah untuk dihilangkan. Untuk menghilangkan masalah bau kulkas, Moms bisa menaruh air perasan jeruk lemon di wadah kecil dan taruh di setiap pojokan rak kulkas, ganti air perasan lemon seminggu sekali sambil mengecek makanan yang ada di dalam kulkas. Selain air perasan lemon, bisa juga menggunakan bubuk kopi. </p>
                    <p>Mudah kan Moms? Selamat mencoba!</p>',
                    'attachment' => 'articles/artikel-15/thumbnail.png',
                    'publish_at' => Carbon::parse('January 17th 2019'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Tips Mencegah peralatan dapur berkarat',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-16/top.png">
                    <p>Jika Moms punya banyak peralatan dapur di rumah, otomatis harus tau juga cara merawatnya. Terutama kalau terbuat dari logam dan alumunium. Proses memasak dan perawatan yang tidak tepat bisa membuat peralatan dapur jadi mudah terkena karat. Biasanya, alat dapur yang berkarat pasti akan langsung dibuang karena bisa membahayakan kesehatan. Memang cara itu benar, tapi tidak efektif jadinya Moms. Moms masih bisa lho untuk mengatasi peralatan dapur yang berkarat. Simak cara mencegahnya yuk Moms!</p>
                    <ol>
                    <li>Sering Gunakan Peralatan Masak</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-16/cara-1.png">
                    <p>Punya peralatan dapur yang bagus bukan berarti harus selalu disimpan dalam jangka waktu yang lama. Jarang digunakan, malah bisa menyebabkan karat Moms. Gunakan peralatan masak minimal sebulan sekali. Dengan begitu, peralatan masak tidak akan mudah kotor dan berkarat. Tapi pastikan peralatan masak tersebut tidak kotor dan lembab sehingga karat tidak akan mudah muncul. Selain itu, cobalah menghindari penumpukan alat masak yang jarang digunakan ya Moms.</p>
                    <ol start="2">
                    <li>Hindari Memasak Sampai Hangus</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-16/cara-2.png">
                    <p>Memasak yang terlalu lama bisa membuat peralatan menjadi hangus. Kalau sudah hangus tentu saja akan mengurangi lapisannya. Jika tidak segera dibersihkan, bisa menimbulkan kerak pada wajan yang akhirnya menjadi karat Moms. Untuk mencegahnya, oleskan sedikit minyak sayur bersih pada permukaan wajan atau panci yang hangus kemudian dicuci bersih. Minyak sayur dapat menjaga  permukaan penggorengan atau panci agar tidak berdebu, berkarat dan berjamur.  Lalu simpan di tempat yang terkena udara jangan di tempat yang lembab ya, Moms. </p>
                    <ol start="3">
                    <li>Pastikan Alat Masak Tidak Berkarat </li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-16/cara-3.png">
                    <p>Peralatan dapur yang berkarat sering kali dibuang, tapi kalau berkaratnya belum terlalu banyak dan menyebar masih bisa dibersihkan, Moms. Caranya sangat mudah dan dapat dipraktekan di rumah Moms. Bahan-bahan sederhana seperti lemon yang memiliki kandungan asam bisa loh membasmi karat pada alat masak.) Caranya siapkan buah lemon secukupnya, lalu belah menjadi dua bagian dan gosokan pada noda karat yang ada di alat dapur. Moms juga bisa menaburi garam sesekali dan gosok lagi sampai benar-benar bersih. Tapi jangan langsung dibilas ya Moms, diamkan dulu beberapa saat. Selain lemon ada banyak juga bahan lainnya yang bisa membasmi karat diantaranya cuka, kentang, dan minyak tanah, cara pemakaiannya pun sama hanya digosokkan sampai bersih. </p>
                    <p>Gimana tipsnya, mudah kan untuk dipraktekan?</p>',
                    'attachment' => 'articles/artikel-16/thumbnail.png',
                    'publish_at' => Carbon::parse('January 23rd 2019'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Margarin dan Mentega? Apa sih bedanya?',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-9/top.png">
                    <p>Margarine dan mentega merupakan bahan yang cukup penting dalam pembuatan kue. Jika dilihat secara sekilas, margarine dan mentega memang terlihat sama, tapi ternyata kedua bahan tersebut sangat berbeda dan tidak bisa disamakan lho, Moms. Mulai dari komposisi bahan, tekstur, hingga fungsi dan penggunaannya untuk memasak. Nah kalau Moms masih bingung bedanya margarine dan mentega, yuk simak info lengkapnya!</p>
                    <ol>
                    <li>Bahan dasar pembuatannya</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-9/cara-1.png">
                    <p>Perbedaan margarine dan mentega yang paling utama yaitu dari bahan dasar pembuatannya. Margarine dibuat dari lemak nabati seperti minyak sayur, air, garam, emulsifier dan sedikit memiliki lemak tak jenuh yang baik untuk tubuh. Sedangkan mentega terbuat dari lemak hewani, seperti susu sapi, domba atau kambing. </p>
                    <ol start="2">
                    <li>Warna dan tekstur</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-9/cara-2.png">
                    <p>Margarine memiliki warna kuning terang atau pekat, sedangkan mentega berwarna kuning pucat. Selain itu, tekstur dari margarine juga cenderung lebih lembut sedangkan mentega sedikit keras. </p>
                    <ol start="3">
                    <li>Kegunaan dalam masakan</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-9/cara-3.png">
                    <p>Margarin dan mentega memang bisa digunakan untuk berbagai macam bahan masakan.  Biasanya masakan yang cocok memakai margarin adalah tumisan atau gorengan, karena jika dibandingkan dengan minyak goreng hasil gorengan atau tumisan lebih beraroma dan gurih. Sementara itu, penggunaan mentega lebih sering untuk membuat masakan daging seperti steak, walaupun Moms juga bisa memakainya untuk menumis sayur.</p>
                    <p>Sebenarnya, keduanya bisa digunakan untuk membuat kue Moms, tapi karena teksturnya berbeda, maka jenis kue yang dibuat juga harus  sesuai dengan kebutuhan ya Moms. Kue yang berbahan dasar margarin akan menghasilkan adonan yang lembut dan mengembang sempurna. Untuk kue yang menggunakan mentega akan menghasilkan adonan yang kurang mengembang, tapi bisa jadi renyah dan padat.</p>
                    <ol start="4">
                    <li>Keawetan</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-9/cara-4.png">
                    <p>Nah, daya tahan dari kedua bahan makanan ini juga berbeda, Moms. Mentega dan margarine harus disimpan di kulkas supaya tahan lama dan tetap padat, tapi mentega lebih mudah basi dan tengik jika tidak disimpan dalam kulkas dibanding margarin karena bahan dasarnya lemak nabati.</p>
                    <p>Gimana Moms, sudah tahu kan perbedaan kedua bahan ini? Jangan sampai salah penggunaannya ya Moms. Selamat mencoba!</p>',
                    'attachment' => 'articles/artikel-9/thumbnail.png',
                    'publish_at' => Carbon::parse('February 1st 2019'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Mengolah bebek agar tidak bau amis',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-10/top.png">
                    <p>Mengolah bebek menjadi hidangan yang lezat sebenarnya tidak sulit kok Moms, tapi jika dibandingkan dengan ayam, mengolah bebek memang butuh trik khusus supaya tidak berbau amis. Nah kalau Moms ragu untuk mengolah daging bebek karena masih bingung seperti apa cara mengolah daging bebek yang benar, tidak perlu khawatir karena ada tips mudah yang bisa dipraktikkan saat memasaknya, yuk disimak!</p>
                    <ol>
                    <li>Cuci bersih daging bebek</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-10/cara-1.png">
                    <p>Sebelum diolah, pastikan daging bebek dicuci bersih terlebih dahulu untuk menghilangkan kotoran dan bulu-bulu yang masih menempel dengan air yang mengalir. Setelah dicuci bersih pada bagian luarnya, bersihkan bagian dalam tubuh bebek karena kalau tidak benar-benar dicuci dan dibersihkan hingga bersih, jeroan dan brutu bebek bisa membuat dagingnya menjadi amis. Setelah dibersihkan, potong-potong daging dengan ukuran sedang agar tekstur daging tidak hilang, jangan terlalu kecil dan jangan juga terlalu besar.</p>
                    <ol start="2">
                    <li>Oleskan dengan jeruk nipis</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-10/cara-2.png">
                    <p>Seperti yang Moms tau, jeruk nipis sangat ampuh untuk menghilangkan bau amis apapun, termasuk bau daging bebek. Caranya, baluri seluruh daging bebek dengan perasan jeruk nipis dan oleskan secara merata, lalu Moms diamkan selama 30 menit sampai bau amisnya hilang. Setelah didiamkan, pastikan untuk mencuci bersih lagi daging bebek agar rasa asam dari jeruk nipis tidak menempel dan mempengaruhi cita rasa asli daging bebek. </p>
                    <ol start="3">
                    <li>Rebus dengan rempah-rempah atau nanas</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-10/cara-3.png">
                    <p>Daging bebek yang sudah bersih, sebaiknya langsung direbus menggunakan macam-macam rempah agar bau amisnya benar-benar hilang. Moms bisa merebusnya dengan daun jeruk, daun salam, serai, jahe dan lengkuas. Selain itu, Moms juga bisa merebusnya dengan menggunakan buah nanas karena mengandung enzim bromelin yang bisa membuat daging bebek jadi lebih empuk. Supaya hasil rebusannya maksimal, waktu merebusnya harus sedikit lebih lama ya Moms, sekitar 1-2 jam.</p>
                    <p>Nah gimana, tidak sulit kan membuat daging bebek jadi tidak amis dan bertekstur empuk? Sekarang nggak perlu ragu lagi untuk mengolah daging bebek ya!  Selamat mencoba! </p>',
                    'attachment' => 'articles/artikel-10/thumbnail.png',
                    'publish_at' => Carbon::parse('February 12th 2019'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Tips Mengolah Ayam Kampung Agar Makin Lezat',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-11/top.png">
                    <p>Jika Moms terbiasa mengolah ayam negeri, tidak ada salahnya kalau sekarang mencoba untuk mengolah daging ayam kampung. Selain mempunyai kandungan yang lebih rendah lemak, daging ayam kampung juga punya cita rasa yang lebih gurih.</p>
                    <p>Namun kebanyakan orang sering merasa kalau daging ayam kampung sangat susah diolah karena teksturnya mudah jadi alot dan keras dibandingkan daging ayam negeri, sehingga butuh waktu yang lama untuk memasaknya. Tapi tenang aja Moms agar ayam kampung buatan Moms lezat dan tidak alot, yuk ikuti tipsnya!</p>
                    <ol>
                    <li>Memilih Ayam Kampung Muda</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-11/cara-1.png">
                    <p>Sebelum memasaknya, pastikan ayam kampung yang akan diolah masih muda karena dagingnya lebih empuk, tidak terlalu alot, tebal, dan memiliki kandungan gizi yang lebih tinggi dibandingkan dengan ayam kampung yang sudah agak tua. Setelah memilih ayam, bersihkan dengan air mengalir yang mengalir sampai bersih ya, Moms. </p>
                    <ol start="2">
                    <li>Rebus dengan air kelapa</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-11/cara-2.png">
                    <p>Setelah membersihkannya, rebus daging ayam kampung dengan takaran satu gelas air putih dan lebih banyak air kelapa muda agar dagingnya cepat empuk dan rasanya lebih gurih. Untuk merebusnya, akan lebih baik jika menggunakan panci presto ya Moms. Nah saat merebus harus benar-benar diperhatikan, jangan sampai ayam kampung menjadi terlalu matang karena bisa membuat dagingnya mudah hancur. Waktu terbaik untuk merebus ayam kampung adalah sekitar 10-15 menit. Begitu selesai, Moms bisa mengolahnya menjadi sop ayam kampung dan ayam pop, atau langsung menjadi topping untuk mie ayam kampung.</p>
                    <ol start="3">
                    <li>Rebus dengan bumbu kuning</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-11/cara-3.png">
                    <p>Cara lain agar daging ayam kampungnya menjadi empuk dan mudah diolah adalah merebus dagingnya dengan bumbu kuning. Proses ini kerap disebut proses mengungkep. Agar ayam kampung jadi lebih lezat dan bumbunya meresap hingga ke dalam, sebelum digoreng siapkan bumbu ungkep yang terbuat dari rempah-rempah kuning terlebih dahulu untuk merendam ayam kampung agar bumbunya meresap. Rendam dan ungkep ayam kampung selama 1-2 jam sebelum diolah ya, Moms. Daging kampung yang sudah diungkep bisa Moms goreng langsung atau diolah lagi menjadi opor, kari, dan masakan ayam lainnya.</p>
                    <p>Gimana Moms tipsnya? Mudah dan praktis kan? Selamat mencoba!</p>',
                    'attachment' => 'articles/artikel-11/thumbnail.png',
                    'publish_at' => Carbon::parse('February 20th 2019'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Kenali beberapa bahan pengembang kue dan kegunaannya',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-12/top.png">
                    <p>Ternyata enggak sedikit para Moms yang masih bingung dan tertukar dengan kegunaan pengembang kue. Sebaiknya Moms mencari tahu dulu nih jenis bahan pengembang dan fungsinya agar tidak salah penggunaan dan membuat kue buatan Moms jadi gagal. Nih untuk yang masih bingung jenis dan perbedaannya, cek ya Moms! </p>
                    <ol>
                    <li>Ragi</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-12/cara-1.png">
                    <p>Terdapat dua jenis ragi yang bisa digunakan, yaitu ragi basah dan kering. Ragi kering berbentuk butiran-butiran kecil agak kasar dan berwarna coklat terang, kalau ragi basah memiliki tekstur halus, padat, dan berbentuk balok atau kubus kecil yang terbungkus aluminium.</p>
                    <p>Ragi sebenarnya bisa untuk membuat masakan lain Moms, seperti Kombucha serta Kefir, tapi kegunaan utamanya tetap untuk membuat roti. Rasio penggunaannya sekitar 2.5% dari takaran tepung, namun jumlah pemakaian ragi basah harus dua kali lipat dari ragi kering agar hasilnya sama persis ya. </p>
                    <ol start="2">
                    <li>Baking powder</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-12/cara-2.png">
                    <p>Baking powder akan bekerja secara maksimal jika digunakan untuk membuat jenis kue kering yang tidak mengandung bahan-bahan bersifat asam seperti perasan air lemon, yoghurt, buttermilk, dan sour cream. Terdapat dua jenis baking powder yaitu single-acting baking powder dan double-acting baking powder. Jika Moms menggunakan single-acting baking powder, adonan yang dibuat harus segera dipanggang atau dikukus setelah dicampurkan dengan bahan lain karena adonan akan cepat bereaksi. Sementara itu, jika Moms menggunakan double-acting baking powder, adonan akan bereaksi dalam dua tahap dan dapat bertahan untuk beberapa saat.</p>
                    <ol start="3">
                    <li>Baking soda</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-12/cara-3.png">
                    <p>Baking soda umumnya digunakan jika Moms ingin membuat kue kering seperti cookies mentega dan chocolate chips, atau cake seperti molten lava dan red velvet cake—pokoknya kue apapun yang dikukus atau dipanggang. Adonan yang memakai baking soda bisa juga dicampur dengan bahan-bahan yang bersifat asam, seperti yoghurt, susu, sour cream, dan perasan air lemon.</p>
                    <ol start="4">
                    <li>Krim tartar </li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-12/cara-4.png">
                    <p>Krim tartar adalah salah satu bahan pengembang sekaligus pelembut kue karena bisa mengeluarkan gas CO2 di dalam adonan agar lebih mengembang. Krim ini juga bisa dicampur ke dalam kocokan putih telur agar adonan yang dihasilkan tidak gampang kempes lho, Moms. Caranya, kocok dulu 5 butir putih telur hingga mengembang, masukkan ½ sdt krim tartar, lalu kocok lagi hingga putih telur menjadi kaku.</p>
                    <p>Kue-kue yang menggunakan bahan krim tartar juga bervariasi. Moms bisa memakainya untuk membuat kue bolu biasa sebagai pengganti baking soda, atau kue-kue lain seperti pound cake, chiffon cake, cheesecake, cake roll, atau cupcake.</p>
                    <p>Jadi sekarang sudah tau kan Moms apa saja bahan pengembang yang cocok untuk kue yang mau dibuat? Selamat mencoba! </p>',
                    'attachment' => 'articles/artikel-12/thumbnail.png',
                    'publish_at' => Carbon::parse('February 20th 2019'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Mau Menggoreng Tofu? Ikuti Cara Ini!',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-5/top.png">
                    <p>Moms pastinya sudah pernah mengolah tofu atau tahu sutra kan? Umumnya, tofu dikemas dalam plastik memanjang dan terdiri dari beberapa bahan dasar, jadi Moms bisa memilih rasanya, seperti rasa udang, ayam, atau telur yang polos. </p>
                    <p>Masalahnya, jenis tahu ini memang punya tekstur yang sangat lembut dan mudah hancur, sehingga terkadang bikin orang bingung gimana cara memasaknya dan ujungnya paling cuma diolah menjadi sapo tahu atau sop. Tapi Moms tidak perlu khawatir, ada beberapa teknik memasaknya yang bisa ditiru supaya hidangan tofunya menjadi bervariasi dan lezat! Yuk simak tipsnya : </p>
                    <ol>
                    <li>Keluarkan tofu dari pembungkusnya</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-5/cara%201.png">
                    <p>Tofu yang dijual dipasaran kebanyakan dibungkus dengan plastik yang menutupi semua bagian tofu. Dengan tekstur tofu yang lembut dan mudah hancur, kemasan seperti ini pasti menyulitkan Moms saat membukanya. Agar tofu tidak hancur saat dikeluarkan, Moms bisa merendam tofu yang masih dibungkus  dengan air hangat terlebih dahulu selama beberapa menit. Setelah itu baru potong tofu di bagian tengahnya, kemudian dorong tofu dari ujung bagian plastik agar tofu tidak hancur. Pastikan jangan memotong tofu dalam keadaan masih terbungkus plastik ya Moms karena cara ini malah membuat tahu hancur.</p>
                    <ol start="2">
                    <li>Goreng tofu sebelum diolah</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-5/cara%202.png">
                    <p>Setelah dipotong-potong, tofu bisa dimasak jadi berbagai macam olahan. Bisa menjadi tumisan, sup atau sapo tahu. Tapi sebelum diolah, supaya tofu tidak mudah hancur saat dimasak, Moms bisa melumuri tofu dengan tepung maizena dan garam lalu digoreng deep-fried setengah matang. Lapisan maizena akan membuat tofu lebih keras dan renyah bagian luarnya, sehingga tidak mudah hancur saat akan diolah menjadi masakan lainnya. Jika Moms tidak punya tepung maizena, Moms bisa gunakan putih telur dan garam yang dikocok untuk bahan pelapisnya ya. Setelah digoreng, tofu siap diolah. Tapi hati-hati ya Moms, kalau minyak yang digunakan kurang panas dan terlalu sedikit, tofu akan lengket di wajan dan sulit untuk dibalik.</p>
                    <p>Mudah kan Moms? Mau apapun jenis tofunya yang paling penting ialah cara mengolahnya agar tidak hancur.  Selamat mencoba Moms! </p>',
                    'attachment' => 'articles/artikel-5/thumbnail.png',
                    'publish_at' => Carbon::parse('December 7th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Menyimpan Cabai Agar Tidak Mudah Busuk',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-6/top.png">
                    <p>Membeli cabai dalam jumlah banyak memang agak riskan. Cabai sangat rentan layu dan membusuk jika disimpan dalam waktu yang cukup lama, tapi kalau beli cabai dalam jumlah kecil pasti cukup merepotkan karena harus beberapa kali beli. Nah, agar Moms tetap bisa membeli cabai dalam jumlah yang banyak, dan cabai yang Moms beli tetap fresh dan tahan selama beberapa minggu, ada cara yang bisa dilakukan dalam penyimpanannya nih. Berikut caranya</p>
                    <ol>
                    <li>Beli cabai yang segar</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-6/cara-1.png">
                    <p>Saat membeli cabai, pastikan cabai yang dibeli dalam keadaan segar. Pilih cabai dengan kualitas yang baik, dan jangan pilih cabai yang sudah akan layu atau kering. Cara agar Moms tahu kalau cabai yang dibeli masih dalam keadaan baik adalah dengan sedikit memencet bagian tengahnya. Jika bagian tengahnya keras berarti cabai tersebut masih fresh dan tidak busuk, tapi jika saat dipencet bagian tengahnya sudah lembek, cabai tersebut bisa dibilang sudah tidak baik kualitasnya.</p>
                    <ol start="2">
                    <li>Jangan cuci cabai yang baru dibeli</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-6/cara-2.png">
                    <p>Setelah membeli cabai, ada baiknya jika tidak langsung dicuci. Apabila cabai yang dibeli dibungkus menggunakan plastik, segera keluarkan cabai tersebut dan letakkan cabai dalam wadah yang terbuka. Jika Moms punya cabai yang kurang fresh, lebih baik digunakan secepatnya ya Moms. Simpan cabai yang masih segar dalam wadah yang kering dan tidak lembap, setelah itu Moms bisa menyimpannya di kulkas. Jika Moms tidak ingin menyimpannya di kulkas, cabai bisa disimpan dalam wadah yang berlubang sehingga tidak akan lembab dan tetap kering. </p>
                    <ol start="3">
                    <li>Taruh bawang putih kupas ke dalam wadah cabai</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-6/cara-3.png">
                    <p>Ketika menyimpan cabai di dalam kulkas, cukup taruh wadah berisi cabai di rak kulkas bagian tengah atau bawah dan jangan menaruhnya di freezer. Supaya cabai lebih awet, Moms bisa melapisi wadah berisi cabai tersebut dengan tisu serta memasukan satu siung bawang putih yang sudah dikupas ke dalam wadah berisi cabai. Bawang putih bisa jadi pengawet untuk cabai secara alami. Untuk memastikan cabai tetap dalam keadaan kering, Moms harus mengganti tisu di dalam wadah minimal seminggu sekali. </p>
                    <p>Nah, dengan cara seperti yang disebutkan diatas, bisa membuat cabai tahan sampai 3 minggu lamanya, Moms. Nggak perlu lagi khawatir untuk membeli dan menyimpan cabai dalam jumlah yang banyak. Selamat mencoba!</p>',
                    'attachment' => 'articles/artikel-6/thumbnail.png',
                    'publish_at' => Carbon::parse('December 15th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Menggoreng Ikan Agar Tidak Menempel di Wajan',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-7/top.png">
                    <p>Pernah mengalami kesulitan saat menggoreng Ikan, seperti minyak yang sangat meletup-letup dan ikan menempel di wajan? Pasti Moms pernah mengalaminya, lalu gimana sih caranya supaya ikan tidak menempel di wajan saat digoreng? Karena jika ikan menempel di wajan bisa membuat daging ikan menjadi hancur dan teksturnya jadi keras. Tapi tenang, semuanya bisa diatasi dengan cara-cara berikut ini. Simak ya, Moms!</p>
                    <ol>
                    <li>Panaskan wajan sebelum menggoreng</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-7/cara-1.png">
                    <p>Sebelum menggoreng ikan, Moms harus memastikan wajan telah panas terlebih dahulu. Jangan menuangkan minyak sebelum wajan benar-benar panas ya Moms. Tuangkan minyak goreng dengan takaran yang banyak supaya ikan bisa mengambang dan nggak menyentuh ke dasar wajan. Kemudian pastikan tunggu sampai minyak panas dan berbuih. Kalau sudah cukup panas, Moms bisa memasukan ikan kedalam penggorengan. Jangan terlalu sering membolak-balik ikan ya, tunggu beberapa menit jika ingin dibalikkan.</p>
                    <ol start="2">
                    <li>Celupkan ikan ke dalam adonan telur</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-7/cara-2.png">
                    <p>Untuk ikan yang mempunyai duri lunak, ada kesulitan tersendiri pada saat menggorengnya karena ikan seperti ini mudah sekali hancur. Apalagi kalau digoreng terlalu lama. Nah untuk menyiasatinya Moms bisa celupkan ikan ke dalam adonan kocokan telur yang berfungsi sebagai pelapis agar tidak hancur pada saat digoreng. kalau tidak ingin menggunakan telur, Moms bisa menggorengnya dengan api yang kecil agar ikan matang merata. </p>
                    <ol start="3">
                    <li>Menggoreng ikan besar dengan benar</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-7/cara-3.png">
                    <p>Besar dan kecilnya ukuran juga bisa menentukan cara terbaik untuk menggorengnya, Moms. Kalau ingin membuat ikan goreng yang garing, tidak mudah hancur serta menarik untuk disajikan, gunakan saja jenis ikan gurame. Selain bisa diolah dalam berbagai menu masakan, ikan gurame juga bisa digoreng garing dengan bentuk ikan terbang. Cara membuatnya sangat mudah lho, Moms. Caranya, belah kedua sisi ikan gurame dari bagian ekor sampai ke kepala, tapi hati-hati jangan sampai putus ya. Lalu lapisi dengan tepung maizena agar ikan gurame lebih renyah dan mengembang sempurna saat digoreng. </p>
                    <ol start="4">
                    <li>Beri perasan lemon/jeruk nipis ke dalam minyak panas</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-7/cara-4.png">
                    <p>Minyak suka meletup-letup saat memasak ikan? Jangan khawatir, Supaya minyak tidak meletup-letup saat menggoreng ikan, Moms bisa menambahkan sedikit perasan lemon/jeruk nipis ke dalam minyak yang sudah panas. Jika tidak ada lemon/jeruk nipis, Moms bisa menambahkan sedikit garam, setelah itu masukan ikan dan tunggu sampai ikan matang berwarna kuning kecoklatan. </p>
                    <p>Jadi sekarang udah tahu kan Moms rahasianya memasak ikan? Nah udah nggak perlu khawatir lagi Moms saat memasak ikan. Pastikan ikan yang Moms olah matang sempurna dengan warna kuning kecoklatan dengan Minyak Goreng Filma yang sudah teruji kualitasnya. Selamat mencoba!</p>',
                    'attachment' => 'articles/artikel-7/thumbnail.png',
                    'publish_at' => Carbon::parse('December 23rd 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Mie Shirataki? Apa sih?',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-8/top.png">
                    <p>Moms, pernah dengar mie Shirataki? Mie jenis ini lagi sering banget jadi perbincangan karena mie ini bisa jadi salah satu makanan pengganti karbohidrat. Masa iya? Dengan kandungan kalori yang rendah membuat mie shirataki berbeda dari mie pada umumnya. mie asal jepang ini memang dibuat untuk mereka yang sedang mengurangi karbohidrat untuk alasan berat badan maupun kesehatan. Tapi tahu nggak sih sebenarnya apa itu mie shirataki? Yuk simak penjelasan berikut.</p>
                    <ol>
                    <li>Terbuat dari umbi-umbian</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-8/cara-1.png">
                    <p>Mie shirataki terbuat dari olahan konjac, yaitu sejenis tanaman umbi-umbian yang kemudian diolah dan dikenal menjadi konyaku. Teksturnya kenyal seperti agar-agar atau jeli dan berwarna putih bening.</p>
                    <ol start="2">
                    <li>Bebas dari gluten dan kaya akan serat</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-8/cara-2.png">
                    <p>Kalau Moms mempunyai alergi dengan gluten, shirataki ini bisa jadi jawabannya! Karena mie shirataki ini bebas dari gluten kok. Mie ini rendah kalori dan karbohidrat, tetapi kaya serat dan cukup mengenyangkan. Makanan ini mengandung 97% air dan 3% serat. Jadi nggak usah takut kalau nggak kenyang karena nggak makan karbohidrat.</p>
                    <ol start="3">
                    <li>Bisa diolah menjadi mie tumis atau mie kuah</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-8/cara-3.png">
                    <p>Sama dengan mie telur ataupun spaghetti, mie shirataki juga bisa diolah menjadi berbagai macam hidangan.  Moms bisa membuat shirataki goreng dengan kecap Cap Orang Jual Sate yang bikin masakan Moms jadi beda manis gurihnya, atau kuah dengan kaldu dan sayuran. Bisa juga sebagai campuran salad dengan seafood atau dibuat seperti ramen. Rasanya yang hambar bikin mie ini bisa banget dikreasikan jadi masakan-masakan yang lezat.</p>
                    <ol start="4">
                    <li>Terbagi jadi mie shirataki basah dan kering</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-8/cara-4.png">
                    <p>Moms pernah melihat ada mie shirataki yang kemasannya basah dan kering? Tenang aja, kedua jenis yang berbeda tersebut tetap sama-sama mie shirataki kok. Tapi perlu diingat khususnya jika Moms membeli mie shirataki basah, sebelum diolah, shirataki harus dicuci bersih dari kemasan dan air rendamannya sebanyak beberapa kali untuk menghilangkan baunya. Untuk cara masaknya, sama seperti saat memasak pasta atau mie telur ya, Moms.</p>
                    <p>Gimana tertarik nggak untuk mencoba mie shirataki ini, Moms? Selamat mencoba! </p>',
                    'attachment' => 'articles/artikel-8/thumbnail.png',
                    'publish_at' => Carbon::parse('December 26th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Membuat Kuah Kaldu yang Lazat dan Bening',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-1/top.png">
                    <p>Membuat kuah kaldu yang lezat dan jernih kedengarannya mudah dan praktis ya Moms. Tapi sebenarnya membuat kuah kaldu yang lezat tidak bisa sembarangan dan tidak semudah yang dibayangkan lho. Jika ingin mendapatkan kuah kaldu dengan hasil yang maksimal, pemilihan bahan dan proses memasaknya harus benar. Supaya kuah kaldu buatan Moms jernih dan rasanya nikmat, yuk coba cara dibawah ini</p>
                    <ol>
                    <li>Memilih bahan yang tepat</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-1/cara-1.png">
                    <p>Cara membuat kuah kaldu ayam yang nikmat tentunya harus menggunakan bagian dari daging ayam yang tepat. Biasanya bagian ayam yang cocok untuk dijadikan bahan pembuatan kaldu yaitu bagian sayap dan ceker. Kalau tidak suka ceker, Moms bisa menggantinya dengan bagian paha atas. Bagian ayam ini mampu membuat kuah kaldu dengan rasa yang lezat dan juga pekat gurihnya. Jangan sampai salah memilih bahan ya, Moms karena daging paha atas ayam dan paha bawah punya rasa dan kandungan yang berbeda. Daging paha ayam bagian atas lebih banyak mengandung kaldu, sedangkan paha ayam bagian bawah lebih banyak mengandung lemak. Akan lebih nikmat lagi, jika moms membuat kuah kaldu menggunakan ayam kampung ya.</p>
                    <ol start="2">
                    <li>Teknik Merebus yang benar</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-1/cara-2.png">
                    <p>Jika ingin mendapatkan air rebusan kaldu yang bening, Moms harus melakukan dua kali proses perebusan. Pertama-tama Rebus air hingga mendidih lalu masukan satu persatu potongan ayam. Memasukan ayam saat air belum benar-benar mendidih akan membuat hasilnya menjadi keruh. Air yang sudah mendidih dapat mematangkan ayam sampai ke bagian tulangnya, sehingga tidak ada darah ayam yang keluar yang bisa membuat air kaldu menjadi keruh. Air rebusan pertama bertujuan untuk membersihkan semua kotoran yang ada pada tulang ayam agar terangkat. Jadi setelah air rebusan ayam yang pertama matang, saring terlebih dahulu kemudian masak kembali air rebusan tersebut dengan menambahkan tambahan bumbu rempah, seperti bawang putih, lada, bawang bombay, daun bawang, seledri dan jahe agar tidak berbau amis. </p>
                    <ol start="3">
                    <li>Cara memasak dan penyimpanan kaldu</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-1/cara-3.png">
                    <p>Point yang paling penting ada pada cara saat memasak air kaldu. Memasak kaldu dengan benar bisa mempengaruhi rasa dan teksturnya menjadi semakin lezat. Masak menggunakan api yang kecil selama 1-2 jam agar sari dagingnya dapat keluar seluruhnya. Rebus dengan panci yang tertutup rapat, sehingga kaldu yang dihasilkan memiliki kekentalan yang pas sesuai harapan. Nah jika kaldu sudah matang, segera saring kaldu dan simpan di dalam wadah yang kedap udara, kalau ingin kaldu bertahan lama, Moms bisa menyimpannya di dalam freezer. </p>
                    <p>Ternyata gampang kan membuat kuah kaldu yang bening dan lezat? Dengan menggunakan cara mudah di atas dijamin kuah kaldu buatan Moms jadi lebih nikmat. Selamat mencoba! </p>',
                    'attachment' => 'articles/artikel-1/thumbnail.png',
                    'publish_at' => Carbon::parse('August 1st 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Agar kulit lumpia tidak sobek ketika dimasak',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-2/top.png">
                    <p>Memasak dengan bahan dasar menggunakan kulit lumpia seringkali tidak semulus dan semudah yang diharapkan ya Moms, karena kebanyakan kulit lumpia yang dijual di pasaran mempunyai tekstur yang sangat tipis sehingga mudah sekali sobek jika tidak hati-hati dalam mengolahnya. Untuk itu, penting banget untuk tahu cara mengolah kulit lumpia yang benar, agar ketika dimasak, kulit lumpia tidak sobek dan membuat isiannya jadi berantakan. Nah ini dia tipsnya!</p>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-2/cara-1.png">
                    <p>Ketika membuat bahan isian lumpia, pastikan tumisan yang Moms buat tidak terlalu basah dan berminyak. Isian yang terlalu basah membuat kulit lumpia jadi lembek, mudah sobek dan tidak renyah. Isian untuk kulit lumpia juga tidak perlu banyak-banyak mengingat kulit lumpia yang tipis dan mudah sobek. Namun jika Moms mau membuat lumpia dengan isian yang melimpah, pastikan untuk menggunakan kulit lumpia sebanyak 2 lembar untuk menggulungnya.  </p>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-2/cara-2.png">
                    <p>Menggulung isian kulit lumpia juga nggak mudah ternyata, Moms. Harus benar-benar memperhatikan cara menggulungnya agar kulit tidak sobek. Caranya ialah dengan memadatkan isian dengan kulit lumpia, kemudian rekatkan menggunakan putih telur. Oleskan putih telur diseluruh sisi lumpia yang akan direkatkan dengan merata. Selain menggunakan putih telur untuk perekat, Moms juga bisa menggunakan air yang dicampur dengan tepung terigu, olesi secukupnya sampai kulit lumpia merekat sempurna. Setelah itu, diamkan dulu selama 10-15 menit sampai semua sisinya benar-benar merekat baru bisa digoreng.  Memasaknya  langsung setelah diolesi, bisa membuat kulit lumpia mudah terlepas dan sobek.<br />
                    Moms juga bisa menyimpannya di dalam kulkas agar lumpia makin kuat dan isi lumpia tidak berantakan saat dimasak.</p>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-2/cara-3.png">
                    <p>Wadah yang digunakan untuk memasak lumpia juga jadi salah satu faktor yang penting juga lho. Sebaiknya Moms menggunakan wajan atau frying pan anti lengket agar lumpia tidak menempel pada dinding wajan yang membuat kulitnya menjadi sobek. Kalau menggunakan wajan yang lengket kulit lumpia akan susah dibalik dan malah menempel di dasar wajan. Selain itu, membalik lumpia harus ekstra hati-hati dan tidak boleh terlalu sering membolak-balik kulit lumpia nih Moms agar lumpia tidak hancur. Tunggu hingga warnanya kuning keemasan dan cukup renyah baru balik sisi sebelahnya.
                    Pastikan juga menggunakan minyak dalam jumlah yang agak banyak dengan api sedang saat menggoreng lumpia. Pastikan lumpia terendam sempurna di dalam minyak. Jangan lupa gunakan Minyak Filma untuk menggoreng supaya warnanya jadi menarik. Setelah lumpia matang, langsung angkat dan tiriskan lumpia menggunakan kertas peniris atau tissue. Lumpia yang bentuknya cantik dan menarik pastinya bisa membuat selera makan jadi bertambah ya Moms. Hidangkan dengan saus sambal agar lumpia buatan Moms makin nikmat. Selamat mencoba!</p>',
                    'attachment' => 'articles/artikel-2/thumbnail.png',
                    'publish_at' => Carbon::parse('August 5th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Menghilangkan noda dan bau tidak sedap di wadah plastik, yuk simak tipsnya',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-3/top.png">
                    <p>Wadah plastik pastinya nggak bisa jauh dari rumah tangga ya, Moms. Selain berfungsi sebagai wadah untuk membawa bekal, wadah plastik juga berguna banget untuk menyimpan bahan masakan ataupun olahan makanan yang sudah matang. Namun masalah utama dengan wadah plastik adalah wadah ini dapat menyerap dan menyimpan bau masakan yang lama walaupun sudah berkali-kali dibersihkan. Apalagi kalau bahan masakannya memang memiliki bau yang tajam, makin susah hilang baunya. Tapi ternyata nggak cuma bau saja. Masalah lainnya dari wadah plastik ialah warnanya yang mudah kusam dan menguning karena sering terkena noda dari masakan.  Tapi Moms nggak perlu khawatir. Mau tau solusinya? coba beberapa cara ini yuk! </p>
                    <ol>
                    <li>Menggunakan Perasan lemon</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-3/cara-1.png">
                    <p>Buah yang satu ini memang punya banyak manfaat untuk membersihkan noda dan bau membandel. Tidak butuh waktu lama nih Moms, hanya 3 menit saja. Cukup siapkan satu buah lemon segar, kemudian belah menjadi dua bagian. Kemudian Moms hanya perlu menggosok lemon ke wadah yang kotor dengan merata sambil diperas agar sari-sari lemonnya keluar. Jika wadahnya terlalu kecil, Moms bisa memerasnya lemonnya terlebih dahulu, kemudian baru dikocok-kocok sampai semua kotorannya terangkat. Kalau Ingin kotoran dan baunya benar-benar hilang, Moms bisa mencampurkan perasan lemon dengan sedikit garam ya. </p>
                    <ol start="2">
                    <li>Menggunakan Garam</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-3/cara-2.png">
                    <p>Garam tidak hanya bermanfaat untuk penyedap masakan lho, tapi bisa juga bermanfaat  untuk menghilangkan bau di wadah plastik. Ambil sejumput garam lalu taburkan ke dalam wadah plastik yang sudah dicuci bersih secara merata. Tidak perlu digosok Moms, cukup diamkan selama 1-2 jam. Setelah didiamkan cuci kembali wadah plastik dengan sabun hingga bersih, dengan begitu bau tidak sedapnya akan cepat hilang deh Moms. </p>
                    <ol start="3">
                    <li>Menggunakan Bubuk kopi</li>
                    </ol>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-3/cara-3.png">
                    <p>Selain mudah ditemukan, bubuk kopi memang terbukti ampuh untuk menghilangkan bau menyengat yang tidak enak, Moms. Moms Bisa menggunakan ampas kopi atau kopi hitam bubuk, lalu taburkan secukupnya ke dalam wadah plastik. Kemudian tutup rapat dan diamkan selama 1-2 jam sampai baunya dirasa sudah mulai hilang. Untuk menghilangkan sisa-sisa bubuk atau ampas kopinya, Moms bisa membilasnya menggunakan air bersih. Cuci bersih dan keringkan sampai benar-benar kering ya moms. Karena jika sudah dibersihkan namun dibiarkan lembab, biasanya akan timbul bau yang tidak sedap lainnya nih, Moms.</p>
                    <p>Nah gimana nih cara di atas? Praktis kan Moms? Bahan-bahan yang digunakan juga mudah di temukan dan prosesnya pun tidak membutuhkan waktu yang lama. Pastikan wadah plastik tetap terjaga kebersihannya dengan selalu mencucinya sehabis digunakan dan jangan biarkan masakan terlalu lama disimpan dalam wadah plastik ya Moms, selamat mencoba! </p>',
                    'attachment' => 'articles/artikel-3/thumbnail.png',
                    'publish_at' => Carbon::parse('August 15th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ],
                [
                    'title' => 'Cara Menyimpan Kemangi Agar Tahan lama',
                    'body' => '<img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-4/top.png">
                    <p>Sudah gak asing lagi kan Moms dengan daun yang satu ini? Daun kemangi ini tidak hanya digunakan sebagai lalapan, tapi juga bisa sebagai campuran bahan masakan agar menjadi lebih wangi. Selayaknya sayuran berdaun lainnya, kemangi juga mudah layu. Apalagi jika terkena udara dan sinar matahari langsung. Untuk tetap menjaga kesegarannya, daun kemangi harus segera diolah setelah dibeli. Namun kalau membelinya dalam jumlah yang banyak, tentu sayang kan Moms jika cepat layu dan akhirnya malah dibuang. </p>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-4/cara-1.png">
                    <p>Sebagai solusinya, Moms bisa tetap menjaga kesegaran daun kemangi dengan menaruhnya di dalam wadah tertutup seperti toples, kemudian berikan sedikit air. Sebelum menaruh kemangi, pisahkan kemangi dari daun-daun yang rontok terlebih dahulu. Kemangi tidak perlu dicuci menggunakan air jika ingin disimpan untuk jangka waktu yang lama, karena harus membiarkan daunnya tetap kering. Ambil toples kaca atau wadah yang agak tinggi, lalu isi dengan air bersih sampai menutupi batangnya, masukan kemangi dan tata di dalam wadah tersebut menyerupai bunga yang ada di dalam vas. Letakan di tempat yang sejuk dan tidak terlalu gelap.</p>
                    <img src="https://andalan-mama.sgp1.digitaloceanspaces.com/articles/artikel-4/cara-2.png">
                    <p>Selain disimpan seperti tanaman yang ada di dalam vas, kalau Moms tidak mau daun kemangi yang sudah hampir layu terbuang sia-sia, bisa juga disiasati dengan cara dibekukan untuk nantinya dicampurkan ke dalam bahan masakan.
                    Caranya pisahkan daun kemangi dengan batangnya, lalu cuci bersih sampai kotorannya terangkat. Masukan daun kemangi ke dalam blender dan berikan sedikit minyak zaitun. Dengan mencampurkan minyak zaitun daun kemangi jadi tidak mudah busuk dan wanginya tetap harum Moms. Tuangkan kemangi yang sudah dihaluskan dalam wadah tertutup, lalu bekukan di dalam freezer. Kemangi yang disimpan dalam freezer bisa tahan sampai berbulan-bulan dan dapat digunakan kapanpun ketika ingin dimasak. Kemangi yang dibekukan paling cocok untuk bahan masakan seperti salad, pasta, ataupun jenis masakan yang dipepes. Jadi gak khawatir lagi kan Moms kalau membeli kemangi dalam jumlah yang banyak, selamat mencoba! </p>',
                    'attachment' => 'articles/artikel-4/thumbnail.png',
                    'publish_at' => Carbon::parse('August 15th 2018'),
                    'status' => 1,
                    'highlight' => 0
                ]
            ];
            foreach ($data as $dt) {
                $dt['body'] = json_encode($dt['body']);
                $admin->blog()->save(factory(\App\Blog::class)->make($dt));
            }
        } else {
            $admin = User::where('type', 'admin')->first();

            $blogs = $admin->blog()->saveMany(factory(\App\Blog::class, 3)->states('highlighted')->make());
        }
    }
}
