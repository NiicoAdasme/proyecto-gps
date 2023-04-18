<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory,Filterable;

    protected $table = "usuario";
    protected $primaryKey = "id";
    protected $fillable = ["*"];
    
}
