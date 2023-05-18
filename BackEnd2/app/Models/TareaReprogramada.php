<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TareaReprogramada extends Model
{
    use HasFactory,Filterable;

    protected $table = "tareas_reprogramadas";
    protected $primaryKey = "id";
    protected $fillable = ["*"];

    public function tarea()
    {   
        return $this->belongsTo(Tarea::class,"tare_id");
    }
}
