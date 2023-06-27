import { useMemo } from "react";
import masterQuery from "../../../../helpers/masterQuery";
import { useQuery } from "react-query";

const useEstadisticaApi = (API_URL) => {
  const queryOptions = {
    url: API_URL,
    metodo: "get",
  };

  const fetchData = async () => {
    const { url, metodo } = queryOptions;
    try {
      const response = await masterQuery(url, null, metodo, true, false);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(
        error.message || "Error al obtener los datos - useEstadisticasApi "
      );
    }
  };

  const { data, isLoading, isError, error } = useQuery(API_URL, fetchData);

  const totalIncidencias = useMemo(() => {
    if (data && data.respuesta) {
      return data.respuesta.reduce(
        (total, item) => total + item.incidencias,
        0
      );
    }
    return 0;
  }, [data]);

  return { data, totalIncidencias, isLoading, isError, error };
};

export default useEstadisticaApi;
