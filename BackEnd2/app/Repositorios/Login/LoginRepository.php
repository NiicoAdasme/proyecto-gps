<?php

namespace App\Repositorios\Login;

use App\Models\Usuario;
use App\Traits\ApiResponser;
use App\Traits\BuscarMensaje;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class LoginRepository
{
    use ApiResponser,BuscarMensaje;

    public function login($request)
    {
        try {
            $usuario = Usuario::select(
                "id",
                "usua_pass",
                "usua_rut",
                "usua_nombre",
                "usua_apellido_p",
                "usua_apellido_m",
                "depa_id",
                "tius_id"
            )
            ->with("tipoUsuario:id,tius_tipo","departamento:id,depa_nombre")
            ->where("usua_correo", $request->usua_correo)
            ->where("usua_activo",1)
            ->first();

            if (Hash::check($request->usua_pass, $usuario?->usua_pass)) {
                return $this->successResponse($usuario,$this->findMessage(1), 200);
            }
            return $this->errorResponse($this->findMessage(2), 409);
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }
}
