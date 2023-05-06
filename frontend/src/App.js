import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import IncidenciasTecnico from "./page/Tecnico/IncidenciasTecnico";
import "./GlobalCSS.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/incidencias" element={<IncidenciasTecnico />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
