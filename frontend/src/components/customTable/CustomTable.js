import React, { useState } from "react";
import Table from "./components/Table";
import Filters from "./components/Filters";

const CustomTable = ({
  titulo,
  columnas,
  filtro,
  query,
  acciones,
  boton = false,
  onBoton,
}) => {
  const [filas, setFilas] = useState(null);
  const [payLoad, setPayLoad] = useState(null);
  const handleFiltrosChange = (nuevasFilas, carga) => {
    setFilas(nuevasFilas);
    setPayLoad(carga);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-md p-4 space-y-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">{titulo}</h2>
          <Filters
            filtros={filtro}
            query={query}
            onFiltrosChange={handleFiltrosChange}
          />
        </div>
        {filas ? (
          <Table
            columnas={columnas}
            filas={filas.respuesta}
            acciones={acciones}
            boton={boton}
            onBoton={onBoton}
            payLoad={payLoad}
            url={query.url}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CustomTable;
