<?php

namespace App\Http\Controllers\Incidente;

use App\Http\Controllers\Controller;
use App\Repositorios\Incidente\IncidenteRepository;
use Illuminate\Http\Request;

class IncidenteController extends Controller
{
    protected IncidenteRepository $inciRepo;

    public function __construct()
    {
        $this->inciRepo = new IncidenteRepository();
    }

    public function incidenciaTable(Request $request)
    {
        return $this->inciRepo->incidenciaTable($request);
    }

    public function crearIncidencia(Request $request)
    {
        return $this->inciRepo->crearIncidencia($request);
    }

    public function turnoSelect()
    {
        return $this->inciRepo->turnoSelect();
    }

    public function departamentoSelect()
    {
        return $this->inciRepo->departamentoSelect();
    }
}
