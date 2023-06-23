import {baseUrl} from "../../../queries/apisUrl"
 
export const inicialDatosSemana = [
  { fecha: "Lunes", incidencias: 0 },
  { fecha: "Martes", incidencias: 0 },
  { fecha: "Miércoles", incidencias: 0 },
  { fecha: "Viernes", incidencias: 0 },
  { fecha: "Sábado", incidencias: 0 },
  { fecha: "Domingo", incidencias: 0 },
];

export const inicialDatosMeses = [
  { fecha: "Enero", incidencias: 0 },
  { fecha: "Febrero", incidencias: 0 },
  { fecha: "Marzo", incidencias: 0 },
  { fecha: "Abril", incidencias: 0 },
  { fecha: "Mayo", incidencias: 0 },
  { fecha: "Junio", incidencias: 0 },
  { fecha: "Julio", incidencias: 0 },
  { fecha: "Agosto", incidencias: 0 },
  { fecha: "Septiembre", incidencias: 0 },
  { fecha: "Octubre", incidencias: 0 },
  { fecha: "Noviembre", incidencias: 0 },
  { fecha: "Diciembre", incidencias: 0 },
];

export const API_URL_SEMANAL =
  `${baseUrl}api/estadistica/incidenciasSemanal`;

export const API_URL_MENSUAL =
`${baseUrl}api/estadistica/incidenciasMensual`;