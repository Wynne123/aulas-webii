@extends('templates.main')

@section('content')

    <label class="mt-3">Nome</label>
    <input type="text" name="name" class="form-control" value="{{$eixo->name}}" disabled/>
    <label class="mt-3">Descrição</label>
    <textarea name="description" rows="5" class="form-control mt-1" disabled>
        {{$eixo->description}}
    </textarea>

    <ul class="list-group">
        <li class="list-group-item active" aria-current="true">CURSOS DE {{$eixo->name}} </li>
        @foreach($eixo->curso as $item) 
        <li class="list-group-item"> {{$item->nome}} </li>
        @endforeach
       
      </ul>

    <a href="{{route('eixo.index')}}" class="btn btn-secondary mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5"/>
          </svg>
    </a>

@endsection