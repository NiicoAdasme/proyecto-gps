<?php

namespace App\Repositorios\Incidente;

use App\Models\AreaPlanta;
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

    // ... Modificacion del codigo crear incidencia para que pueda crear subticket

public function crearIncidencia($request)
{
    try {
        $incidente = new Incidente();

        $incidente->inci_observacion = $request->inci_observacion;
        $incidente->esta_id = $request?->esta_id ?? 1;
        $incidente->turn_id = $request->turn_id;
        $incidente->arpl_id = $request->arpl_id;
        $incidente->usua_id = $request?->usua_id ?? 1;
        $incidente->depa_id = $request->depa_id;
        
        // Verificar si se proporcionó el id del ticket padre
        if ($request->has('incidencia_padre_id')) {
            $incidente->incidencia_padre_id = $request->incidencia_padre_id;
        }
        
        $incidente->save();

        return $this->successResponse($incidente, $this->findMessage(3));
    } catch (Exception $ex) {
        return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
    }
}




    public function turnoSelect()
    {
        try {
            $turnos = Turno::select("turn_codigo as id", "turn_nombre as label")->get();
            return $this->successResponse($turnos, $this->findMessage(3));
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }

    public function departamentoSelect()
    {
        try {
            $departamentos = Departamento::select("id as id", "depa_nombre as label")->get();
            return $this->successResponse($departamentos, "");
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }

    public function areaDepartamentoSelect()
    {
        try {
            $areaPlanta = AreaPlanta::select("id as id", "arpl_nombre as label")->get();
            return $this->successResponse($areaPlanta, "");
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }

    public function detalleIncidente($request)
    {
        try {
            $detalle = Incidente::where("id", $request->id)
                ->with(
                    "turno:id,turn_codigo,turn_nombre",
                    "areaPlanta:id,arpl_nombre",
                    "departamento:id,depa_nombre",
                    "estado:id,esta_nombre",
                    "usuario:id,usua_nombre,usua_apellido_p,usua_apellido_m,usua_rut,usua_correo"
                )
                ->first();
            return $this->successResponse($detalle, "");
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }

    public function IncidenciasHijas( $request)
{
    try {
        // Obtener el ID del ticket padre desde el cuerpo de la solicitud JSON.
        $ticketPadreId = $request->input('ticket_padre_id');

        // Realiza cualquier consulta o lógica para obtener las incidencias hijas del ticket padre.
        // Por ejemplo:
        $incidenciasHijas = Incidente::where('incidencia_padre_id', $ticketPadreId)
            ->with(
                "areaPlanta:id,arpl_nombre",
                "turno:id,turn_nombre",
                "usuario:id,usua_nombre,usua_apellido_p",
                "departamento:id,depa_nombre",
                "estado:id,esta_nombre"
            )
            ->orderBy("id", "DESC")
            ->get();

        // Realiza cualquier otra transformación o lógica necesaria antes de devolver los datos.
        // Por ejemplo:
        $respuesta = $incidenciasHijas->map(function ($incidente) {
            return [
                "id" => $incidente->id,
                "observacion" => $incidente->inci_observacion,
                "estado" => $incidente->estado->esta_nombre,
                "areaPlanta" => $incidente->areaPlanta->arpl_nombre,
                "turno" => $incidente->turno->turn_nombre,
                "usuario" => $incidente->usuario->usua_nombre . " " . $incidente->usuario->usua_apellido_p,
                "departamento" => $incidente->departamento->depa_nombre
            ];
        });

        return $respuesta;
    } catch (Exception $ex) {
        return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
    }
}

}



