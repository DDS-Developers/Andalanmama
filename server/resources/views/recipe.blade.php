<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"><![endif]-->
    <title>Recipe detail - Andalan Mama</title>
    <meta property="og:title" content="{{ $recipe->title }} - Andalan Mama">
    <meta property="og:description" content="Riot">
    <meta property="og:url" content=" ">
    <meta property="og:image" content=" ">
    <meta name="description" content="Riot">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui, user-scalable=no">
    <link rel="icon" href="{{ asset('images/general/favicon-16x16.png') }}" sizes="16x16">
    <link rel="icon" href="{{ asset('images/general/favicon-24x24.png') }}" sizes="24x24">
    <link rel="stylesheet" href="{{ asset('css/detail.css') }}">
  </head>
  <body class="recipe">
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
          <div class="recipe__main">
            <div class="recipe__deco"><img class="recipe__deco__left" src="{{ asset('images/recipe/decoLeft.png') }}" alt=""><img class="recipe__deco__right" src="{{ asset('images/recipe/decoRight.png') }}" alt=""></div>
            <div class="recipe__content">
              <div class="container">
                <div class="recipe__detail">
                  <div class="_inner">
                    <div class="_info">
                      <h1>{{ $recipe->name }}</h1>
                      <p>{{ $recipe->description }}</p>
                      <div class="_meta">
                        <div class="_meta--inner">
                          <span class="_meta--item">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="font-size: 16px; margin-right: 6px;">
                              <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
                            </svg>
                            <span class="_meta--value">Oleh {{ $recipe->user->fullname }}</span>
                          </span>
                          <span class="_meta--item">
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="font-size: 16px; margin-right: 6px;">
                              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                              <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                            </svg>
                            <span class="_meta--value">Durasi {{ $recipe->cookduration }}</span>
                          </span>
                        </div>
                      </div>
                      <div class="_action">
                        <button type="button" class="button--primary">Bahan utama</button>
                      </div>
                    </div>
                    <div class="_thumbnail">
                      <div class="_thumbnail--main">
                        <img src="{{ $recipe->image }}" loading="lazy" alt="">
                        <div class="_thumbnail--icon">
                          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="font-size: 160px;">
                            <!-- <path d="M8 5v14l11-7z"></path> -->
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="recipe__ingredient">
                <div class="_inner">
                  <div class="container">
                    <div class="_ingredient--list">
                      <h2 class="_title">Persiapkan Bahan - Bahan</h2>
                      <ul>
                        @foreach ($recipe->ingredient as $ing)
                          @if ($ing->type == 'ingredient')
                            <li class="_value">
                              <span>{{ $ing->ingredient }}</span>
                            </li>
                          @elseif ($ing->type == 'group')
                            <li class="_group">
                              <span>{{ $ing->ingredient }}</span>
                            </li>
                          @endif
                        @endforeach
                      </ul>
                    </div>
                    <div class="_ingredient--action">
                      <button type="button" class="button--primary">Mulai Masak</button>
                    </div>
                  </div>
                </div>
                <div class="_bg"></div>
              </div>
              <div class="recipe__steps">
                <div class="container">
                  <div class="_tutorial--inner">
                    <div class="_slider">
                      @foreach ($recipe->step as $st)
                      <div class="_slide">
                        <div class="_inner">
                          <div class="_info">
                            <p class="_info--title">{{ $st->title }}</p>
                            <div class="_info--text">{{ $st->description }}</div>
                          </div>
                          <div class="_image">
                            <img src="{{ $st->image }}" loading="lazy" alt="">
                          </div>
                        </div>
                      </div>
                      @endforeach
                    </div>
                    <div class="_indicator">
                      <div class="_indicator--info"><span class="_current">1</span> dari <span class="_total">1</span> langkah</div>
                      <div class="_indicator--main">
                        <div class="_bar"></div>
                        <div class="_active" style="width: 0%;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="recipe__others">
                <div class="container">
                  <div class="_title">
                    <h2>Lihat Resep Lainnya</h2>
                  </div>
                  <div class="_list">
                    @foreach ($related as $relate)
                    <div class="_item">
                      <div class="_item--inner">
                        <div class="_item--image">
                          <img src="{{ $relate->image }}" loading="lazy" alt="">
                        </div>
                        <div class="_item--info">
                          <div class="_item--info--inner">
                            <div class="_item--title">
                              <h3><a href="{{ url('/') }}/recipe/detail/{{ $relate->slug }}">{{ $relate->name }}</a></h3>
                            </div>
                            <div class="_item--meta">
                              <span class="_meta">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="font-size: 16px; margin-right: 6px;">
                                  <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
                                </svg>
                                <span class="_meta--value">Oleh {{ $relate->user->fullname }}</span>
                              </span>
                              <span class="_meta">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="font-size: 16px; margin-right: 6px;">
                                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                                </svg>
                                <span class="_meta--value">Durasi {{ $relate->cookduration }}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    @endforeach
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