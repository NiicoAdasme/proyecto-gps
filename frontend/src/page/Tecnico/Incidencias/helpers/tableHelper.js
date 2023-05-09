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
  }
];

const Filters = [
  {
    nombre: "usua_nombre",
    tipo: "text",
    titulo: "Nombre",
    placeholder: "Manuel",
  }
];

export { Columnas, Filters };
