import React, { useState, useEffect, useRef } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Actions = ({ acciones }) => {
  const [isOpen, setIsOpen] = useState(false);
  const actionsRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (actionsRef.current && !actionsRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    console.log(acciones);

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {acciones !== false && (
        <div className="relative inline-block" ref={actionsRef}>
          <button onClick={toggleDropdown}>
            <MoreVertIcon />
          </button>

          {isOpen ? (
            <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded shadow-lg">
              {acciones.map((accion, index) => (
                <button
                  key={index}
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left"
                  onClick={closeDropdown}
                >
                  {accion.label}
                </button>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};

export default Actions;
