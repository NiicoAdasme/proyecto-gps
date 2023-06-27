import Swal from "sweetalert2";
import { setLoading } from "../queries/Loading/setLoading";
import { toast } from "react-toastify";

const masterQuery = async (
  url,
  params,
  metodo,
  mutation = true,
  hasToast = true,
  contentType = "application/json"
) => {
  setLoading(true);
  const token = localStorage.getItem("token");

  const requestOptions = {
    method: metodo,
    headers: {
      token: token,
      "Content-Type": contentType,
    },
  };

  if (metodo !== "get" && metodo !== "head") {
    requestOptions.body = JSON.stringify(params);
  }
  console.log(hasToast);
  if (mutation) {

    const response = await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(url)
        if (response.success.success) {
          setLoading(false);
          if (hasToast) {
            toast.success(response.success.mensaje, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
          return response.success;
        } else {
          setLoading(false);
          Swal.fire({
            title: "Error",
            text: response?.error?.mensaje ?? "",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        }
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
    return response;
  } else {
  }
};

export default masterQuery;
