import React from "react";
import { CustomForm } from "../../../../components";

const ModalIncidenciaHelper = () => {
  const inputs = [
    {
      nombre: "usua_nombre",
      tipo: "select",
      titulo: "Nombre",
      placeholder: "Manuel",
      opciones: [{ id: 1, label: "opcion1" }],
    },
    {
        nombre: "usua_nombre",
        tipo: "text",
        titulo: "Nombre",
        placeholder: "Manuel",
      },
  ];

  return (
    <>
      <CustomForm inputs={inputs}/>
    </>
  );
};

export default ModalIncidenciaHelper;
