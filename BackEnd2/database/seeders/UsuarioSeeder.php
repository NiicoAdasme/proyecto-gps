<?php

namespace Database\Seeders;

use App\Models\Usuario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "usua_nombre" => "Manuel",
                "usua_apellido_p" => "Pereira",
                "usua_apellido_m" => "Opazo",
                "usua_rut" => "201948029",
                "usua_correo" => "manuel.pereira1701@alumnos.ubiobio.cl",
                "usua_pass" => "1234",
                "usua_activo" => true,
                "depa_id" => 1,
                "tius_id" => 1,
            ],  
        ];


        foreach ($data as $item) {
                Usuario::create([
                    "usua_nombre" => $item["usua_nombre"],
                    "usua_apellido_p" => $item["usua_apellido_p"],
                    "usua_apellido_m" => $item["usua_apellido_m"],
                    "usua_rut" => $item["usua_rut"],
                    "usua_pass" => Hash::make($item["usua_pass"]),
                    "usua_correo" => $item["usua_correo"],
                    "usua_activo" => $item["usua_activo"],
                    "depa_id" => $item["depa_id"],
                    "tius_id" => $item["tius_id"],
                ]);
        }
    }
}
