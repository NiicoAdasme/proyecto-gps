import { useEffect, useState } from "react";
import useEstadisticasApi from "./useEstadisticasApi";

const useEstadisticasBar = (url) => {
  
  const { datos, isLoading, error } = useEstadisticasApi(url); // respuesta de la API

  const [totalIncidentes, setTotalIncidentes] = useState(0);

  useEffect(() => {
    if (datos) {
      const total = datos.reduce(
        (suma, item) => suma + item.incidencias,
        0
      );
      setTotalIncidentes(total);
    }
  }, [datos]);

  return { datos, totalIncidentes, isLoading, error };
};

export default useEstadisticasBar;
