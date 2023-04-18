<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    use HasFactory,Filterable;

    protected $table = "estado";
    protected $primaryKey = "id";
    protected $fillable = ["*"];
}
