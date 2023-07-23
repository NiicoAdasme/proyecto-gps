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
        Schema::create('usuario', function (Blueprint $table) {
            $table->id();
            $table->string("usua_nombre",150);
            $table->string("usua_apellido_p",150)->nullable();
            $table->string("usua_apellido_m",150)->nullable();
            $table->string("usua_pass");
            $table->string("usua_rut",9);
            $table->string("usua_correo",320);
            $table->boolean("usua_activo");

            $table->foreignId("depa_id")->nullable()->constrained("departamento")->cascadeOnDelete()->nullOnDelete();
            $table->foreignId("tius_id")->nullable()->constrained("tipo_usuario")->cascadeOnDelete()->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuario');
    }
};
