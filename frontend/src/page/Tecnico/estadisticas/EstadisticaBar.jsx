import {memo} from "react";
import BarCharts from "../../../components/customCharts/BarCharts";
import useEstadisticasBar from "./hooks/useEstadisticasBar";

const EstadisticaBar = ({ API_URL, siguienteGrafico, setSiguienteGrafico }) => {
  
  //custon hooks
  
  const {
    datos: semanalMensual,
    totalIncidentes: total,
    isLoading,
    error,
  } = useEstadisticasBar(API_URL);
  //manejar tiempo de carga
  
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
    <div className="mx-auto px-3 sm:px-2 lg:px-3 bg-gray-100 rounded shadow-lg">
      <div className="py-8 sm:py-16 lg:py-8">
        <div className="flex flex-row sm:flex-row items-center justify-between mb-4 px-6 sm:px-12">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-0">
            Grafíco de barras {esSemanal ? "semanal" : "mensual"}
          </h1>
          <button
            className="bg-paletaAzul3 hover:bg-paletaAzul2 text-white font-bold py-3 px-5 rounded min-w-[150px]"
            onClick={() => setSiguienteGrafico(!siguienteGrafico)}
          >
            {siguienteGrafico ? "Ver Mes" : "Ver Semana"}
          </button>
        </div>
        <div className="flex flex-col lg:flex-row text-base sm:text-lg lg:text-base font-medium text-indigo-950 items-center justify-center">
          <div className="flex-grow">
            {semanalMensual.length > 0 && <BarCharts data={semanalMensual} />}
          </div>
          <div className="mb-4 mt-6 text-lg font-light leading-relaxed text-center lg:w-2/6">
            <h2>
              Total incidencias {esSemanal ? "semanales" : "mensuales"} :{" "}
              {total}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(EstadisticaBar);
