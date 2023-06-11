<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(CatalogoMensajeSeeder::class);
        $this->call(TipoUsuarioSeeder::class);
        $this->call(DepartamentoSeeder::class);
        $this->call(EstadoSeeder::class);
        $this->call(PlantaSeeder::class);
        $this->call(TurnoSeeder::class);
        $this->call(AreaPlantaSeeder::class);
        $this->call(CatalogoFallaSeeder::class);
        $this->call(UsuarioSeeder::class);
        $this->call(TareaSeeder::class);
    }
}
