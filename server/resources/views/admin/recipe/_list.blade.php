<table class="table table-borderless">
    @foreach($data as $recipe)
        <tr>
            <td width="2%"><img src="{{ $recipe->image }}" style="max-width: 30px"></td>
            <td>
                <p class="mb-0 font-weight-bold">{{ $recipe->name }}</p>
                <small class="text-muted">
                    <a href="{{ env('APP_URL') }}/recipe/detail/{{ $recipe->slug }}" target="_blank">
                        {{ env('APP_URL') }}/recipe/detail/{{ $recipe->slug }}
                    </a>
                    <br />
                    di buat oleh {{ $recipe->user->username }} pada {{ $recipe->created_at->timezone('Asia/Jakarta')->format('d F Y H:i:s') }}
                    <br />
                    Kategori : 
                    @foreach ($recipe->tags as $tag)
                        {{ $tag->name }}, 
                    @endforeach
                </small>
                @if ($recipe->recommend != null)
                    <p class="m-0 p-0"></p>
                @endif
            </td>
            @if ($recipe->recommend != null && $recipe->recommend != 0)
            <td class="text-center">
                <h3 class="d-block">{{ $recipe->recommend }}</h3>
                <small>Recommend order</small>
            </td>
            @endif
            <td class="text-right">
                @if ($recipe->approved == 0 && $recipe->user->type != 'admin')
                    <a href="{{ route('recipe.show', ['recipe' => $recipe ]) }}" class="btn btn-link">Lihat</a>
                @else
                    <a href="{{ route('recipe.edit', ['recipe' => $recipe ]) }}" class="btn btn-link">Edit</a>
                @endif
                <form action="{{ route('recipe.destroy', ['recipe' => $recipe ]) }}" method="POST">
                    @method('DELETE')
                    @csrf
                    <button class="btn btn-link text-danger">Delete</button>
                </form>
            </td>
        </tr>
    @endforeach
</table>
