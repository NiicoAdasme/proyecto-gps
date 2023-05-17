<?php

namespace Database\Seeders;

use App\Models\AreaPlanta;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AreaPlantaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "arpl_codigo" => "1",
                "arpl_nombre" => "Pintado",
                "plan_id" => 1,
            ],
        ];


        foreach ($data as $item) {
                AreaPlanta::create([
                    "arpl_codigo" => $item["arpl_codigo"],
                    "arpl_nombre" => $item["arpl_nombre"],
                    "plan_id" => $item["plan_id"]
                ]);
        }

    }
}
