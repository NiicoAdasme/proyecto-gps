<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstadoSugerencia extends Model
{
    use HasFactory,Filterable;

    protected $table = "estado_sugerencia";
    protected $primaryKey = "id";
    protected $fillable = ["*"];

    public function sugerencia()
    {
        return $this->hasMany(Sugerencia::class,"essu_id");
    }
}
