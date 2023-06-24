import React, { useState } from "react";
import EstadisticaBar from "./EstadisticaBar";

import {
  API_URL_SEMANAL,
  API_URL_MENSUAL,
} from "./constantsEstadistica";

const Estadistica = () => {
  const [siguienteGrafico, setSiguienteGrafico] = useState(true);

  return (
    <section className="p-10">
      {
        <EstadisticaBar
          API_URL={siguienteGrafico ? API_URL_SEMANAL : API_URL_MENSUAL}
          siguienteGrafico={siguienteGrafico}
          setSiguienteGrafico={setSiguienteGrafico}
        />
      }
    </section>
  );
};

export default Estadistica;
