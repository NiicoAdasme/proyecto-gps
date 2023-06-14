import React, { useState, useEffect, useRef, forwardRef } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Transition } from "@headlessui/react";

const Dropdown = forwardRef((props, ref) => (
  <div
    ref={ref}
    className="absolute right-0 mt-2 py-2 w-32 bg-white rounded shadow-lg z-50 transparent"
  >
    {props.acciones.map((accion, index) => (
      <button
        key={index}
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left"
        onClick={() => props.handleActionClick(accion)}
      >
        {accion.label}
      </button>
    ))}
  </div>
));

const Actions = ({ acciones, idFila }) => {
  const [isOpen, setIsOpen] = useState(false);
  const actionsRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleActionClick = (accion) => {
    if (accion.onClick) {
      accion.onClick(idFila);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (actionsRef.current && !actionsRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {acciones !== false && (
        <div className="absolute inline-block" ref={actionsRef}>
          <button onClick={toggleDropdown}>
            <MoreVertIcon />
          </button>

          <Transition
            show={isOpen}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dropdown acciones={acciones} handleActionClick={handleActionClick}/>
          </Transition>
        </div>
      )}
    </>
  );
};

export default Actions;