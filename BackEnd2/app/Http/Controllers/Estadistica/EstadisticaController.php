<?php

namespace App\Http\Controllers\Estadistica;

use App\Http\Controllers\Controller;
use App\Repositorios\Estadistica\EstadisticaRepository;
use Illuminate\Http\Request;

class EstadisticaController extends Controller
{
    protected EstadisticaRepository $inciRepo;

    public function __construct()
    {
        $this->inciRepo = new EstadisticaRepository();
    }

    public function incidenciasSemanal()
    {
        return $this->inciRepo->incidenciasSemanal();
    }
    
    public function incidenciasMensual()
    {
        return $this->inciRepo->incidenciasMensual();
    }
    
}
