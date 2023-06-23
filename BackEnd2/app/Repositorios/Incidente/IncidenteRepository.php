<?php

namespace App\Repositorios\Incidente;

use App\Models\Departamento;
use App\Models\Incidente;
use App\Models\Turno;
use App\Traits\ApiResponser;
use App\Traits\BuscarMensaje;
use Exception;
use Illuminate\Support\Facades\Log;

class IncidenteRepository
{
    use ApiResponser, BuscarMensaje;

    public function incidenciaTable($request)
    {
        try {
            $incidentes = Incidente::select()
                ->with(
                    "areaPlanta:id,arpl_nombre",
                    "turno:id,turn_nombre",
                    "usuario:id,usua_nombre,usua_apellido_p",
                    "departamento:id,depa_nombre",
                    "estado:id,esta_nombre"
                )
                ->orderBy("id", "DESC")
                ->paginate($request->perPage);

            $incidentes->getCollection()->transform(function ($incidente) {
                $respuesta = [
                    "id" => $incidente->id,
                    "observacion" => $incidente->inci_observacion,
                    "estado" => $incidente->estado->esta_nombre,
                    "areaPlanta" => $incidente->areaPlanta->arpl_nombre,
                    "turno" => $incidente->turno->turn_nombre,
                    "usuario" => $incidente->usuario->usua_nombre . " " . $incidente->usuario->usua_apellido_p,
                    "departamento" => $incidente->departamento->depa_nombre
                ];

                return $respuesta;
            });
            return $this->successResponse($incidentes, "Incidencias listadas correctamente");
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }

    public function crearIncidencia($request)
    {
        try {
            $incidente = new Incidente();

            $incidente->inci_observacion = $request->inci_observacion;
            $incidente->esta_id = $request->esta_id;
            $incidente->turn_id = $request->turn_id;
            $incidente->arpl_id = $request->arpl_id;
            $incidente->usua_id = $request->usua_id;
            $incidente->depa_id = $request->depa_id;
            $incidente->incidencia_padre_id = $request->incidencia_padre_id ?? null;

            $incidente->save();

            return $this->successResponse($incidente, $this->findMessage(3));
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }

    public function turnoSelect()
    {
        try {
            return Turno::select("turn_codigo as value", "turn_nombre as label")->get();
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }

    public function departamentoSelect()
    {
        try {
            return Departamento::select("id as value", "depa_nombre as label")->get();
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }
}
