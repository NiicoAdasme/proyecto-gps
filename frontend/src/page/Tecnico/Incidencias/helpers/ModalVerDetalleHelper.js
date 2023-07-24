import React, { useEffect, useState } from "react";
import { queriesUrl } from "../queries/apisUrl";
import { useMutation } from "react-query";
import masterQuery from "../../../../helpers/masterQuery";

const ModalVerDetalleHelper = ({ dataDetalle }) => {
  const [detalle, setDetalle] = useState(null);
  const queryDetalle = useMutation((data) =>
    masterQuery(
      queriesUrl.detalleIncidente.url,
      data,
      queriesUrl.detalleIncidente.type,
      true,
      false
    )
  );

  useEffect(() => {
    cargarData();
  }, []);

  const cargarData = async () => {
    const respuesta = await queryDetalle.mutateAsync({ id: dataDetalle });
    setDetalle(respuesta.respuesta);
  };

  return (
    <>
      {detalle ? (
        <>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md space-y-2 py-2">
              <h1 className="font-bold text-center text-green-500">
                Datos del Usuario Creador
              </h1>
              <span className="font-bold block  ml-4">
                Nombre:{" "}
                {detalle.usuario.usua_nombre +
                  " " +
                  detalle.usuario.usua_apellido_p +
                  " " +
                  detalle.usuario.usua_apellido_m}
              </span>
              <span className="font-bold block ml-4">
                Rut: {detalle.usuario.usua_rut}
              </span>
              <span className="font-bold block ml-4">
                Correo: {detalle.usuario.usua_correo}
              </span>
            </div>
            <div className="bg-white rounded-lg shadow-md space-y-2 py-2">
              <h1 className="font-bold text-center text-green-500">
                Datos de la incidencia
              </h1>
              <span className="font-bold block ml-4">
                Observación: {detalle.inci_observacion}
              </span>
              <span className="font-bold block ml-4">
                Estado: {detalle.estado.esta_nombre}
              </span>
              <span className="font-bold block ml-4">
                Turno: {detalle.turno.turn_nombre}
              </span>
              <span className="font-bold block ml-4">
                Departamento: {detalle.departamento.depa_nombre}
              </span>
              <span className="font-bold block ml-4">
                Area planta: {detalle.area_planta.arpl_nombre}
              </span>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalVerDetalleHelper;
