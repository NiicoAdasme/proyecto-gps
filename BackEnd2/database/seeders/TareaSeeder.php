<?php

namespace Database\Seeders;

use App\Models\Tarea;
use Illuminate\Database\Seeder;

class TareaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "tare_titulo" => "Titulo 1",
                "tare_descripcion" => "Descripcion del titulo 1",
                "tare_fecha_inicio" => "2021-01-01",
                "tare_fecha_fin" => "2021-01-01",
                "tare_color" => "#000000",
                "usua_id" => 2,
                "esta_id" => 1,
                "arpl_id" => 1,
                "depa_id" => 1
            ],
            [
                "tare_titulo" => "Titulo 2",
                "tare_descripcion" => "Descripcion del titulo 2",
                "tare_fecha_inicio" => "2021-02-01",
                "tare_fecha_fin" => "2021-02-01",
                "tare_color" => "#000000",
                "usua_id" => 1,
                "esta_id" => 1,
                "arpl_id" => 1,
                "depa_id" => 1
            ]
        ];


        foreach ($data as $item) {
            Tarea::create([
                "tare_titulo" => $item["tare_titulo"],
                "tare_descripcion" => $item["tare_descripcion"],
                "tare_fecha_inicio" => $item["tare_fecha_inicio"],
                "tare_fecha_fin" => $item["tare_fecha_fin"],
                "tare_color" => $item["tare_color"],
                "usua_id" => $item["usua_id"],
                "esta_id" => $item["esta_id"],
                "arpl_id" => $item["arpl_id"],
                "depa_id" => $item["depa_id"]
            ]);
        }
    }
}

