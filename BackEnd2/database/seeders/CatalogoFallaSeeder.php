<?php

namespace Database\Seeders;

use App\Models\CatalogoFalla;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CatalogoFallaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "cafa_codigo" => "1",
                "cafa_opcion" => "Ticket caducado",
                "cafa_descripcion" => null,
            ]
        ];


        foreach ($data as $item) {
                CatalogoFalla::create([
                    "cafa_codigo" => $item["cafa_codigo"],
                    "cafa_opcion" => $item["cafa_opcion"],
                    "cafa_descripcion" => $item["cafa_descripcion"]
                ]);
        }
    }
}
