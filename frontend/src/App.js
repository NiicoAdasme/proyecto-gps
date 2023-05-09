import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Router,
} from "react-router-dom";
import { NavBar } from "./components";
import IncidenciasTecnico from "./page/Tecnico/Incidencias";
import "./GlobalCSS.css";
import TareasTecnico from "./page/Tecnico/Tareas/TareasTecnico";
import { Bars } from "react-loader-spinner";
import useLoading from "./queries/Loading/useLoading";
import LoadingMask from "./queries/Loading/LoadingMask";

function App() {
  const loading = useLoading().data;
  console.log(loading);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route path="incidencias" element={<IncidenciasTecnico />} />
        <Route path="tareas" element={<TareasTecnico />} />
      </Route>
    )
  );

  return (
    <>
      <>
        {loading && loading.isLoading ? (
         <LoadingMask />
        ) : (
          <></>
        )}
      </>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
