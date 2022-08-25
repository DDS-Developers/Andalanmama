<table class="table table-borderless">
    @foreach($data as $item)
        <tr>
            <td width="2%"><img src="{{ $item->image }}" style="max-width: 30px"></td>
            <td>
                <p class="mb-0 font-weight-bold">{{ $item->title }}</p>
                <small class="text-muted">
                    <a href="{{ $item->url }}" target="_blank">
                        {{ $item->url }}
                    </a>
                </small>
                <br />
                <small>
                    @if ($item->status == 0)
                        Inactive
                    @else
                        Active
                    @endif
                </small>
                <br />
                <small style="color: #007bff; font-style: italic;">
                    @if ($item->app == 1)
                        App
                    @else
                        Web
                    @endif
                </small>
            </td>
            <td class="text-right">
                <a href="{{ route('banner.edit', ['banner' => $item ]) }}" class="btn btn-link">Edit</a>
                <form action="{{ route('banner.destroy', ['banner' => $item ]) }}" method="POST">
                    @method('DELETE')
                    @csrf
                    <button class="btn btn-link text-danger">Delete</button>
                </form>
            </td>
        </tr>
    @endforeach
</table>
