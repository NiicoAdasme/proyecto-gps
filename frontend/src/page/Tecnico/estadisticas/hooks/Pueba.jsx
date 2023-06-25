import React from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import masterQuery from "../../../../helpers/masterQuery";

const urla = "http://127.0.0.1:8000/api/estadistica/incidenciasSemanal";
const query = { url: urla, metodo: "GET" };

function Pueba() {
  // const {
  //   data: semanalMensual,
  //   isLoading,
  //   isError,
  // } = useMutation((params) =>
  //   masterQuery(query.url, params, query.type)
  // );

  const refreshQuery = masterQuery(query.url, query.metodo);
  console.log(query.url);

  // console.log(semanalMensual);
  // console.log(isLoading);
  // console.log(isError);
  
  return <div>Pueba</div>;
}

export default Pueba;
