<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarea extends Model
{
    use HasFactory,Filterable;

    protected $table = "tareas";
    protected $primaryKey = "id";
    protected $fillable = ["*"];

    public function estado()
    {
        return $this->belongsTo(Estado::class,"esta_id");
    }

    public function departamento()
    {
        return $this->belongsTo(Departamento::class,"depa_id");
    }

    public function areaPlanta()
    {
        return $this->belongsTo(AreaPlanta::class,"arpl_id");
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class,"usua_id");
    }

    public function tareaReprogramada()
    {
        return $this->hasMany(TareaReprogramada::class,"tare_id");
    }
}
