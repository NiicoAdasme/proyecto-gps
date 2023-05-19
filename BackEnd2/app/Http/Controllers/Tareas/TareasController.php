<?php

namespace App\Http\Controllers\Tareas;

use App\Http\Controllers\Controller;
use App\Repositorios\Tareas\TareasRepository;
use Illuminate\Http\Request;

class TareasController extends Controller
{
    protected TareasRepository $tareaRepo;

    public function __construct()
    {
        $this->tareaRepo = new TareasRepository();
    }
    public function mensaje(Request $request) {
        return $this->tareaRepo->mensaje($request);
    }


}
