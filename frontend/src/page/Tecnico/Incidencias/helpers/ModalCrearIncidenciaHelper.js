import React, { useEffect, useState } from "react";
import { CustomForm } from "../../../../components";
import { Inputs } from "./formCrearIncidenciaHelper";
import { useMutation } from "react-query";
import masterQuery from "../../../../helpers/masterQuery";
import { queriesUrl } from "../queries/apisUrl";

const ModalCrearIncidenciaHelper = () => {
  
  const queryTurnos = useMutation((data) =>
    masterQuery(
      queriesUrl.turnosSelect.url,
      data,
      queriesUrl.turnosSelect.type,
      true,
      false
    )
  );
  const queryAreaPlanta = useMutation((data) =>
    masterQuery(
      queriesUrl.areaPlantaSelect.url,
      data,
      queriesUrl.areaPlantaSelect.type,
      true,
      false
    )
  );
  const queryDepartamento = useMutation((data) =>
    masterQuery(
      queriesUrl.departamentoSelect.url,
      data,
      queriesUrl.departamentoSelect.type,
      true,
      false
    )
  );
  const queryCrearIncidente = useMutation((data) =>
    masterQuery(
      queriesUrl.crearIncidencia.url,
      data,
      queriesUrl.crearIncidencia.type
    )
  );
  const [turnosSelect, setTurnosSelect] = useState(null);
  const [departamentoSelect, setDepartamentoSelect] = useState(null);
  const [areaPlantaSelect, setAreaPlantaSelect] = useState(null);

  const cargarApis = async () => {
    const respuestaTurnos = await queryTurnos.mutateAsync();
    const respuestaAreaPlanta = await queryAreaPlanta.mutateAsync();
    const respuestaDepartamento = await queryDepartamento.mutateAsync();
    setTurnosSelect(respuestaTurnos.respuesta);
    setDepartamentoSelect(respuestaDepartamento.respuesta);
    setAreaPlantaSelect(respuestaAreaPlanta.respuesta);
  };

  const getCampos = () => {
    const campos = Inputs(turnosSelect, departamentoSelect, areaPlantaSelect);
    return campos;
  };

  useEffect(() => {
    cargarApis();
  }, []);

  const onSubmit = async (data) => {
    data["incidencia_padre_id"] = null;
    await queryCrearIncidente.mutateAsync(data);
  };

  return (
    <>
      {turnosSelect ? (
        <CustomForm inputs={getCampos()} ingresar={true} onSubmit={onSubmit} />
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalCrearIncidenciaHelper;
