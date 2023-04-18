<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Incidente extends Model
{
    use HasFactory,Filterable;

    protected $table = "incidente";
    protected $primaryKey = "id";
    protected $fillable = ["*"];
}
