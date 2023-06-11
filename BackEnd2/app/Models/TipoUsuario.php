<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoUsuario extends Model
{
    use HasFactory,Filterable;

    protected $table = "tipo_usuario";
    protected $primaryKey = "id";
    protected $fillable = ["*"];

    public function usuario()
    {   
        return $this->hasMany(Usuario::class,"tius_id");
    }
}
