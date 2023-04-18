<?php

namespace Database\Seeders;

use App\Models\Planta;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlantaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "plan_codigo" => "1",
                "plan_nombre" => "Peumos"
            ],
        ];


        foreach ($data as $item) {
                Planta::create([
                    "plan_codigo" => $item["plan_codigo"],
                    "plan_nombre" => $item["plan_nombre"]
                ]);
        }
    }
}
