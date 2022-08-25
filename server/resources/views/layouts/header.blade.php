<style>
/* Show it is fixed to the top */
body {
  padding-top: 4.5rem;
}
</style>

<?php
$links = [
    ['label' => 'Beranda', 'link' => ''],
    ['label' => 'Pengguna', 'link' => 'user'],
    ['label' => 'Push Notification', 'link' => 'inbox'],
    ['label' => 'Banner', 'link' => 'banner'],
    ['label' => 'Artikel', 'link' => 'blog'],
    ['label' => 'Komentar', 'link' => 'comment'],
    [
        'label' => 'Forums', 'link' => 'forum', 'child' => [
            [ 'label' => 'Forum List', 'link' => 'forum' ],
            [ 'label' => 'Forum Replies', 'link' => 'reply' ],
        ]
    ],
    [
        'label' => 'Admin Tools', 'link' => 'recipe/admin', 'child' => [
            [ 'label' => 'Resep Admin', 'link' => 'recipe/admin' ],
            [ 'label' => 'Resep Tag', 'link' => 'tag' ],
            [ 'label' => 'Buku Resep Admin', 'link' => 'book/admin' ],
            [ 'label' => 'Data Admin', 'link' => 'profile/admin/1'],
        ]
    ],
    [
        'label' => 'User Tools', 'link' => 'recipe', 'child' => [
            [ 'label' => 'Resep User', 'link' => 'recipe' ],
            [ 'label' => 'Buku Resep User', 'link' => 'book' ],
            [ 'label' => 'Pending Resep', 'link' => 'recipe/pending' ],
            [ 'label' => 'Pending Buku Resep', 'link' => 'book/pending' ]
        ]
    ]
];
?>

<nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">AM</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                @foreach ($links as $link)
                    <li class="nav-item {{ Request::segment('2') == $link['link'] ? 'active': '' }} @if (isset($link['child'])) dropdown @endif ">
                        @if (isset($link['child']))
                            <a class="nav-link dropdown-toggle" id="dropdown-{{ $link['link'] }}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                {{ $link['label'] }}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdown-{{ $link['link'] }}">
                                @foreach($link['child'] as $child)
                                    <a class="dropdown-item" href="/web-admin/{{ $child['link'] }}">{{ $child['label'] }}</a>
                                @endforeach
                            </div>
                        @else
                            <a class="nav-link" href="/web-admin/{{ $link['link'] ? $link['link'] : '' }}">
                                {{ $link['label'] }}
                            </a>
                        @endif
                    </li>
                @endforeach
            </ul>
            <ul class="navbar-nav flex-row">
                <li class="nav-item">
                    <a class="nav-link" href="/web-admin/logout">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
