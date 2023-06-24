import React from "react";

const CustomModal = ({
  isOpen = false,
  onClose,
  titulo,
  children,
  buttons,
}) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;
  console.log(titulo);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="md:w-1/2 mx-auto bg-white rounded shadow-md">
        <div className="px-4 py-2 bg-paletaAzul3 text-white font-bold">
          {titulo}
        </div>
        <div className="px-4 py-6 bg-white">{children}</div>

        <div className="flex justify-end px-4 py-2 space-x-1">
          {buttons ? (
            buttons.map((item, index) => {
              return (
                <button
                  key={index}
                  className="mt-4 bg-paletaAzul3 hover:bg-paletaAzul3Hover text-white font-bold py-2 px-4 rounded-full"
                  onClick={item.onClick}
                >
                  {item.title}
                </button>
              );
            })
          ) : (
            <></>
          )}

          <button
            className="mt-4 bg-paletaAzul3 hover:bg-paletaAzul3Hover text-white font-bold py-2 px-4 rounded-full"
            onClick={onClose}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
export default CustomModal;
