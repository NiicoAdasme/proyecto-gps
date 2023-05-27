<?php

namespace App\Traits;

use App\Models\CatalogoMensaje;
use Illuminate\Http\Response as ResponseAlias;
use Illuminate\Support\Facades\Log;

trait BuscarMensaje
{
    /**
     * Build a success response
     * @param  int $codigoCatalogo
     * @return Illuminate\Http\JsonResponse
     */
    public function findMessage($codigoCatalogo)
    {
        $mensaje = CatalogoMensaje::select("came_mensaje")->where("came_codigo",$codigoCatalogo)->first()?->came_mensaje;

        return $mensaje ?? "mensaje no encotrado";
    }
}
