import React, { useState } from "react";

const CustomForm = ({
  inputs,
  ingresar,
  onSubmit,
  textoIngresar = "Ingresar",
}) => {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (e, nombre) => {
    const { type, checked, value } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setInputValues({
      ...inputValues,
      [nombre]: inputValue,
    });
  };

  const renderInputs = () => {
    return inputs.map((input, index) => {
      if (input.tipo === "checkbox") {
        return (
          <div key={index}>
            {input.titulo ? (
              <h1 className="font-bold">{input.titulo}</h1>
            ) : (
              <></>
            )}
            <input
              type={input.tipo}
              name={input.nombre}
              checked={inputValues[input.nombre] || false}
              onChange={(e) => handleInputChange(e, input.nombre)}
              disabled={input?.disabled ? true : false}
              required={input?.required ? true : false}
            />
          </div>
        );
      } else if (input.tipo === "select") {
        return (
          <div key={index}>
            {input.titulo ? (
              <h1 className="font-bold">{input.titulo}</h1>
            ) : (
              <></>
            )}
            <select
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold w-full"
              name={input.nombre}
              onChange={(e) => handleInputChange(e, input.nombre)}
              disabled={input?.disabled ? true : false}
              required={input?.required ? true : false}
            >
              <option className="font-bold" value="">
                Seleccione una opción
              </option>
              {input.opciones.map((opcion, index) => (
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
          {input.titulo ? <h1 className="font-bold">{input.titulo}</h1> : <></>}
          <input
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold w-full"
            type={input.tipo}
            placeholder={input.placeholder}
            name={input.nombre}
            key={index}
            onChange={(e) => handleInputChange(e, input.nombre)}
            disabled={input?.disabled ? true : false}
            required={input?.required ? true : false}
          />
        </div>
      );
    });
  };

  return (
    <>
      <div className="space-y-3">
        {inputs ? renderInputs() : <></>}
        {ingresar ? (
          <button
            className="bg-paletaAzul3 hover:bg-paletaAzul3Hover text-white font-bold py-2 px-4 rounded-full w-full"
            onClick={() => {
              onSubmit(inputValues);
            }}
          >
            {textoIngresar}
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CustomForm;
