<?php

namespace App\Http\Controllers\Login;

use App\Http\Controllers\Controller;
use App\Http\Requests\Login\LoginRequest;
use App\Repositorios\Login\LoginRepository;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    protected LoginRepository $loginRepo;

    public function __construct()
    {
        $this->loginRepo = new LoginRepository();
    }

    public function login(LoginRequest $request)
    {
        return $this->loginRepo->login($request);
    }
}
