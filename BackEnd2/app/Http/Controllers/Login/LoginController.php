<?php

namespace App\Http\Controllers\Login;

use App\Http\Controllers\Controller;
use App\Repositorios\Login\LoginRepository;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    protected LoginRepository $loginRepo;

    public function __construct()
    {
        $this->loginRepo = new LoginRepository();
    }

    public function login(Request $request)
    {
        return $this->loginRepo->login($request);
    }
}
