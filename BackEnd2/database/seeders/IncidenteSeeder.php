<?php

namespace Database\Seeders;

use App\Models\Incidente;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IncidenteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "inci_observacion" => "Mantenimiento",
                "esta_id" => 1,
                "turn_id" => 1,
                "arpl_id" => 1,
                "usua_id" => 1,
                "depa_id" => 1,
                "incidencia_padre_id" => null
            ],
            [
                "inci_observacion" => "Mantenimiento",
                "esta_id" => 1,
                "turn_id" => 2,
                "arpl_id" => 1,
                "usua_id" => 2,
                "depa_id" => 2,
                "incidencia_padre_id" => null
            ],
        ];


        foreach ($data as $item) {
                Incidente::create([
                    "inci_observacion" => $item["inci_observacion"],
                    "esta_id" => $item["esta_id"],
                    "turn_id" => $item["turn_id"],
                    "arpl_id" => $item["arpl_id"],
                    "usua_id" => $item["usua_id"],
                    "depa_id" => $item["depa_id"],
                    "incidencia_padre_id" => $item["incidencia_padre_id"],
                ]);
        }
    }
}
