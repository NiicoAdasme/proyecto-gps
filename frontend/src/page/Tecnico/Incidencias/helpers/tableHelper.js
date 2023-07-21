const Columnas = [
  {
    Header: "Área planta",
    accessor: "areaPlanta",
  },
  {
    Header: "Turno",
    accessor: "turno",
  },
  {
    Header: "Usuario",
    accessor: "usuario",
  },
  {
    Header: "Departamento",
    accessor: "departamento",
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
    nombre: "esta_id",
    tipo: "select",
    titulo: "Estado",
    placeholder: "Procesado",
    opciones: [{ id: 1, label: "opcion1" }],
  },
  {
    nombre: "usua_fecha",
    tipo: "checkbox",
    titulo: "Fecha Nacimiento",
  },
  {
    nombre: "turn_id",
    tipo: "date",
    titulo: "Fecha creación"
  }
];

const Acciones = [
  { id: 1, label: "Ver Detalle", onClick : (data) => {console.log(data)}},
  { id: 2, label: "Sub Ticket" },
];

export { Columnas, Filters, Acciones };
