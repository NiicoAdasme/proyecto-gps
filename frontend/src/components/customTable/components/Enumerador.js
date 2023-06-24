import { forEach } from "lodash";
import React, { useEffect, useState } from "react";

const Enumerador = ({ data, handlePageChange }) => {
  const [newData, setNewData] = useState(data);
  const [options, setOptions] = useState(data.links);

  useEffect(() => {
    setNewData(data);
    setOptions(newOptions(data.links, data.current_page - 1));
  }, [data]);

  const newOptions = (links, index) => {
    let newOption = [];
    links = links.filter((link) => {
      return !isNaN(link.label);
    });

    let left = 0;
    let right = 0;
    if (links.length <= 4) {
      return links;
    } else {
      if (links[index - 1]) left++;
      else if (links[index + 1]) right++;

      if (links[index + right + 1]) right++;
      else if (links[index - left - 1]) left++;

      if (links[index + right + 1]) right++;
      else if (links[index - left - 1]) left++;
    }

    newOption = links.slice(index - left, index + right + 1);

    return newOption;
  };

  const gotoPage = (page) => {
    handlePageChange(page);
  };
  return (
    <>
      <div>
        <div className="flex justify-center list-none space-x-2">
          <button
            className={`px-4 py-2 text-white rounded-md font-bold ${
              !newData.prev_page_url ? "bg-gray-600" : "bg-paletaAzul3"
            }`}
            onClick={() => gotoPage(1)}
            disabled={newData.prev_page_url ? false : true}
          >
            {"<<"}
          </button>
          <button
            className={`px-4 py-2 text-white rounded-md font-bold ${
              !newData.prev_page_url ? "bg-gray-600" : "bg-paletaAzul3"
            }`}
            onClick={() => gotoPage(newData.current_page - 1)}
            disabled={newData.prev_page_url ? false : true}
          >
            Atrás{" "}
          </button>
          {options.map((option, index) => {
            return !isNaN(option.label) ? (
              <button
                key={index}
                onClick={() => gotoPage(option.label)}
                className={`max-md:hidden px-4 py-2 text-white rounded-md font-bold ${
                  option.active ? "bg-paginationSelected" : "bg-paletaAzul3"
                }`}
              >
                {option.label}
              </button>
            ) : (
              null
            );
          })}

          <button
            className={`px-4 py-2 text-white rounded-md font-bold ${
              !newData.next_page_url ? "bg-gray-600" : "bg-paletaAzul3"
            }`}
            onClick={() => gotoPage(newData.current_page + 1)}
            disabled={newData.next_page_url ? false : true}
          >
            Siguiete
          </button>
          <button
            className={`px-4 py-2 text-white rounded-md font-bold ${
              !newData.next_page_url ? "bg-gray-600" : "bg-paletaAzul3"
            }`}
            onClick={() => gotoPage(newData.last_page)}
            disabled={newData.next_page_url ? false : true}
          >
            {">>"}
          </button>
        </div>
        <span className="items-center flex justify-center px-4 py-2 text-gray-600 rounded-md font-bold">
          <strong>{newData.current_page + " de " + newData.last_page}</strong>{" "}
        </span>
      </div>
    </>
  );
};

export default Enumerador;
