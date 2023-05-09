import React, { useMemo, useState, useEffect } from "react";
import { Columnas,Filters } from "./helpers/tableHelper";
import { CustomTable } from "../../../components";

function IncidenciasTecnico() {

  const queryUrl = { url: "http://127.0.0.1:8000/api/usuarios/datosUsuario" };

  return (
    <>
      <CustomTable
        titulo={"Incidencias"}
        columnas={Columnas}
        filtro={Filters}
        query={queryUrl}
      />
    </>
  );
}

export default IncidenciasTecnico;
