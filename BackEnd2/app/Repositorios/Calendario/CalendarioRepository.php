<?php

namespace App\Repositorios\Calendario;

use App\Models\Usuario;
use App\Traits\ApiResponser;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class CalendarioRepository
{
    use ApiResponser;

    public function Calendario($request)
    {   
        try {
            $usuario = Usuario::select("id","usua_pass")->where("usua_correo",$request->usua_correo)->first();
            if (Hash::check($request->usua_pass,$usuario?->usua_pass)) {
                return $this->successResponse([],"",200);
            }
            return $this->errorResponse("Datos ingresados son inválidos",409);
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos",409,$ex,__METHOD__);
        }
    }
}
