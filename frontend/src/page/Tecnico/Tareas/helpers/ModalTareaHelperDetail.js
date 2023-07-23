import React, { useEffect, useState } from "react";
import { CustomForm } from "../../../../components";
import { useMutation } from "react-query";
import masterQuery from "../../../../helpers/masterQuery";
import { baseUrl } from "../../../../queries/apisUrl";

const ModalTareaHelperDetail = () => {
  const [detail, setDetail] = useState(null)
  const queryDetail = useMutation((param) => {
    masterQuery(baseUrl + "api/tareas/tareaDetail", param, "post", true, false)
  })

  const cargarApi = async () => {
    const respuesta = await queryDetail.mutateAsync({id:1})
    setDetail(respuesta?.respuesta)
    console.log(respuesta?.respuesta);
  }

  useEffect( () => {
    cargarApi()
  }, [])

  //TODO:pasarlo por prop el id
  return (
    <>
        
    </>
  );
};

export default ModalTareaHelperDetail;
