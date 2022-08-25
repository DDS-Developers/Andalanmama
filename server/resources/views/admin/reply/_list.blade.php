<table class="table table-borderless">
    @foreach($data as $reply)
        <tr>
            <td>
                <p class="mb-0 font-weight-bold">{{ $reply->body }}</p>
                <small class="text-muted">
                    <p class="m-0 p-0">Di forum {{ $reply->forum->title }}</p>
                </small>
                <small class="text-muted">
                    <p class="m-0 p-0">Oleh {{ $reply->user->fullname }}</p>
                </small>
                <small class="text-muted">
                    <p class="m-0 p-0">Pada {{ $reply->created_at }}</p>
                </small>
            </td>
            <td class="text-right">
                <form action="{{ route('reply.destroy', ['reply' => $reply ]) }}" method="POST">
                    @method('DELETE')
                    @csrf
                    <button class="btn btn-link text-danger">Delete</button>
                </form>
            </td>
        </tr>
    @endforeach
</table>