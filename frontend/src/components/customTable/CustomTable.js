import React from "react";

const CustomTable = ({ filas, columnas, filtros }) => {
  return (
    <>
      <table className="table-fixed">
        <thead>
          <tr>
            {columnas.map((columna) => {
              <th key={columna}>{columna}</th>;
            })}
          </tr>
        </thead>
      </table>
    </>
  );
};

export default CustomTable;
