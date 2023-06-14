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
        Schema::create('area_planta', function (Blueprint $table) {
            $table->id();
            $table->integer("arpl_codigo");
            $table->string("arpl_nombre",100);

            $table->foreignId("plan_id")->nullable()->constrained("planta")->cascadeOnDelete()->nullOnDelete();
            $table->foreignId("cafa_id")->nullable()->constrained("catalogo_falla")->cascadeOnDelete()->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('area_planta');
    }
};
