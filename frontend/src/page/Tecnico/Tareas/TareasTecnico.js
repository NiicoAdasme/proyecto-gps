import React, { useState } from "react";
import axios from 'axios';
import { CustomModal } from "../../../components";

const TareasTecnico = () => {
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

    try {
      axios.post('http://127.0.0.1:8000/api/tareas/createTarea', data)
        .then(response => {
          // Aquí puedes manejar la respuesta de la API
          console.log(response.data);
        })
        .catch(error => {
          // Aquí puedes manejar el error en caso de fallo en la solicitud
          console.error('Error:', error);
        });
      // Restablecer los valores del formulario
      setTareaDescripcion('');
      setFechaInicio('');
      setFechaFin('');
      // Restablecer el estado del modal
      handleOpenModal();
    } catch (error) {
      console.error('Error al crear la tarea:', error);
    }
  };
  const handleOpenModal = () => {
    setisModal(!isModal);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Agregar</button>
      <CustomModal isOpen={isModal} onClose={handleOpenModal} children={<form onSubmit={handleSubmit}>
        <label>
          Titulo:
          <input
            type="text"
            value={tareaTitulo}
            onChange={(e) => setTareaTitulo(e.target.value)}
          />
        </label>
        <br />
        <label>
          Descripción:
          <input
            type="text"
            value={tareaDescripcion}
            onChange={(e) => setTareaDescripcion(e.target.value)}
          />
        </label>
        <br />
        <label>
          Fecha de inicio:
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
        </label>
        <br />
        <label>
          Fecha de fin:
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
        </label>
        <br />
        {/* Agrega más campos del formulario */}
        <button type="submit">Crear Tarea</button>
      </form>} />
    </>
  );
};

export default TareasTecnico;
