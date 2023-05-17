import { queryConstants } from "../constants";
import { queryClientConfig } from "../queryClientConfig";

// actualizo el estado de la lista de los usiarios

export const setLoading = (isLoading, message = "Cargando, favor espere..") => {
  queryClientConfig.setQueryData(queryConstants.loading, {
    isLoading: isLoading ?? false,
    message: message,
  });
};