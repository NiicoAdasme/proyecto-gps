import React, { useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import Actions from "./Actions";
import Enumerador from "./Enumerador";
const Table = ({ columnas, filas, acciones, boton = true, onBoton }) => {
  const columns = useMemo(() => columnas, []);
  const data = useMemo(() => filas.data, []);
  const actions = useMemo(() => acciones, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    prepareRow,
    pageOptions,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;
  return (
    <>
      <div className="overflow-x-auto space-y-6">
        <div className="flex justify-between">
          <select
            className="border border-gray-300 rounded-md px-4 py-2 font-bold"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[5, 10, 25].map((pageSize) => (
              <option className="font-bold" key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </select>
          {boton ? (
            <button
              className="bg-paletaAzul3 text-white font-bold py-2 px-4 rounded-full"
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
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="px-6 py-3 bg-paletaAzul3 text-left text-xs font-bold text-white uppercase tracking-wider shadow-md"
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
                ;
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
                  {row.cells.map((cell) => {
                    return (
                      <td
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
      <Enumerador data={filas} />
    </>
  );
};

export default Table;
