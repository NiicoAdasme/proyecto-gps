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

            $incidencias = Incidente::select('id', 'created_at')
                ->whereBetween('created_at', [$startOfWeek, $endOfWeek])
                ->orderBy('created_at', 'asc')
                ->get();

            $incidenciasPorDia = $incidencias->groupBy(function ($incidencia) {
                return ucfirst($incidencia->created_at->isoFormat('dddd'));  // Agrupa por día de la semana
            })->map(function ($incidenciasDelDia, $dia) {
                return [
                    'fecha' => $dia,
                    'incidencias' => $incidenciasDelDia->count(),
                ];
            });

            // Crea una colección con todos los días de la semana
            $diasDeLaSemana = collect([
                ['fecha' => 'Lunes', 'incidencias' => 0],
                ['fecha' => 'Martes', 'incidencias' => 0],
                ['fecha' => 'Miércoles', 'incidencias' => 0],
                ['fecha' => 'Jueves', 'incidencias' => 0],
                ['fecha' => 'Viernes', 'incidencias' => 0],
                ['fecha' => 'Sábado', 'incidencias' => 0],
                ['fecha' => 'Domingo', 'incidencias' => 0],
            ]);

            // Combina las dos colecciones
            $resultado = $diasDeLaSemana->map(function ($dia) use ($incidenciasPorDia) {
                // Busca el día en la colección de incidencias
                $incidenciasDelDia = $incidenciasPorDia->firstWhere('fecha', $dia['fecha']);

                // Si el día tiene incidencias, actualiza el número de incidencias
                if ($incidenciasDelDia) {
                    $dia['incidencias'] = $incidenciasDelDia['incidencias'];
                }

                return $dia;
            });

            return $resultado;
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
                return ucfirst($incidencia->created_at->isoFormat('MMMM'));  // Agrupa por mes
            })->map(function ($incidenciasDelMes, $mes) {
                return [
                    'fecha' => $mes,
                    'incidencias' => $incidenciasDelMes->count(),
                ];
            });

            // Crea una colección con todos los meses del año
            $mesesDelAno = collect([
                ['fecha' => 'Enero', 'incidencias' => 0],
                ['fecha' => 'Febrero', 'incidencias' => 0],
                ['fecha' => 'Marzo', 'incidencias' => 0],
                ['fecha' => 'Abril', 'incidencias' => 0],
                ['fecha' => 'Mayo', 'incidencias' => 0],
                ['fecha' => 'Junio', 'incidencias' => 0],
                ['fecha' => 'Julio', 'incidencias' => 0],
                ['fecha' => 'Agosto', 'incidencias' => 0],
                ['fecha' => 'Septiembre', 'incidencias' => 0],
                ['fecha' => 'Octubre', 'incidencias' => 0],
                ['fecha' => 'Noviembre', 'incidencias' => 0],
                ['fecha' => 'Diciembre', 'incidencias' => 0],
            ]);

            // Combina las dos colecciones
            $resultado = $mesesDelAno->map(function ($mes) use ($incidenciasPorMes) {
                // Busca el mes en la colección de incidencias
                $incidenciasDelMes = $incidenciasPorMes->firstWhere('fecha', $mes['fecha']);

                // Si el mes tiene incidencias, actualiza el número de incidencias
                if ($incidenciasDelMes) {
                    $mes['incidencias'] = $incidenciasDelMes['incidencias'];
                }

                return $mes;
            });

            return $resultado;
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }
}
