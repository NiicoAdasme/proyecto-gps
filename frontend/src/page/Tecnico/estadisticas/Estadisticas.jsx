import React, { useState } from "react";
import EstadisticaBar from "./EstadisticaBar";
import Pueba from "./hooks/Pueba";

import {
  API_URL_SEMANAL,
  API_URL_MENSUAL,
} from "./constantsEstadistica";

const Estadistica = () => {
  const [siguienteGrafico, setSiguienteGrafico] = useState(true);
  console.log("estadistica");
  return (
    <section className="p-10">
      {
        <EstadisticaBar
          API_URL={siguienteGrafico ? API_URL_SEMANAL : API_URL_MENSUAL}
          siguienteGrafico={siguienteGrafico}
          setSiguienteGrafico={setSiguienteGrafico}
        />
      }
      <Pueba/>
    </section>
  );
};

export default Estadistica;
