<?php

namespace App\Repositorios\Estadistica;

use Carbon\Carbon;
use App\Models\Incidente;
use App\Traits\ApiResponser;
use Exception;

class EstadisticaRepository
{
    use ApiResponser;

    public function incidenciasSemanal()
    {
        // Configura el idioma de Carbon a español
        Carbon::setLocale('es');

        // Obtiene la fecha del lunes de esta semana
        $startOfWeek = Carbon::now()->startOfWeek();

        // Obtiene la fecha del domingo de esta semana
        $endOfWeek = Carbon::now()->endOfWeek();

        try {

            $incidencias = Incidente::select('id', 'created_at')->whereBetween('created_at', [$startOfWeek, $endOfWeek])->orderBy('created_at', 'asc')->get();

            $incidenciasPorDia = $incidencias->groupBy(function ($incidencia) {
                return $incidencia->created_at->isoFormat('dddd');
            })->map(function ($incidenciasDelDia, $dia) {
                return [
                    'fecha' => $dia,
                    'incidencias' => $incidenciasDelDia->count(),
                ];
            })->values();

            return $incidenciasPorDia;
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }

    public function incidenciasMensual()
    {
        // Configura el idioma de Carbon a español
        Carbon::setLocale('es');

        // Obtiene la fecha del primer día del año
        $startOfYear = Carbon::now()->startOfYear();

        // Obtiene la fecha del último día del año
        $endOfYear = Carbon::now()->endOfYear();

        try {

            $incidencias = Incidente::select('id', 'created_at')
                ->whereBetween('created_at', [$startOfYear, $endOfYear])
                ->orderBy('created_at', 'asc')
                ->get();

            $incidenciasPorMes = $incidencias->groupBy(function ($incidencia) {
                return $incidencia->created_at->isoFormat('MMMM');  // Agrupa por mes
            })->map(function ($incidenciasDelMes, $mes) {
                return [
                    'fecha' => $mes,  
                    'incidencias' => $incidenciasDelMes->count(),
                ];
            })->values();

            return $incidenciasPorMes;
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }
}
