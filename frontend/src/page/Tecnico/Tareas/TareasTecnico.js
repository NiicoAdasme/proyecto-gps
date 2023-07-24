import React, { useState } from "react";
import ModalTareaHelper from "./helpers/ModalTareaHelper";
import { Columnas, Filters } from "./helpers/tableHelper";
import { CustomModal, CustomTable } from "../../../components";
import { baseUrl } from "../../../queries/apisUrl";
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
  const [isModal, setisModal] = useState(false)
  const [tareaTitulo, setTareaTitulo] = useState('');
  const [tareaDescripcion, setTareaDescripcion] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      tare_titulo: tareaTitulo,
      tare_descripcion: tareaDescripcion,
      tare_fecha_inicio: fechaInicio,
      tare_fecha_fin: fechaFin,
      tare_color: "#0000",
      usua_id: 1,
      esta_id: 1,
      arpl_id: 1,
      depa_id: 1
    };

 
  };
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
      {/* <CustomForm inputs={formInputs} /> */}
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
      <button onClick={handleOpenModal}>Agregar</button>

    </>
  );
};

export default TareasTecnico;
