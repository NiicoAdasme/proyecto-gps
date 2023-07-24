<?php

namespace App\Http\Requests\Incidente;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CrearIncidenciaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules()
    {
        return [
            'inci_observacion' => 'required|string',
            'esta_id' => 'nullable|integer',
            'turn_id' => 'required|integer',
            'arpl_id' => 'required|integer',
            'usua_id' => 'nullable|integer',
            'depa_id' => 'required|integer'
        ];
    }


    public function messages()
    {
        return [
            'required' => 'El campo :attribute es requerido',
            'string' => 'el campo :attribute debe ser string',
            'integer' => 'el campo :attribute debe ser un número'
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
