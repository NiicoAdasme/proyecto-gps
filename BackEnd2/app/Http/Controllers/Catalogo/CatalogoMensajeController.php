<?php

namespace App\Http\Controllers\Catalogo;

use App\Http\Controllers\Controller;
use App\Http\Requests\CatalogoMensaje\CrearMensajeRequest;
use App\Repositorios\CatalogoMensaje\CatalogoMensajeRepository;
use Illuminate\Http\Request;

class CatalogoMensajeController extends Controller
{
    protected CatalogoMensajeRepository $cameRepo;

    public function __construct()
    {
        $this->cameRepo = new CatalogoMensajeRepository();
    }

    public function crearMensaje(CrearMensajeRequest $request)
    {
        return $this->cameRepo->crearMensaje($request);
    }

    public function hola(Request $request)
    {
        return $this->cameRepo->hola($request);
    }
}
