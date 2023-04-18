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
}
