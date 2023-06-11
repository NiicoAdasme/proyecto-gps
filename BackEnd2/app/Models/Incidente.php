<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Incidente extends Model
{
    use HasFactory,Filterable;

    protected $table = "incidente";
    protected $primaryKey = "id";
    protected $fillable = ["*"];

    public function areaPlanta()
    {
        return $this->belongsTo(AreaPlanta::class,"arpl_id");
    }

    public function turno()
    {   
        return $this->belongsTo(Turno::class,"turn_id");
    }

    public function estado()
    {
        return $this->belongsTo(Estado::class,"esta_id");
    }

    public function departamento()
    {
        return $this->belongsTo(Departamento::class,"depa_id");
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class,"usua_id");
    }

    public function incidenciaPadre()
    {
        return $this->belongsTo(Incidente::class,"incidencia_padre_id");
    }

    public function solucionIncidencia()
    {
        return $this->hasMany(SolucionIncidencia::class,"inci_id");
    }
}
