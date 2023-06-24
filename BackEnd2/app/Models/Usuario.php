<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory,Filterable;

    protected $table = "usuario";
    protected $primaryKey = "id";
    protected $fillable = ["*"];

    public function departamento()
    {
        return $this->belongsTo(Departamento::class,"depa_id");
    }

    public function tipoUsuario()
    {
        return $this->belongsTo(TipoUsuario::class,"tius_id");
    }

    public function solucionIncidencia()
    {
        return $this->hasMany(SolucionIncidencia::class,"usua_id");
    }

    public function sugerencia()
    {
        return $this->hasMany(Sugerencia::class,"usua_id");
    }

    public function incidente()
    {
        return $this->hasMany(Incidente::class,"usua_id");
    }

    public function tarea()
    {
        return $this->hasMany(Tarea::class,"usua_id");
    }
}
