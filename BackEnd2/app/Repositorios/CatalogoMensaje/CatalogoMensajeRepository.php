<?php

namespace App\Repositorios\CatalogoMensaje;

use App\Models\CatalogoMensaje;
use App\Models\Usuario;
use App\Traits\ApiResponser;
use Exception;
use Illuminate\Support\Facades\Log;

class CatalogoMensajeRepository
{
    use ApiResponser;

    public function crearMensaje($request)
    {
        try {
            Log::info(["request" => $request->mensaje]);

            return $this->successResponse($this->ingresarDatos($request), "Mensaje creado correctamente", 200);
        } catch (Exception $ex) {
            return $this->errorResponse("No se logro crear mensaje", 409, $ex, __METHOD__);
        }
    }

    public function hola($request){
        try {
            $data = Usuario::select("usua_nombre","depa_id")
            ->with("departamento:id,depa_nombre")
            ->where("id",$request->id)
            ->first();

            if($data) return $this->successResponse($data,"se encontro",200);

            return $this->errorResponse("no se encontro",409);
        } catch (Exception $ex) {
            return $this->errorResponse("",409,$ex,__METHOD__);
        }
    }

    private function ingresarDatos($data, CatalogoMensaje $came = new CatalogoMensaje())
    {
        $came->came_mensaje = $data->mensaje ?? $came->mensaje;
        $came->came_funcion = $data->funcion ?? $came->funcion;

        $came->save();

        return $came;
    }
}
