<?php

use App\Http\Controllers\Catalogo\CatalogoMensajeController;
use App\Http\Controllers\Incidente\IncidenteController;
use App\Http\Controllers\Login\LoginController;
use App\Http\Controllers\Tareas\TareasController;
use App\Http\Controllers\Usuario\UsuarioController;
use App\Http\Controllers\Calendario\CalendarioController;
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
Route::prefix('tareas')->group(function(){
    Route::post("createTarea",[TareasController::class,"createTarea"]);
    Route::get("allTareas",[TareasController::class,"allTareas"]);
});

Route::prefix('incidente')->group(function(){
    Route::post("incidenciaTable",[IncidenteController::class,"incidenciaTable"]);
});

Route::prefix('login')->group(function(){
    Route::post("login",[LoginController::class,"login"]);
});

Route::prefix('calendario')->group(function(){
    Route::get('getcalendario', [CalendarioController::class, 'getCalendario']);
    Route::get('getcalendario', [CalendarioController::class, 'getCalendarioByid']);
    Route::post('postcalendario', [CalendarioController::class, 'postDatos']);
    Route::put('editcalendario/{id}', [CalendarioController::class, 'editDatos']);
    Route::delete('deletecalendario/{id}', [CalendarioController::class, 'deleteDatos']);
    Route::get('/reagendamiento', [CalendarioController::class, 'reagendamiento']);
});