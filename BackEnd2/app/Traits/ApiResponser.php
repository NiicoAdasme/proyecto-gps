<?php

namespace App\Traits;

use Illuminate\Http\Response as ResponseAlias;
use Illuminate\Support\Facades\Log;

trait ApiResponser
{
    /**
     * Build a success response
     * @param  string|array $data
     * @param  int $code
     * @return Illuminate\Http\JsonResponse
     */
    public function successResponse($data, $mensaje = "",$code = ResponseAlias::HTTP_OK)
    {
        return response()->json(['success' => [
            'success' => true,
            'respuesta' => $data,
            'mensaje' => $mensaje
        ], 'codigo' => $code], $code);
    }
    /**
     * Build error responses
     * @param  string $message
     * @param  int $code
     * @return Illuminate\Http\JsonResponse
     */
    public function errorResponse($message, $code, $excepcion = NULL, $metodo = null)
    {

        //Con este if cuando reciba por parametro alguna excepcion creara un Log, este no sera mostrado al front.
        if ($excepcion != null) {
            Log::error([
                'mensaje' => $excepcion->getMessage(),
                'linea' => $excepcion->getLine(),
                'archivo' => $excepcion->getFile(),
                'metodo' => $metodo
                //Para enviar el metodo por parametro es __METHOD__ en los parametros de la funcion
            ]);
        }


        return response()->json(['error' => [
            'success' => false,
            'respuesta' => 'Error',
            'mensaje' => $message
        ], 'codigo' => $code], $code);
    }
}
