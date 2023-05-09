import React, { useState } from "react";
import { Bars } from "react-loader-spinner";
import Table from "./components/Table";
import Filters from "./components/Filters";

const CustomTable = ({ titulo, columnas, filtro, query }) => {
  const [filas, setFilas] = useState(null);
  const handleFiltrosChange = (nuevasFilas) => {
    setFilas(nuevasFilas);
  };
  const acciones = [{ id: 1, label: "Ver Detalle" }];

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
        {filas ? <Table columnas={columnas} filas={filas.respuesta} /> : <></>}
      </div>
    </>
  );
};

export default CustomTable;
