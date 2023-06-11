<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    use HasFactory,Filterable;

    protected $table = "estado";
    protected $primaryKey = "id";
    protected $fillable = ["*"];

    public function incidente()
    {
        return $this->hasMany(Incidente::class,"esta_id");
    }

    public function tarea()
    {
        return $this->hasMany(Tarea::class,"esta_id");
    }

    public function solucionIncidencia()
    {
        return $this->hasMany(solucionIncidencia::class,"esta_id");
    }
}
