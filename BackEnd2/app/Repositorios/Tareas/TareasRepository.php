<?php

namespace App\Repositorios\Tareas;


use App\Traits\ApiResponser;
use Exception;
use Illuminate\Support\Facades\Log;
use App\Models\Tareas;

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
            $data = Tareas :: select()->get();
            return $this->successResponse($data, "Tareas listadas correctamente");
        } catch (Exception $ex) {
            return $this->errorResponse("",409,$ex,__METHOD__);
        }
    }

    private function ingresarDatos($data, Tareas $tarea = new Tareas()){

        $tarea->tare_titulo = $data->tare_titulo ?? $tarea->tare_titulo;
        $tarea->tare_descripcion = $data->tare_descripcion ?? $tarea->tare_descripcion;
        $tarea->tare_fecha_inicio = $data->tare_fecha_inicio ?? $tarea->tare_fecha_inicio;
        $tarea->tare_fecha_fin = $data->tare_fecha_fin ?? $tarea->tare_fecha_fin;
        $tarea->tare_color = $data->tare_color ?? $tarea->tare_color;
        $tarea->usua_id = $data->usua_id ?? $tarea->usua_id;
        $tarea->esta_id = $data->esta_id ?? $tarea->esta_id;
        $tarea->arpl_id = $data->arpl_id ?? $tarea->arpl_id;
        $tarea->depa_id = $data->depa_id ?? $tarea->depa_id;
        $tarea->save();

        return $tarea;
    }

    
}
