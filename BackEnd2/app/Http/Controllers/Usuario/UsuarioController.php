<?php

namespace App\Http\Controllers\Usuario;

use App\Http\Controllers\Controller;
use App\Repositorios\Usuario\UsuarioRepository;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    protected UsuarioRepository $usuaRepo;

    public function __construct()
    {
        $this->usuaRepo = new UsuarioRepository();
    }

    public function datosUsuarios(Request $request)
    {
        return $this->usuaRepo->datosUsuarios($request);
    }
}
