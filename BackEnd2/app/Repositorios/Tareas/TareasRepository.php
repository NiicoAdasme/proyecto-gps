<?php

namespace App\Repositorios\Tareas;


use App\Traits\ApiResponser;
use Exception;
use Illuminate\Support\Facades\Log;

class TareasRepository
{
    use ApiResponser;

    public function mensaje($request) {
        //Paso 1
        try {
            return $this->successResponse([], "Carga correcta");
        } catch (Exception $ex) {
            return $this->errorResponse("Error al consultar",409, $ex, __METHOD__);
        }
    }
}
