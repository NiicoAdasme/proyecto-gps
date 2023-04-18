<?php

namespace Database\Seeders;

use App\Models\TipoUsuario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TipoUsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "tius_tipo" => "Produccion",
            ],
            [
                "tius_tipo" => "Cliente",
            ],
            [
                "tius_tipo" => "Administrador",
            ],
        ];


        foreach ($data as $item) {
                TipoUsuario::create([
                    "tius_tipo" => $item["tius_tipo"]
                ]);
        }
    }
}
