<?php

namespace App\Repositorios\Estadistica;

use Carbon\Carbon;
use App\Models\Incidente;
use App\Traits\ApiResponser;
use Exception;


class EstadisticaRepository
{
    use ApiResponser;

    // Template 
    protected $diasDeLaSemana = [
        ['fecha' => 'Lunes', 'incidencias' => 0],
        ['fecha' => 'Martes', 'incidencias' => 0],
        ['fecha' => 'Miércoles', 'incidencias' => 0],
        ['fecha' => 'Jueves', 'incidencias' => 0],
        ['fecha' => 'Viernes', 'incidencias' => 0],
        ['fecha' => 'Sábado', 'incidencias' => 0],
        ['fecha' => 'Domingo', 'incidencias' => 0],
    ];

    protected $mesesDelAno = [
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
    ];

    public function __construct()
    {
        // Configura el idioma de Carbon a español
        Carbon::setLocale('es');
    }

    public function incidenciasSemanal()
    {
        
        // Obtiene la fecha del lunes de esta semana
        $startOfWeek = Carbon::now()->startOfWeek();

        // Obtiene la fecha del domingo de esta semana
        $endOfWeek = Carbon::now()->endOfWeek();

        try {

            // Esta funcion obtiene las fechas de las incidencias ordenadas [ Lun-Dom Ene-Dic ] 
            $incidenciasPorDia = $this->getIncidenciasAgrupadas($startOfWeek, $endOfWeek, 'dddd');

            // Combina las dos colecciones
            $resultado = $this->fusionarIncidenciasConTemplate($this->diasDeLaSemana, $incidenciasPorDia);

  
            return $this->successResponse($resultado, "Incidencias por dia listadas correctamente");
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }

    public function incidenciasMensual()
    {
        // Obtiene la fecha del primer día del año
        $startOfYear = Carbon::now()->startOfYear();

        // Obtiene la fecha del último día del año
        $endOfYear = Carbon::now()->endOfYear();

        try {

            // Esta funcion obtiene las fechas de las incidencias ordenadas [ Lun-Dom Ene-Dic ] 
            $incidenciasPorMes = $this->getIncidenciasAgrupadas($startOfYear, $endOfYear, 'MMMM');

            // Combina las dos colecciones
            $resultado = $this->fusionarIncidenciasConTemplate($this->mesesDelAno, $incidenciasPorMes);

            return $this->successResponse($resultado, "Incidencias por mes listadas correctamente");
        } catch (Exception $ex) {
            return $this->errorResponse("Error al procesar los datos", 409, $ex, __METHOD__);
        }
    }


    //                              UTILIDAD
    // Esta funcion obtiene las fechas de las incidencias ordenadas [ Lun-Dom Ene-Dic ] 
    private function getIncidenciasSemanMes(Carbon $start, Carbon $end)
    {
        return Incidente::select('created_at')
            ->whereBetween('created_at', [$start, $end])
            ->orderBy('created_at', 'asc')
            ->cursor();
    }

    // Formatea las fechas para obtener solo el dia o mes [fecha: Lunes - Fecha: Enero] 
    private function getIncidenciasAgrupadas(Carbon $start, Carbon $end, string $formato)
    {
        $incidencias = $this->getIncidenciasSemanMes($start, $end);

        return $incidencias->groupBy(function ($incidencia) use ($formato) {
            return ucfirst($incidencia->created_at->isoFormat($formato));
        })->map(function ($incidenciasAgrupadas, $clave) {
            return [
                'fecha' => $clave,
                'incidencias' => $incidenciasAgrupadas->count(),
            ];
        });
    }
    // 
    private function fusionarIncidenciasConTemplate(array $template, $incidenciasAgrupadas)
    {
        return collect($template)->map(function ($item) use ($incidenciasAgrupadas) {
            $incidenciasDelItem = $incidenciasAgrupadas->firstWhere('fecha', $item['fecha']);

            if ($incidenciasDelItem) {
                $item['incidencias'] = $incidenciasDelItem['incidencias'];
            }

            return $item;
        });
    }
}
