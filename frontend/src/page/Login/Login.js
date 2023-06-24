import React, { useState } from "react";
import loginCamanchaca from "../../commons/images/Fondo_loginCamanchaca.jpg";
import { useMutation } from "react-query";
import masterQuery from "../../helpers/masterQuery";
import { useDispatch } from "react-redux";
import { loginUser } from "../../reducers/loginReducer";


const Login = () => {
  const dispatch = useDispatch();

  const url = "http://127.0.0.1:8000/api/login/login";
  const [inputs, setInputs] = useState({});
  const queryLogin = useMutation((params) => masterQuery(url, params, "post"));

  const actualizarValores = (e, nombre) => {
    setInputs({
      ...inputs,
      [nombre]: e.target.value,
    });
  };

  const handleFiltro = async (e) => {
    const respuesta = await queryLogin.mutateAsync(inputs);
    console.log(respuesta);
    dispatch(loginUser(respuesta));
  };

  return (
    <>
      <div className="md:hidden bg-paletaAzul1 min-h-screen justify-center flex place-items-center">
        <div className="bg-gray-100 p-8 rounded shadow-md space-y-8 text-center">
          <h1 className="font-bold px-14">Login - Camanchaca</h1>
          <div className="space-y-3">
            <input
              type="email"
              className="border rounded-md px-4 py-2 focus:outline-none font-bold bg-gray-100 focus:bg-white w-full"
              name="correo"
              placeholder="Correo*"
              onChange={(e) => actualizarValores(e, "usua_correo")}
            />
            <input
              type="password"
              className="border rounded-md px-4 py-2 focus:outline-none font-bold bg-gray-100 focus:bg-white w-full"
              name="correo"
              placeholder="Contraseña*"
              onChange={(e) => actualizarValores(e, "usua_pass")}
            />
          </div>
          <div className="space-y-4 my-2">
            <button className="bg-paletaAzul3 text-white rounded-full py-2 font-bold w-4/5">
              Iniciar sesión
            </button>
            <button className="bg-orange-400 text-white rounded-full py-2 font-bold w-4/5">
              Iniciar con correo institucional
            </button>
          </div>
        </div>
      </div>
      {/*  Escritorio */}
      <div className="flex min-h-screen max-md:hidden">
        <div className="w-2/3 -z-10">
          <img
            src={loginCamanchaca}
            alt="Camanchaca"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="bg-white w-1/3 flex justify-center items-center text-center">
          <div className="bg-gray-100 p-8 rounded shadow-md w-3/5 space-y-8 bg-opacity-90">
            <h1 className="font-bold px-14">Login - Camanchaca</h1>
            <div className=" my-1 w-full space-y-3">
              <input
                type="email"
                className="border rounded-md px-4 py-2 focus:outline-none font-bold w-full bg-gray-100 focus:bg-white"
                name="correo"
                placeholder="Correo*"
                onChange={(e) => actualizarValores(e, "usua_correo")}
              />
              <input
                type="password"
                className="border rounded-md px-4 py-2 focus:outline-none font-bold w-full bg-gray-100 focus:bg-white"
                name="correo"
                placeholder="Contraseña*"
                onChange={(e) => actualizarValores(e, "usua_pass")}
              />
            </div>
            <div className="space-y-4 my-2">
              <button
                className="bg-paletaAzul3  text-white rounded-full py-2 font-bold w-4/5"
                onClick={handleFiltro}
              >
                Iniciar sesión
              </button>
              <button className="bg-orange-400  text-white rounded-full py-2 font-bold w-4/5">
                Correo institucional
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
