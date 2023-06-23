import { useState, useEffect } from "react";
import useEstadisticasApi from "./useEstadisticasApi";


const procesarApiDatos = (apiDatos, inicialDatos) => {
  
  // objtendo los datos de la API
  const apiDatosMesDia = apiDatos.reduce((acumulador, item) => {
    acumulador[item.fecha.toLowerCase()] = item.incidencias;
    return acumulador;
  }, {});

  return inicialDatos.map((item) => ({
    ...item,
    incidencias: apiDatosMesDia[item.fecha.toLowerCase()] || item.incidencias,
  }));
};

const useEstadisticasBar = (url, inicialDatos) => {
  
  const [incidentes, setIncidentes] = useState(inicialDatos);
  const { datos, isLoading, error } = useEstadisticasApi(url); // respuesta de la API
  
  useEffect(() => {

    if (datos) {
      const processedData = procesarApiDatos(datos, inicialDatos);
      setIncidentes(processedData);
    } else {
      setIncidentes(inicialDatos);
    }

  }, [datos, inicialDatos]);

  const totalIncidentes = incidentes.reduce(
    (suma, item) => suma + item.incidencias,
    0
  );
 

  return { incidentes, totalIncidentes, isLoading, error };
};

export default useEstadisticasBar;
