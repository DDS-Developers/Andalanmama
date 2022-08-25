<table class="table table-borderless">
    @foreach($data as $comment)
        <tr>
            <td>
                <p class="mb-0 font-weight-bold">{{ $comment->body }}</p>
                <small class="text-muted">
                    <p class="m-0 p-0">Oleh {{ $comment->user->fullname }}</p>
                </small>
                <small class="text-muted">
                    <p class="m-0 p-0">Pada {{ $comment->created_at }}</p>
                </small>
            </td>
            <td class="text-right">
                <form action="{{ route('comment.destroy', ['comment' => $comment ]) }}" method="POST">
                    @method('DELETE')
                    @csrf
                    <button class="btn btn-link text-danger">Delete</button>
                </form>
            </td>
        </tr>
    @endforeach
</table>
