<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"><![endif]-->
    <title>Article detail - Andalan Mama</title>
    <meta property="og:title" content="{{ $blog->title }} - Andalan Mama">
    <meta property="og:description" content="">
    <meta property="og:url" content=" ">
    <meta property="og:image" content=" ">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui, user-scalable=no">
    <link rel="icon" href="{{ asset('images/general/favicon-16x16.png') }}" sizes="16x16">
    <link rel="icon" href="{{ asset('images/general/favicon-24x24.png') }}" sizes="24x24">
    <link rel="stylesheet" href="{{ asset('css/detail.css') }}">
  </head>
  <body class="article">
    <div class="site">
      <div class="site--inner">
        <div class="header">
          <div class="header--inner">
            <ul>
              <li><a href="https://andalanmama.com"><span>BERANDA</span></a></li>
              <li><a class="_active" href="https://andalanmama.com/recipe"><span>RESEP</span></a></li>
              <li><a href="https://andalanmama.com/article"><span>TIPS & ARTIKEL</span></a></li>
            </ul>
          </div>
        </div>
        <main class="main">
            <div class="article__main">
                <div class="article__deco"><img class="article__deco__left" src="{{ asset('images/article/decoLeft.png') }}" alt=""><img class="article__deco__right" src="{{ asset('images/article/decoRight.png') }}" alt=""></div>
                <div class="article__logo"><img src="{{ asset('images/logo.png') }}" alt=""></div>
                <div class="article__content">
                    <div class="_inner">
                        <div class="_featured--image">
                            <img loading="lazy" src="{{ $blog->image }}" alt="">
                        </div>
                        <h1 class="_top--title">{{ $blog->title }}</h1>
                        <hr>
                        <div class="_article--detail">
                            <p class="ql-align-justify">{!! json_decode($blog->body) !!}</p>
                        </div>
                    </div>
                </div>
                <div class="article__others">
                    <div class="container">
                        <div class="_inner">
                            <h2 class="_title">Lihat Artikel Lainnya</h2>
                            <div class="_items">
                                @if ($related)
                                    @foreach ($related as $relate)
                                        <div class="_item">
                                            <div class="_item--thumb">
                                                <img src="{{ $relate->image }}" loading="lazy" alt="">
                                            </div>
                                            <div class="_item--info">
                                                <div class="_item--info--inner">
                                                    <div class="_item--title">
                                                        <h3><a href="{{ url('/') }}/article/detail/{{ $relate->slug }}">{{ substr($relate->title, 0, 30) }}...</a></h3>
                                                    </div>
                                                    <div class="_item--meta">
                                                        <span class="_meta">
                                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="font-size: 16px; margin-right: 6px;">
                                                                <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
                                                            </svg>
                                                            <span class="_meta--value">Oleh {{ $relate->user->fullname }}</span>
                                                        </span>
                                                        <!-- <span class="_meta">
                                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="font-size: 16px; margin-right: 6px;">
                                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                                                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                                                            </svg>
                                                            <span class="_meta--value"></span>
                                                        </span> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="footer">
          <div class="footer--left">
            <div class="_inner"><img src="{{ asset('images/footer--products.png') }}" alt=""></div>
          </div>
          <div class="footer--center">
            <div class="_inner">
              <div class="_content">
                <p><a href="https://andalanmama.com/privacy"><span>Kebijakan Privasi</span></a></p>
                <p><a href="https://andalanmama.com/terms"><span>Syarat & Ketentuan</span></a></p>
                <p><a href="https://www.facebook.com/andalanmama.id/" target="_blank"><img src="{{ asset('images/images/facebook.svg') }}" alt=""></a><a href="https://www.instagram.com/andalanmama.id/" target="_blank"><img src="{{ asset('images/images/instagram.svg') }}" alt=""></a><a href="https://www.youtube.com/andalanmamabyfilma" target="_blank"><img src="{{ asset('images/images/youtube.svg') }}" alt=""></a></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <script type="text/javascript" src="{{ asset('js/scripts.js') }}"></script>
    </div>
  </body>
</html>