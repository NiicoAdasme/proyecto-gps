<?php

namespace App\Http\Controllers\Calendario;

use App\Http\Controllers\Controller;
use App\Repositorios\Calendario\CalendarioRepository;
use Illuminate\Http\Request;

class CalendarioController extends Controller
{
    protected CalendarioRepository $calendarioRepo;

    public function __construct()
    {
        $this->calendarioRepo = new CalendarioRepository();
    }

    public function Calendario(Request $request)
    {
        return $this->calendarioRepo->Calendario($request);
    }
}
