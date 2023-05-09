<?php

use App\Http\Controllers\Catalogo\CatalogoMensajeController;
use App\Http\Controllers\Usuario\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('catalogo')->group(function(){
    Route::post("crearMensaje",[CatalogoMensajeController::class,"crearMensaje"]);
    Route::get("hola",[CatalogoMensajeController::class,"hola"]);
});

Route::prefix('usuarios')->group(function(){
    Route::post("datosUsuario",[UsuarioController::class,"datosUsuarios"]);
});
