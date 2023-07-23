const Columnas = [
  {
    Header: "Título",
    accessor: "titulo",
  },
  {
    Header: "Fecha inicio",
    accessor: "fechaInicio",
  },
  {
    Header: "Responsable",
    accessor: "usuario",
  },
  {
    Header: "Estado",
    accessor: "estado",
  },
  {
    Header: "Acciones",
    accessor: "acciones",
  },
];

const Filters = [
  {
    nombre: "estado",
    tipo: "select",
    titulo: "Estado",
    placeholder: "Procesado",
    opciones: [{ id: 1, label: "opcion1" }],
  },
  {
    nombre: "fechaInicio",
    tipo: "date",
    titulo: "Fecha de inicio"
  }
];



export { Columnas, Filters };
