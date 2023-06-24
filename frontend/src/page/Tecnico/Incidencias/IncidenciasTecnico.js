import React, { useState } from "react";
import { Columnas, Filters } from "./helpers/tableHelper";
import { CustomModal, CustomTable } from "../../../components";
import ModalCrearIncidenciaHelper from "./helpers/ModalCrearIncidenciaHelper";
import { baseUrl } from "../../../queries/apisUrl";

function IncidenciasTecnico() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalHijo, setOpenModalHijo] = useState(false);
  const query = {
    url: baseUrl + "api/incidente/incidenciaTable",
    type: "post",
  };

  const Acciones = [
    {
      id: 1,
      label: "Ver Detalle",
      onClick: (data) => {
        console.log(data);
      },
    },
    {
      id: 2,
      label: "Sub Ticket",
      onClick: () => {
        handleOpenModalHijo();
      },
    },
  ];

  const botones = [
    {
      title: "Guardar",
      onClick: () => {
        console.log("hola");
      },
    },
  ];

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const onCloseModalHijo = () => {
    setOpenModalHijo(!openModalHijo);
  };

  const handleOpenModalHijo = () => {
    setOpenModalHijo(true);
  };

  return (
    <>
      <CustomTable
        titulo={"Incidencias"}
        columnas={Columnas}
        filtro={Filters}
        query={query}
        acciones={Acciones}
        boton={true}
        onBoton={handleOpenModal}
      />
      <CustomModal
        isOpen={openModal}
        onClose={handleOpenModal}
        titulo={"Crear incidencia"}
        buttons={botones}
      >
        <ModalCrearIncidenciaHelper />
      </CustomModal>

      <CustomModal
        isOpen={openModalHijo}
        onClose={onCloseModalHijo}
        titulo={"Crear SubTicket"}
        buttons={botones}
      >
        <></>
      </CustomModal>
    </>
  );
}

export default IncidenciasTecnico;
