import React, { useMemo, useState, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import Actions from "./Actions";
import Enumerador from "./Enumerador";
import { useMutation } from "react-query";
import masterQuery from "../../../helpers/masterQuery";

const Table = ({
  columnas,
  filas,
  acciones,
  payLoad,
  url,
  boton,
  onBoton,
}) => {
  const columns = useMemo(() => columnas, []);
  const [data, setData] = useState(filas.data);
  const [newFilas, setNewFilas] = useState(filas)
  const actions = useMemo(() => acciones, []);
  const [params, setParams] = useState(payLoad);
  const refreshQuery = useMutation((params) =>
    masterQuery(url, params, "post")
  );

  useEffect(() => {
    setParams(payLoad);
  }, [payLoad]);

  useEffect(() => {
    setData(filas.data);
    setNewFilas(filas);
  }, [filas]);

  const recarga = async (params) => {
    const response = await refreshQuery.mutateAsync(params);
    if (response.success) {
      setData(response.respuesta.data);
      setNewFilas(response.respuesta);
    }
  };

  const handlePageChange = (page) => {
    const pivote = { ...params, ["page"]: page };
    setParams({
      ...params,
      ["page"]: page,
    });
    recarga(pivote);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  return (
    <>
      <div className="overflow-x-auto space-y-6">
        <div className="flex justify-between">
          {/* <select
            className="border border-gray-300 rounded-md px-4 py-2 font-bold"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[5, 10, 25].map((pageSize) => (
              <option className="font-bold" key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </select> */}
          {boton ? (
            <button
              className="bg-paletaAzul3 hover:bg-paletaAzul3Hover text-white font-bold py-2 px-4 rounded-full"
              onClick={onBoton}
            >
              +
            </button>
          ) : (
            <></>
          )}
        </div>
        <table
          className="min-w-full divide-y divide-gray-200"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup,index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column,index) => (
                  <th
                  key={index}
                    className="px-6 py-3 bg-paletaAzul3 text-left text-xs font-bold text-white uppercase tracking-wider shadow-md"
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            className="bg-white divide-y divide-gray-200"
            {...getTableBodyProps()}
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.original.id} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                      key={index}
                        className="px-6 py-4 whitespace-nowrap text-sm text-black font-bold"
                        {...cell.getCellProps()}
                      >
                        {cell.column.id === "acciones" ? (
                          <Actions
                            acciones={actions}
                            idFila={row.original?.id}
                          />
                        ) : (
                          cell.render("Cell")
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Enumerador data={newFilas} handlePageChange={handlePageChange} />
    </>
  );
};

export default Table;
