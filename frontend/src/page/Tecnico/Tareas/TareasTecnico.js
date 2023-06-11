import React,{useState} from "react";
import { CustomModal } from "../../../components";

const TareasTecnico = () => {
  const [isModal, setisModal] = useState(false)
  const handleOpenModal = () => {
    setisModal(!isModal);
  };

  return (
    <>
      <button onClick={handleOpenModal}>prender</button>
      <CustomModal isOpen={isModal} onClose={handleOpenModal} children={<div>hola</div>} />
    </>
  );
};

export default TareasTecnico;
