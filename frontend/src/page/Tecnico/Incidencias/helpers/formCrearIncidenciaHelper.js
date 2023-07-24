const Inputs = (turnos, departamentos, areaPlanta) => {
  return [
    {
      nombre: "turn_id",
      tipo: "select",
      titulo: "Turno",
      placeholder: "Manuel",
      opciones: turnos,
    },
    {
      nombre: "depa_id",
      tipo: "select",
      titulo: "Departamento",
      placeholder: "Manuel",
      opciones: departamentos,
    },
    {
      nombre: "arpl_id",
      tipo: "select",
      titulo: "Area planta",
      placeholder: "Manuel",
      opciones: areaPlanta,
    },
    {
      nombre: "inci_observacion",
      tipo: "text",
      titulo: "Observación",
      placeholder: "Introduzca cualquier observación",
    },
  ];
};

export { Inputs };
