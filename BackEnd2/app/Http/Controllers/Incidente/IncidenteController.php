<?php

namespace App\Http\Controllers\Incidente;

use App\Http\Controllers\Controller;
use App\Http\Requests\Incidente\CrearIncidenciaRequest;
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

    public function crearIncidencia(CrearIncidenciaRequest $request)
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

    public function areaDepartamentoSelect()
    {
        return $this->inciRepo->areaDepartamentoSelect();
    }

    public function detalleIncidente(Request $request)
    {
        return $this->inciRepo->detalleIncidente($request);
    }

    public function incidenciasHijas(Request $request)
    {
        return $this->inciRepo->incidenciasHijas($request);
    }

    
    
}
