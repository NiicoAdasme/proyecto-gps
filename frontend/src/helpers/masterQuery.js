import Swal from "sweetalert2";
import { setLoading } from "../queries/Loading/setLoading";
import { toast } from "react-toastify";

const masterQuery = async (
  url,
  params,
  metodo,
  mutation = true,
  contentType = "application/json"
) => {
  setLoading(true);
  const token = localStorage.getItem("token");
  if (mutation) {
    const response = await fetch(url, {
      method: metodo,
      headers: {
        token: token,
        "Content-Type": contentType,
      },
      body: JSON.stringify(params),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success.success) {
          setLoading(false);
          //TODO arreglar toast
          toast.success("Success Notification !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          return response;
        }
        setLoading(false);
        Swal.fire({
          title: "Error",
          text: response?.error?.mensaje ?? "",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          title: "Error",
          text: error?.message ?? "",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      });
  } else {
  }
};

export default masterQuery;
