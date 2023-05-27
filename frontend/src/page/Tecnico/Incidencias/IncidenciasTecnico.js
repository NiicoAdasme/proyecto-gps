import React,{useState} from "react";
import { Columnas,Filters} from "./helpers/tableHelper";
import { CustomModal, CustomTable } from "../../../components";
import ModalIncidenciaHelper from "./helpers/ModalIncidenciaHelper";


function IncidenciasTecnico() {

  const queryUrl = { url: "http://127.0.0.1:8000/api/usuarios/datosUsuario" };
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <CustomTable
        titulo={"Incidencias"}
        columnas={Columnas}
        filtro={Filters}
        query={queryUrl}
        boton={true}
        onBoton={handleOpenModal}
      />
      <CustomModal isOpen={openModal} onClose={handleOpenModal} titulo={"Crear incidencia"} children={<ModalIncidenciaHelper/>} />
    </>
  );
}

export default IncidenciasTecnico;
