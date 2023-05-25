<?php

namespace App\Repositorios\Incidente;

use App\Models\Incidente;
use App\Traits\ApiResponser;
use App\Traits\BuscarMensaje;
use Exception;
use Illuminate\Support\Facades\Log;

class IncidenteRepository
{
    use ApiResponser,BuscarMensaje;

    public function incidenciaTable($request)
    {
        try {
            $incidente = Incidente::select()
            ->get();
            return $this->successResponse($incidente,"Incidencias listadas correctamente");
        } catch (Exception $ex) {
            return $this->errorResponse("Error al encontr",409,$ex,__METHOD__);
        }
    }
}
