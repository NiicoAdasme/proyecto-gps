import React, { useState } from "react";
import { useMutation } from "react-query";
import masterQuery from "../../../helpers/masterQuery";

const Filters = ({ filtros, query, onFiltrosChange }) => {
  const [inputValues, setInputValues] = useState({perPage:5});
  const queryRequest = useMutation((params) =>
    masterQuery(query.url, params, query.type)
  );

  const handleFiltro = async () => {
    const response = await queryRequest.mutateAsync(inputValues);
    if (response.success) {
      onFiltrosChange(response);
    }
  };

  const handleInputChange = (e, nombre) => {
    const { type, checked, value } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setInputValues({
      ...inputValues,
      [nombre]: inputValue,
    });
  };

  const renderInputs = () => {
    return filtros.map((filtro, index) => {
      if (filtro.tipo === "checkbox") {
        return (
          <div key={index}>
            {filtro.titulo ? (
              <h1 className="font-bold">{filtro.titulo}</h1>
            ) : (
              <></>
            )}
            <input
              type={filtro.tipo}
              name={filtro.nombre}
              checked={inputValues[filtro.nombre] || false}
              onChange={(e) => handleInputChange(e, filtro.nombre)}
            />
          </div>
        );
      } else if (filtro.tipo === "select") {
        return (
          <div key={index}>
            {filtro.titulo ? (
              <h1 className="font-bold">{filtro.titulo}</h1>
            ) : (
              <></>
            )}
            <select
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
              name={filtro.nombre}
              onChange={(e) => handleInputChange(e, filtro.nombre)}
            >
              <option className="font-bold" value="">
                Seleccione una opción
              </option>
              {filtro.opciones.map((opcion, index) => (
                <option key={index} className="font-bold" value={opcion.id}>
                  {opcion.label}
                </option>
              ))}
            </select>
          </div>
        );
      }

      return (
        <div key={index}>
          {filtro.titulo ? (
            <h1 className="font-bold">{filtro.titulo}</h1>
          ) : (
            <></>
          )}
          <input
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
            type={filtro.tipo}
            placeholder={filtro.placeholder}
            name={filtro.nombre}
            key={index}
            onChange={(e) => handleInputChange(e, filtro.nombre)}
          />
        </div>
      );
    });
  };

  return (
    <>
      {filtros ? (
        <div className="max-md:space-y-6">
          <div className="max-md:space-y-2 md:flex md:space-x-12">
            {renderInputs()}
          </div>

          <div className="flex md:justify-end space-x-4 my-2">
            <button
              className="bg-paletaAzul3  text-white rounded-full px-4 py-2 float-right font-bold"
              onClick={handleFiltro}
            >
              Filtrar
            </button>
            <button
              className="bg-paletaAzul3  text-white rounded-full px-4 py-2 float-right font-bold"
              onClick={() => setInputValues(null)}
            >
              Limpiar
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Filters;
