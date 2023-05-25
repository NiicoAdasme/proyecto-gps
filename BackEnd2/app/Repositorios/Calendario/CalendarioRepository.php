<?php

namespace App\Repositorios\Calendario;

use App\Models\Tarea;
use App\Traits\ApiResponser;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class CalendarioRepository
{
    use ApiResponser;

    public function getCalendario($request)
    {
        try {
            $tarea = Tarea::all();

            if($tarea) return $this->successResponse($tarea,"se encontro",200);
            
            return $this->errorResponse("Datos ingresados son inválidos",409);
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos",409,$ex,__METHOD__);
        }
    }

    public function getCalendarioByid($request)
    {
        $tarea = Tarea::select("id","tare_descripcion", "titulo", "tare_fecha_inicio", "tare_fecha_fin", "color", "esta_id", "arpl_id", "usua_id", "depa_id")->where("id",$request->id)->first();

        if($tarea) return $this->successResponse($tarea,"se encontro",200);

        return $this->errorResponse("Datos ingresados son inválidos",409);
    }

    public function postDatos($request)
    {
        try{
            return $this->successResponse($this->ingresarDatos($request),"se ingreso correctamente",200);
        }catch(Exception $ex){
            return $this->errorResponse("Error al procesar los datos",409,$ex,__METHOD__);
        }  
    }

    public function editDatos($request)
    {
        try{
            $tarea = Tarea::find($request->id);
            return $this->successResponse($this->ingresarDatos($request,$tarea),"se edito correctamente",200);
        }catch(Exception $ex){
            return $this->errorResponse("Error al procesar los datos",409,$ex,__METHOD__);
        }
    }

    public function deleteDatos($request)
    {
        try{
            $tarea = Tarea::find($request->id);
            $tarea->delete();
            return $this->successResponse($tarea,"se borro correctamente",200);
        }catch(Exception $ex){
            return $this->errorResponse("Error al procesar los datos",409,$ex,__METHOD__);
        }
    }

    public function reagendamiento($request)
    {
        try{
            $tarea = Tarea::select("id", "tare_titulo", "tare_descripcion", "tare_fecha_inicio", "tare_fecha_fin", "tare_color", "depa_id", "arpl_id", "esta_id", "usua_id")
            ->with("tareaReprogramada:id,tare_id", "departamento:id,depa_nombre", "areaPlanta:id,arpl_nombre", "estado:id,esta_nombre", "usuario:id,usua_nombre")
            ->get();
            return $this->successResponse($tarea,"se ingreso correctamente",200);
        }catch(Exception $ex){
            return $this->errorResponse("Error al procesar los datos",409,$ex,__METHOD__);
        }
    }

    private function ingresarDatos($data, Tarea $tarea = new Tarea())
    {
        $tarea->titulo = $data->titulo ?? $tarea->titulo;
        $tarea->tare_descripcion = $data->tare_descripcion ?? $tarea->tare_descripcion;
        $tarea->tare_fecha_inicio = $data->tare_fecha_inicio ?? $tarea->tare_fecha_inicio;
        $tarea->tare_fecha_fin = $data->tare_fecha_fin ?? $tarea->tare_fecha_fin;
        $tarea->arpl_id = $data->arpl_id ?? $tarea->arpl_id;
        $tarea->usua_id = $data->usua_id ?? $tarea->usua_id;
        $tarea->depa_id = $data->depa_id ?? $tarea->depa_id;
        $tarea->save();

        return $tarea;
    }
}
