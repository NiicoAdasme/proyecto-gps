import React, { useState } from "react";
import { Columnas, Filters, Acciones } from "./helpers/tableHelper";
import { CustomModal, CustomTable } from "../../../components";
import ModalIncidenciaHelper from "./helpers/ModalIncidenciaHelper";
import { baseUrl } from "../../../queries/apisUrl";

function IncidenciasTecnico() {
  const [openModal, setOpenModal] = useState(false);
  const query = {
    url: baseUrl + "api/incidente/incidenciaTable",
    type: "post"
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
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
      >
        <ModalIncidenciaHelper />
      </CustomModal>
    </>
  );
}

export default IncidenciasTecnico;
