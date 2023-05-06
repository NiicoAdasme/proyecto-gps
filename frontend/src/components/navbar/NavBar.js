import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../commons/images/logoCamanchaca.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="contenedorLogo">
            <Link to="/">
              <img src={logo} alt="Logo Camanchaca" />
            </Link>
          </li>
          <li className="contenedorTexto navbar-brand">
            <Link to="/incidencias">Incidencia</Link>
          </li>
          <li className="contenedorTexto navbar-brand">
            <Link to="/mp">Manuel puto</Link>
          </li>
          <li className="contenedorPerfil">
            <Link to="miPerfil">Perfil</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
