import React from "react";

const Enumerador = (data) => {
  const options = data.data.links;
  /*  options.shift();
  options.pop(); */
  console.log("hola");
  console.log(options);

  const drawOptions = () => {
    
  }
  const gotoPage = (page) => {
    console.log(page);
  };
  console.log(data.data);
  return (
    <>
      <div>
        <div className="flex justify-center list-none space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md font-bold"
            onClick={() => gotoPage(0)}
            disabled={data.data.prev_page_url ? false : true}
          >
            {"<<"}
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md font-bold"
            disabled={data.data.prev_page_url ? false : true}
          >
            Atras{" "}
          </button>
          {options.map((option) => {
            return (
              <button className="max-md:hidden px-4 py-2 bg-gray-300 text-gray-600 rounded-md font-bold">
                {option.label}
              </button>
            );
          })}

          <button
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md font-bold"
            disabled={data.data.next_page_url ? false : true}
          >
            Siguiete
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md font-bold"
            disabled={data.data.next_page_url ? false : true}
          >
            {">>"}
          </button>
        </div>
        <span className="items-center flex justify-center px-4 py-2 text-gray-600 rounded-md font-bold">
          <strong>
            {data.data.current_page + " de " + data.data.last_page}
          </strong>{" "}
        </span>
      </div>
    </>
  );
};

export default Enumerador;
