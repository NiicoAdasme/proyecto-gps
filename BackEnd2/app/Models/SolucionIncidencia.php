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
}
