<?php

namespace Database\Seeders;

use App\Models\Estado;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EstadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "esta_codigo" => "1",
                "esta_nombre" => "En Proceso"
            ],
            [
                "esta_codigo" => "2",
                "esta_nombre" => "Procesado"
            ],
            [
                "esta_codigo" => "3",
                "esta_nombre" => "Fallo el proceso"
            ],
        ];


        foreach ($data as $item) {
                Estado::create([
                    "esta_codigo" => $item["esta_codigo"],
                    "esta_nombre" => $item["esta_nombre"]
                ]);
        }
    }
}
