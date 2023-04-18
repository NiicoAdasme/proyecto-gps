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
        Schema::create('solucion_incidencia', function (Blueprint $table) {
            $table->id();
            $table->string("soin_solucion",100);

            $table->foreignId("inci_id")->nullable()->constrained("incidente")->cascadeOnDelete()->nullOnDelete();
            $table->foreignId("esta_id")->nullable()->constrained("estado")->cascadeOnDelete()->nullOnDelete();
            $table->foreignId("depa_id")->nullable()->constrained("departamento")->cascadeOnDelete()->nullOnDelete();
            $table->foreignId("usua_id")->nullable()->constrained("usuario")->cascadeOnDelete()->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('solucion_incidencia');
    }
};
