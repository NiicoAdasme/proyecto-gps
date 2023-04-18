<?php

namespace Database\Seeders;

use App\Models\Turno;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TurnoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "turn_codigo" => "1",
                "turn_nombre" => "Diurno",
                "turn_hora_inicio" => "08:00",
                "turn_hora_fin" => "18:00",
            ],
            [
                "turn_codigo" => "2",
                "turn_nombre" => "Nocturno",
                "turn_hora_inicio" => "22:00",
                "turn_hora_fin" => "08:00",
            ],
            
        ];


        foreach ($data as $item) {
                Turno::create([
                    "turn_codigo" => $item["turn_codigo"],
                    "turn_nombre" => $item["turn_nombre"],
                    "turn_hora_inicio" => Carbon::parse($item["turn_hora_inicio"]),
                    "turn_hora_fin" => Carbon::parse($item["turn_hora_fin"])
                ]);
        }
    }
}
