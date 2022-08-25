<table class="table table-borderless">
    @foreach($data as $forum)
        <tr>
            <td width="2%"><img src="{{ $forum->image }}" style="max-width: 30px"></td>
            <td>
                <p class="mb-0 font-weight-bold">{{ $forum->title }}</p>
                <small class="text-muted">
                    <a href="{{ env('APP_URL') }}/forum/{{ $forum->slug }}" target="_blank">
                        {{ env('APP_URL') }}/forum/detail/{{ $forum->slug }}
                    </a>
                    <br />
                    di buat oleh {{ $forum->user->username }} pada {{ $forum->created_at->timezone('Asia/Jakarta')->format('d F Y H:i:s') }}
                    <br />
                </small>
            </td>
            <td class="text-right">
                <a href="{{ route('forum.edit', ['forum' => $forum ]) }}" class="btn btn-link">Edit</a>
                <form action="{{ route('forum.destroy', ['forum' => $forum ]) }}" method="POST">
                    @method('DELETE')
                    @csrf
                    <button class="btn btn-link text-danger">Delete</button>
                </form>
            </td>
        </tr>
    @endforeach
</table>
