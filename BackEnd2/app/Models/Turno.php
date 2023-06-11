<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Turno extends Model
{
    use HasFactory,Filterable;

    protected $table = "turno";
    protected $primaryKey = "id";
    protected $fillable = ["*"];

    public function incidente()
    {   
        return $this->hasMany(Incidente::class,"inci_id");
    }
}
