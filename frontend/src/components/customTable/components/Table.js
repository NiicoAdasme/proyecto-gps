import React, { useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import { GlobalFilter } from "./Filters";
const Table = ({ columnas, filas, acciones }) => {
  const columns = useMemo(() => columnas, []);
  const data = useMemo(() => filas, []);

  const [visibleActions, setVisibleActions] = useState(false);

  const handleOpcionClick = () => {
    setVisibleActions(!visibleActions);
  };

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

  console.log(state);

  const { pageIndex, pageSize } = state;

  return (
    <>
      <div className="overflow-x-auto space-y-6">
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
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                  {acciones ? (
                    <td>
                      <button
                        onClick={handleOpcionClick}
                        className="py-2 px-4 rounded-md font-bold bg-gray-200 hover:bg-gray-300"
                      >
                        Opciones
                      </button>
                      {visibleActions && (
                        <div className="mt-2">
                          {acciones.map((accion) => {
                            <button key={accion.id} className="py-2 px-4">
                              {accion.label}
                            </button>;
                          })}
                          ;
                        </div>
                      )}
                    </td>
                  ) : (
                    <></>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div >
          <div className="flex justify-center list-none space-x-2">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"<<"}
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Atras{" "}
            </button>

            <button
              className="max-md:hidden px-4 py-2 bg-gray-300 text-gray-600 rounded-md"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {pageIndex != 0 ? (pageIndex != pageOptions.length ? pageIndex : pageIndex - 2): pageIndex + 1}
            </button>
            <button
              className="max-md:hidden px-4 py-2 bg-gray-300 text-gray-600 rounded-md"
              onClick={() => previousPage()}
            >
              {pageIndex != 0 ? (pageIndex != pageOptions.length ? pageIndex + 1: pageIndex - 1): pageIndex + 2}
            </button>
            <button
              className="max-md:hidden px-4 py-2 bg-gray-300 text-gray-600 rounded-md"
              onClick={() => previousPage()}
              disabled={!canNextPage}
            >
              {pageIndex != 0 ? (pageIndex != pageOptions.length ? pageIndex - 1: pageIndex - 2): pageIndex + 3}
            </button>

            <button
              className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Siguiete
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
          <span className="items-center flex justify-center px-4 py-2 text-gray-600 rounded-md">
            <strong>
              {pageIndex + 1} de {pageOptions.length}
            </strong>{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Table;
