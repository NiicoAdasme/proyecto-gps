import { useQuery } from "react-query";
import { queryConstants } from "../constants";

const defaultValue = () => {
  return { isloading: false, message: "Cargando, favor espere.." };
};

const useLoading = () => {
  return useQuery(queryConstants.loading, defaultValue, {
    staleTime: Infinity, // tiempo en que puede hacer el cacheo de la data
  });
};

export default useLoading;