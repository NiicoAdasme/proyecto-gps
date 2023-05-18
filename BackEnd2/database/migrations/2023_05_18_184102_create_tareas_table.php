<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tareas', function (Blueprint $table) {
            $table->id();
            $table->string("tare_descripcion",100);
            $table->date("tare_fecha_inicio");
            $table->date("tare_fecha_fin");
            

            $table->foreignId("esta_id")->nullable()->constrained("estado")->cascadeOnDelete()->nullOnDelete();
            $table->foreignId("arpl_id")->nullable()->constrained("area_planta")->cascadeOnDelete()->nullOnDelete();
            $table->foreignId("usua_id")->nullable()->constrained("usuario")->cascadeOnDelete()->nullOnDelete();
            $table->foreignId("depa_id")->nullable()->constrained("departamento")->cascadeOnDelete()->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tareas');
    }
};
