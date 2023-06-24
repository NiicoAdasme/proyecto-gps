<?php

namespace App\Http\Controllers\Calendario;

use App\Http\Controllers\Controller;
use App\Repositorios\Calendario\CalendarioRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class CalendarioController extends Controller
{
    protected CalendarioRepository $calendarioRepo;

    public function __construct()
    {
        $this->calendarioRepo = new CalendarioRepository();
    }

    public function getCalendario(Request $request)
    {
        return $this->calendarioRepo->getCalendario($request);
    }

    public function getCalendarioByid(Request $request)
    {
        return $this->calendarioRepo->getCalendarioByid($request);
    }

    public function postDatos(Request $request)
    {
        return $this->calendarioRepo->postDatos($request);
    }

    public function editDatos(Request $request)
    {
        return $this->calendarioRepo->editDatos($request);
    }

    public function deleteDatos(Request $request)
    {
        return $this->calendarioRepo->deleteDatos($request);
    }

    public function reagendamiento(Request $request)
    {
        return $this->calendarioRepo->reagendamiento($request);
    }
}
