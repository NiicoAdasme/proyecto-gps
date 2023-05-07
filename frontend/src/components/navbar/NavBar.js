import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../commons/images/logoCamanchaca.png";
import "./NavBar.css";

const NavBar = ({children}) => {
  const LinkTecnico = [
    { name: "Incidencias", link: "/incidencias" },
    { name: "Tareas", link: "/tareas" },
  ];
  return (
    <>
      <div className="shadow-md w-full top-0 left-0">
        <div className="md:flex md:items-center justify-between py-4 md:px-10 px-7 bg-gradient-to-r from-paletaAzul1 to-paletaAzul2 transform">
          <div className="flex items-center">
            <Link key={1} to="/">
              <img
                className="logoCamanchaca"
                src={logo}
                alt="logo camanchaca"
              />
            </Link>
          </div>
          <ul
            className="md:flex md:items-center md:pb-0 pb-12 absolute md:static 
          transform md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0
           pl-9 transition-all duration-500 ease-in
           "
          >
            {LinkTecnico.map((link) => (
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <Link
                 key={2}
                  to={link.link}
                  className="text-gray-800 font-bold hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="max-md:hidden ">perfil</div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
