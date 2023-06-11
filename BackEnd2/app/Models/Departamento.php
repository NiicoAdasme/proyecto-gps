<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Departamento extends Model
{
    use HasFactory,Filterable;

    protected $table = "departamento";
    protected $primaryKey = "id";
    protected $fillable = ["*"];

    public function usuario()
    {
        return $this->hasMany(Usuario::class,"depa_id");
    }

    public function incidente()
    {
        return $this->hasMany(Incidente::class,"depa_id");
    }

    public function tarea()
    {
        return $this->hasMany(Tarea::class,"depa_id");
    }

    public function solucionIncidencia()
    {
        return $this->hasMany(SolucionIncidencia::class,"depa_id");
    }
}
