import { useEffect } from "react";
import BarCharts from "../../../components/customCharts/BarCharts";
import useEstadisticaApi from "./hooks/useEstadisticasApi";

const EstadisticaBar = ({ API_URL, siguienteGrafico, setSiguienteGrafico }) => {
 
  const {data, totalIncidencias, isLoading, isError, error} = useEstadisticaApi(API_URL);
  // label
  const esSemanal = API_URL.includes("Semanal");

  useEffect(() => {
    if (data && data.respuesta) {
      console.log(data.respuesta);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mx-auto px-3 sm:px-2 lg:px-3 bg-gray-100 rounded shadow-lg">
      <div className="py-8 sm:py-16 lg:py-8">
        <div className="flex flex-row sm:flex-row items-center justify-between mb-4 px-6 sm:px-12">
          <h1 className="text-lg sm:text-xl lg:text-2xl fonr text-gray-900 mb-3 sm:mb-0">
            Grafíco de barras {esSemanal ? "semanal" : "mensual"}
          </h1>
          <button
            className="bg-paletaAzul3 hover:bg-paletaAzul2 text-white font-bold py-3 px-5 rounded min-w-[150px]"
            onClick={() => setSiguienteGrafico(!siguienteGrafico)}
          >
            {siguienteGrafico ? "Ver Mes" : "Ver Semana"}
          </button>
        </div>
        <div className="flex flex-col lg:flex-row text-base sm:text-lg lg:text-base font-medium  text-indigo-950 items-center justify-center">
          <div className="flex-grow font-bold">
            {Array.isArray(data.respuesta) && data.respuesta.length > 0 && (
              <BarCharts data={data.respuesta} />
            )}
          </div>
          <div className="mb-4 mt-6 text-lg font-light leading-relaxed text-center lg:w-2/6 ">
            <h2 className="font-bold">
              Total incidencias {esSemanal ? "semanales" : "mensuales"} :{" "}
              {totalIncidencias}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EstadisticaBar;