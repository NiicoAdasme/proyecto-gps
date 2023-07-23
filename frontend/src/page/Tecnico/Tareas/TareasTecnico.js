import React, { useState } from "react";
import { baseUrl } from "../../../queries/apisUrl";
import { CustomModal, CustomTable } from "../../../components";
import { Columnas, Filters } from "./helpers/tableHelper";
import ModalTareaHelper from "./helpers/ModalTareaHelper";
import ModalTareaHelperDetail from "./helpers/ModalTareaHelperDetail";



const TareasTecnico = () => {
  const query = {
    url: baseUrl + "api/tareas/allTareas",
    type: "post"
  };
  const [openModal, setOpenModal] = useState(false);
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const botones = [
    {
      title : "Guardar",
      onClick : () => {
        console.log("Guardó");
      }
    }
  ]

   const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
   const handleOpenModalDetail = () => {
    setOpenModalDetail(!openModalDetail);
  };
 
  const Acciones = [
    { id: 1, label: "Ver Detalle", onClick : (data) => {setOpenModalDetail(true)}},
    { id: 2, label: "Sub Ticket" },
  ];
  return (
    <>
      
      <CustomTable
        titulo={"Tareas"}
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
        titulo={"Crear Tarea"}
        buttons={botones}
      >
        <ModalTareaHelper />
      </CustomModal>

      <CustomModal
        isOpen={openModalDetail}
        onClose={handleOpenModalDetail}
        titulo={"Detalle tarea"}
        buttons={botones}
      >
        <ModalTareaHelperDetail />
      </CustomModal>

    </>
  );
};

export default TareasTecnico;
