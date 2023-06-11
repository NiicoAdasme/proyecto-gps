<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SolucionIncidencia extends Model
{
    use HasFactory,Filterable;

    protected $table = "solucion_incidencia";
    protected $primaryKey = "id";
    protected $fillable = ["*"];

    public function incidente()
    {
        return $this->belongsTo(Incidente::class,"inci_id");
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
}
