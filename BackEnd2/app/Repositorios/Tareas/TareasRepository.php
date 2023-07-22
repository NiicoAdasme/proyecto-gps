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
    public function allTareas($request)
    {
        try {
            $tareas = Tarea::select()
                ->with(
                    "usuario:id,usua_nombre,usua_apellido_p",
                    "estado:id,esta_nombre"
                )
                ->when($request?->fechaInicio, function ($q) use ($request) {
                    $q->whereDate('tare_fecha_inicio', $request->fechaInicio);
                })
                ->orderBy("id", "DESC")
                ->paginate($request->perPage);
            $tareas->getCollection()->transform(function ($tarea) {
                $respuesta = [
                    "id" => $tarea->id,
                    "titulo" => $tarea->tare_titulo,
                    "estado" => $tarea->estado->esta_nombre,
                    "usuario" => $tarea->usuario->usua_nombre . " " . $tarea->usuario->usua_apellido_p,
                    "fechaInicio" => $tarea->tare_fecha_inicio
                ];
                return $respuesta;
            });
            return $this->successResponse($tareas, "Tareas listadas correctamente");
        } catch (Exception $ex) {
            return $this->errorResponse("", 409, $ex, __METHOD__);
        }
    }
    public function tareaDetail($request)
    {
        try {
            $tarea = Tarea::with([
                'usuario:id,usua_nombre,usua_apellido_p',
                'areaPlanta:id,arpl_nombre'
            ])->findOrFail($request->id);
            //         $tareas = Tarea :: find($request?->id);
            //         return $this->successResponse($tareas, "Detalle de tarea listado correctamente");
            $respuesta = [
                "id" => $tarea->id,
                "titulo" => $tarea->tare_titulo,
                "estado" => $tarea->estado->esta_nombre,
                "usuario" => $tarea->usuario->usua_nombre . " " . $tarea->usuario->usua_apellido_p,
                "areaPlanta" => $tarea->areaPlanta->arpl_nombre,
                "fechaInicio" => $tarea->tare_fecha_inicio,
                "fechaFin" => $tarea->tare_fecha_fin,
                "descripcion" => $tarea->tare_descripcion
            ];
            return $this->successResponse($respuesta, "Detalle de tarea listado correctamente");
        } catch (Exception $ex) {
            return $this->errorResponse("Se cayó buscando detalles", 409, $ex, __METHOD__);
        }
    }


    private function ingresarDatos($data, Tarea $tarea = new Tarea())
    {

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
