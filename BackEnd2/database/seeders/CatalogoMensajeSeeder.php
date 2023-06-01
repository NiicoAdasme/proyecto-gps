<?php

namespace Database\Seeders;

use App\Models\CatalogoMensaje;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CatalogoMensajeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "came_mensaje" => "Sesión iniciada correctamente",
                "came_codigo" => 1,
                "came_funcion" => "/api/login/login",
            ],
            [
                "came_mensaje" => "Datos ingresados incorrectos",
                "came_codigo" => 2,
                "came_funcion" => "/api/login/login",
            ]
        ];


        foreach ($data as $item) {
                CatalogoMensaje::create([
                    "came_mensaje" => $item["came_mensaje"],
                    "came_codigo" => $item["came_codigo"],
                    "came_funcion" => $item["came_funcion"]
                ]);
        }
    }
}
