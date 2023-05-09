<?php

namespace App\Repositorios\Usuario;

use App\Models\Usuario;
use App\Traits\ApiResponser;
use Exception;
use Illuminate\Support\Facades\Log;

class UsuarioRepository
{
    use ApiResponser;

    public function datosUsuarios()
    {
        try {
            $data = Usuario::select()->get();

            return $this->successResponse($data,"Datos listados correctamente",200);
        } catch (Exception $ex) {
            return $this->errorResponse("",409,$ex,__METHOD__);
        }
    }

    private function ingresarDatos($data, Usuario $usuario = new Usuario())
    {
        $usuario->usua_nombre = $data->usua_nombre ?? $usuario->usua_nombre;
        $usuario->usua_apellido_p = $data->usua_apellido_p ?? $usuario->usua_apellido_p;
        $usuario->usua_apellido_m = $data->usua_apellido_m ?? $usuario->usua_apellido_m;
        $usuario->usua_rut = $data->usua_rut ?? $usuario->usua_rut;
        $usuario->usua_correo = $data->usua_correo ?? $usuario->usua_correo;
        $usuario->usua_activo = $data->usua_activo ?? $usuario->usua_activo;
        $usuario->depa_id = $data->depa_id ?? $usuario->depa_id;
        $usuario->tius_id = $data->tius_id ?? $usuario->tius_id;

        $usuario->save();

        return $usuario;
    }
}
