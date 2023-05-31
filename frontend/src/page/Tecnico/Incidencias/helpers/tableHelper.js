const Columnas = [
  {
    Header: "Nombre",
    accessor: "usua_nombre",
  },
  {
    Header: "Apellido",
    accessor: "usua_apellido_p",
  },
  {
    Header: "Correo",
    accessor: "usua_correo",
  },
  {
    Header: "Rut",
    accessor: "usua_rut",
  },
  {
    Header: "Acciones",
    accessor: "acciones"
  }
];

const Filters = [
  {
    nombre: "usua_nombre",
    tipo: "select",
    titulo: "Nombre",
    placeholder: "Manuel",
    opciones: [{ id: 1, label: "opcion1" }],
  },
  {
    nombre: "usua_fecha",
    tipo: "checkbox",
    titulo: "Fecha Nacimiento",
  }
];

export { Columnas, Filters};
