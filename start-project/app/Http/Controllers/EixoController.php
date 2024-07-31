<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Eixo;

class EixoController extends Controller
{

    public function index(){
        
        $data = Eixo::all();
        return view('eixo.index', compact(['data']));

    }
    public function create(){
        return view('eixo.create');
    }

    public function store(Request $request){
    return $request;
    }
}