import React, { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { NavBar } from "./components";
import IncidenciasTecnico from "./page/Tecnico/Incidencias";
import "./GlobalCSS.css";
import TareasTecnico from "./page/Tecnico/Tareas/TareasTecnico";
import useLoading from "./queries/Loading/useLoading";
import LoadingMask from "./queries/Loading/LoadingMask";
import Login from "./page/Login/Login";
import { ToastContainer } from "react-toastify";

function App() {
  const LinkTecnico = [
    { name: "Incidencias", link: "/incidencias" },
    { name: "Tareas", link: "/tareas" },
  ];

  const [isLogged, setIsLogged] = useState(false);

  const loading = useLoading().data;
  console.log(loading);

  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="login" element={<Login />} />)
  );

  const routerLoged = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar options={LinkTecnico} />}>
        <Route path="incidencias" element={<IncidenciasTecnico />} />
        <Route path="tareas" element={<TareasTecnico />} />
        <Route path="miPerfil" element={<></>} />
      </Route>
    )
  );

  return (
    <>
      <ToastContainer />
      <>{loading && loading.isLoading ? <LoadingMask /> : <></>}</>
      {isLogged ? (
        <RouterProvider router={routerLoged} />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
