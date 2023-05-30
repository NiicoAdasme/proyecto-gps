import React from "react";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/ui";
import AddIcon from "@mui/icons-material/Add";

export const AddNewFab = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(uiOpenModal());
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-paletaAzul3 hover:bg-paletaAzul2 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleClick}
      >
        <AddIcon />
      </button>
    </div>
  );
};
