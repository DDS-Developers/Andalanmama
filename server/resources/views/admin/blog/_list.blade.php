@foreach($data as $item)
<div class="py-2">
    <div class="row">
        <div class="col-1">
            <img src="{{ $item->image }}" style="max-width: 80px">
        </div>
        <div class="col">
            <p class="mb-0 font-weight-bold">{{ $item->title }}</p>
            <small>
                <a href="{{ env('APP_URL') }}/article/detail/{{ $item->slug }}" target="_blank">
                    {{ env('APP_URL') }}/article/detail/{{ $item->slug }}
                </a>
            </small>
            <br />
            <small class="text-muted mb-0">
                Created At : {{ $item->created_at->timezone('Asia/Jakarta')->format('d F Y H:i:s') }}
                Published At : {{ $item->publish_at->timezone('Asia/Jakarta')->format('d F Y H:i:s') }}
            </small>
        </div>
        <div class="col-3 text-right">
            <a href="{{ route('blog.edit', ['blog' => $item ]) }}" class="btn btn-link">Edit</a>
            <form action="{{ route('blog.destroy', ['blog' => $item ]) }}" method="POST">
                @method('DELETE')
                @csrf
                <button class="btn btn-link text-danger">Delete</button>
            </form>
        </div>
    </div>
</div>
@endforeach
