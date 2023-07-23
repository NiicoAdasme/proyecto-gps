<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Planta extends Model
{
    use HasFactory,Filterable;

    protected $table = "planta";
    protected $primaryKey = "id";
    protected $fillable = ["*"];

    public function areaPlanta()
    {
        return $this->hasMany(AreaPlanta::class,"plan_id");
    }
}
