<?php

namespace Database\Seeders;

use App\Models\Departamento;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartamentoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "depa_nombre" => "Mantenimiento",
            ],
        ];


        foreach ($data as $item) {
                Departamento::create([
                    "depa_nombre" => $item["depa_nombre"]
                ]);
        }
    }
}
