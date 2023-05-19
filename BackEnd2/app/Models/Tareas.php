<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Model;


class Tareas extends Model
{
    protected $table = 'tareas';
    protected $fillable = [
        'tare_descripcion',
        'tare_fecha_inicio',
        'tare_fecha_fin',
        'esta_id',
        'arpl_id',
        'usua_id',
        'depa_id'
    ];
}