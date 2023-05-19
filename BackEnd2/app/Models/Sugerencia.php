<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sugerencia extends Model
{
    use HasFactory,Filterable;

    protected $table = "sugerencias";
    protected $primaryKey = "id";
    protected $fillable = ["*"];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class,"usua_id");
    }

    public function estadoSugerencia()
    {
        return $this->belongsTo(EstadoSugerencia::class,"essu_id");
    }
}
