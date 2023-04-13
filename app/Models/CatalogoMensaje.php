<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatalogoMensaje extends Model
{
    use HasFactory,Filterable;

    protected $table = "catalogo_mensaje";
    protected $primaryKey = "id";
    protected $fillable = ["*"];

}
