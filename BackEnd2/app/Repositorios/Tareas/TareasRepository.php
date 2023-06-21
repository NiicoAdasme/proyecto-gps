<?php

namespace App\Repositorios\Tareas;


use App\Traits\ApiResponser;
use Exception;
use Illuminate\Support\Facades\Log;
use App\Models\Tarea;

class TareasRepository
{
    use ApiResponser;

    public function createTarea($request)
    {
        try {
            return $this->successResponse($this->ingresarDatos($request), "Tarea creada correctamente");
        } catch (Exception $ex) {
            return $this->errorResponse("No se logro crear mensaje", 409, $ex, __METHOD__);
        }
    }
    public function allTareas($request) {
        try {
            $data = Tarea :: select()->get();
            return $this->successResponse($data, "Tareas listadas correctamente");
        } catch (Exception $ex) {
            return $this->errorResponse("",409,$ex,__METHOD__);
        }
    }

    private function ingresarDatos($data, Tarea $tarea = new Tarea()){

        $tarea->tare_descripcion = $data->tare_descripcion ?? $tarea->tare_descripcion;
        $tarea->tare_fecha_inicio = $data->tare_fecha_inicio ?? $tarea->tare_fecha_inicio;
        $tarea->tare_fecha_fin = $data->tare_fecha_fin ?? $tarea->tare_fecha_fin;
        $tarea->esta_id = $data->esta_id ?? $tarea->esta_id;
        $tarea->arpl_id = $data->arpl_id ?? $tarea->arpl_id;
        $tarea->usua_id = $data->usua_id ?? $tarea->usua_id;
        $tarea->depa_id = $data->depa_id ?? $tarea->depa_id;

        $tarea->save();

        return $tarea;
    }

    
}
