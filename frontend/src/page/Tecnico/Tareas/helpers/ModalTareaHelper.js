import React from "react";
import { CustomForm } from "../../../../components";

const ModalTareaHelper = () => {
  const inputs = [
    {
        nombre: "usua_nombre",
        tipo: "text",
        titulo: "Titulo",
        placeholder: "Manuel",
      },
      {
        nombre: "usua_nombre",
        tipo: "text",
        titulo: "Descripción",
        placeholder: "Descripción",
      },
      {
        nombre: "usua_nombre",
        tipo: "date",
        titulo: "Fecha de Inicio"
      },
      {
        nombre: "usua_nombre",
        tipo: "date",
        titulo: "Fecha de Término"
      },
  ];

  return (
    <>
      <CustomForm inputs={inputs}/>
    </>
  );
};

export default ModalTareaHelper;
