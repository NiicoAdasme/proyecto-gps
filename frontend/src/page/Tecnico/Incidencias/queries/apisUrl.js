import { baseUrl } from "../../../../queries/apisUrl";

const queriesUrl = {
  turnosSelect: {
    url: baseUrl + "api/incidente/turnoSelect",
    type: "get",
  },
  areaPlantaSelect: {
    url: baseUrl + "api/incidente/areaPlantaSelect",
    type: "get",
  },
  departamentoSelect: {
    url: baseUrl + "api/incidente/departamentoSelect",
    type: "get",
  },
  incidenciasTable: {
    url: baseUrl + "api/incidente/incidenciaTable",
    type: "post",
  },
  crearIncidencia: {
    url: baseUrl + "api/incidente/crearIncidencia",
    type: "post",
  },
  detalleIncidente: {
    url: baseUrl + "api/incidente/detalleIncidente",
    type: "post",
  },
};
export { queriesUrl };
