<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AreaPlanta extends Model
{
    use HasFactory,Filterable;

    protected $table = "area_planta";
    protected $primaryKey = "id";
    protected $fillable = ["*"];


    public function incidente()
    {
        return $this->hasMany(Incidente::class,"arpl_id");
    }

    public function catalogoFalla()
    {
        return $this->belongsTo(CatalogoFalla::class,"cafa_id");
    }

    public function planta()
    {
        return $this->belongsTo(Planta::class,"plan_id");
    }
}
