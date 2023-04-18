<?php

namespace App\Http\Requests\CatalogoMensaje;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CrearMensajeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules()
    {
        return [
            'mensaje' => 'required|string',
            'funcion' => 'required|string',
        ];
    }


    public function messages()
    {
        return [
            'required' => 'El campo :attribute es requerido',
            'string' => 'el campo :attribute debe ser string'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json(['error' => [
                'codigoRespuesta' => 1,
                'descripcionRespuesta' => 'No se pueden procesar los campos',
                'detalleRespuesta' => $validator->errors()->first()
            ], 'code' => 422], 422)
        );
    }
}
