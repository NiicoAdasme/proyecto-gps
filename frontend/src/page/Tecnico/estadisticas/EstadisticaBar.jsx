import React from "react";
import BarCharts from "../../../components/customCharts/BarCharts";
import useEstadisticasBar from "./hooks/useEstadisticasBar";

const EstadisticaBar = ({ API_URL, siguienteGrafico, setSiguienteGrafico }) => {
  // custon hooks
  const {
    datos: semanalMensual,
    totalIncidentes: total,
    isLoading,
    error,
  } = useEstadisticasBar(API_URL);
  // manejar tiempo de carga
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  // manejar error
  if (error) {
    return <div>Hubo un error: {error.message}</div>;
  }
  // cambiar label
  const esSemanal = API_URL.includes("Semanal");

  return (
    <div className="bg-gray-100 rounded shadow-lg">
      <div className="mx-auto px-2 sm:px-3 lg:px-2">
        <div className="py-8 sm:py-16 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 px-6 sm:px-12">
            <h1 className="text-2xl sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-0">
              Total incidencias {esSemanal ? "semanales" : "mensuales"} :{" "}
              {total}
            </h1>
            <button
              className="bg-paletaAzul3 hover:bg-paletaAzul2 text-white font-bold py-3 px-5 rounded"
              onClick={() => setSiguienteGrafico(!siguienteGrafico)}
            >
              {siguienteGrafico ? "Ver Mes" : "Ver Semana"}
            </button>
          </div>
          <div className="text-2xl sm:text-xl lg:text-base font-bold text-gray-900">
            {semanalMensual.length > 0 && <BarCharts data={semanalMensual} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EstadisticaBar;
