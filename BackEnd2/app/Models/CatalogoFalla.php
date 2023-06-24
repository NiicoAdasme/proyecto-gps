<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatalogoFalla extends Model
{
    use HasFactory,Filterable;

    protected $table = "catalogo_falla";
    protected $primaryKey = "id";
    protected $fillable = ["*"];
    
    public function areaPlanta()
    {
        return $this->hasMany(AreaPlanta::class,"cafa_id");
    }
}
