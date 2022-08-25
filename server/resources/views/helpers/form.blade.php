@if ($errors->any())
    <div class="alert alert-danger col-8 mx-auto">
        <strong>Something wrong!</strong>
        <ul class="mb-0 pl-3">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

@if (session()->get('error'))
    <div class="alert alert-danger col-8 mx-auto">
        {{ session()->get('error') }}
    </div>
@endif

@if (session()->get('message'))
    <div class="alert alert-info col-8 mx-auto">
        {{ session()->get('message') }}
    </div>
@endif
