import React, { useEffect, useState } from "react";

import { baseUrl } from "../../../../queries/apisUrl";
import masterQuery from "../../../../helpers/masterQuery";



const ModalTareaHelperDetail = () => {
  const [detalle, setDetalle] = useState(null);
  const [id, setId] = useState(1);
  const cargarData = async () => {
    try {
      const respuesta = await masterQuery(baseUrl + "api/tareas/tareaDetail", { id: 1 }, "post", true, false);
      if (respuesta && respuesta.respuesta) {
        setDetalle(respuesta.respuesta);
      } 
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  };
  const getEstadoInfo = (estadoTexto) => {
    switch (estadoTexto.toLowerCase()) {
      case 'en proceso':
        return { text: 'En proceso', colorClass: 'text-orange-500' };
      case 'procesado':
        return { text: 'Procesado', colorClass: 'text-green-500' };
      case 'falló el proceso':
        return { text: 'Falló el proceso', colorClass: 'text-red-600' };
      default:
        return { text: 'Desconocido', colorClass: 'text-dark' };
    }
  };
  useEffect(() => {
    cargarData();
  }, [id]);
  //TODO:pasarlo por prop el id
  return (
    <>
      {detalle && (
        <>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md space-y-2 py-2">
              <div>
                <p className="font-bold ml-3">Estado: <span className={`font-bold ml-4 ${getEstadoInfo(detalle.estado).colorClass}`}>
                  {getEstadoInfo(detalle.estado).text}
                </span></p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md space-y-2 py-2">
            <p className="font-bold ml-3 ">Responsable/s: <span className="font-bold ml-4"> {detalle.usuario} </span> </p>
            </div>
            <div className="bg-white rounded-lg shadow-md space-y-2 py-2">
            <p className="font-bold ml-3">Area Planta: <span className="font-bold ml-4">{detalle.areaPlanta}</span></p>
            </div>
            <div className="bg-white rounded-lg shadow-md space-y-2 py-2">
            <p className="font-bold ml-3">Fecha Inicio: <span className="font-bold ml-4 text-blue-600">{detalle.fechaInicio}</span></p>
            </div>
            <div className="bg-white rounded-lg shadow-md space-y-2 py-2">
            <p className="font-bold ml-3">Tiempo Requerido: <span className="font-bold ml-4">{detalle.fechaFin}</span></p>
            </div>
            <div className="bg-white rounded-lg shadow-md space-y-2 py-2">
            <p className="font-bold ml-3">Observaciones: <span className="font-bold ml-4 ">{detalle.descripcion}</span></p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalTareaHelperDetail;
