import React, { useState } from "react";
import { Columnas, Filters } from "./helpers/tableHelper";
import { CustomModal, CustomTable } from "../../../components";
import ModalCrearIncidenciaHelper from "./helpers/ModalCrearIncidenciaHelper";
import { queriesUrl } from "./queries/apisUrl";
import ModalVerDetalleHelper from "./helpers/ModalVerDetalleHelper";

function IncidenciasTecnico() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalHijo, setOpenModalHijo] = useState(false);
  const [openDetalle, setOpenDetalle] = useState(false);
  const [dataDetalle, setDataDetalle] = useState(null);

  const Acciones = [
    {
      id: 1,
      label: "Ver Detalle",
      onClick: (data) => {
        setDataDetalle(data);
        setOpenDetalle(true);
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

  const onCloseModalDetalle = () => {
    setOpenDetalle(!openDetalle);
  };

  return (
    <>
      <CustomTable
        titulo={"Incidencias"}
        columnas={Columnas}
        filtro={Filters}
        query={queriesUrl.incidenciasTable}
        acciones={Acciones}
        boton={true}
        onBoton={handleOpenModal}
      />
      <CustomModal
        isOpen={openModal}
        onClose={handleOpenModal}
        titulo={"Crear incidencia"}
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

      <CustomModal
        isOpen={openDetalle}
        onClose={onCloseModalDetalle}
        titulo={"Detalle Incidencia"}
      >
        <ModalVerDetalleHelper dataDetalle={dataDetalle}/>
      </CustomModal>
    </>
  );
}

export default IncidenciasTecnico;
