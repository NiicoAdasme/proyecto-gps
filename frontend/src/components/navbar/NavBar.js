import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../commons/images/logoCamanchaca.png";
import "./NavBar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SegmentIcon from "@mui/icons-material/Segment";


const NavBar = ({ options }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="shadow-md w-full top-0 left-0">
        <div className="md:flex md:items-center md:justify-between py-4 md:px-10 px-7 bg-gradient-to-r from-paletaAzul3 to-paletaAzul1 transform">
          <div className="flex items-center place-content-between">
            <Link key={1} to="/">
              <img
                className="logoCamanchaca"
                src={logo}
                alt="logo camanchaca"
              />
            </Link>
            <button onClick={handleVisible} className="md:hidden">
              <SegmentIcon
                sx={{ fontSize: "64px" }}
                className="text-white"
                fontSize="large"
              />
            </button>
          </div>
          {isVisible ? (
            options.map((link, index) => (
              <li key={index} className="text-xl my-7 list-none md:hidden">
                <Link
                  key={index}
                  to={link.link}
                  className="text-white font-bold"
                >
                  {link.name}
                </Link>
              </li>
            ))
          ) : (
            <></>
          )}
          {isVisible ? (
            <li className="text-xl my-7 list-none md:hidden">
              <Link to="/miPerfil" className="text-white font-bold">
                Perfil
              </Link>
            </li>
          ) : (
            <></>
          )}

          <ul
            className="max-md:hidden md:flex md:items-center md:pb-0 pb-12 absolute md:static 
          transform md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0
          pl-9 transition-all duration-500 ease-in
          "
          >
            {options.map((link, index) => (
              <li key={index} className="md:ml-8 text-xl md:my-0 my-7">
                <Link
                  key={index}
                  to={link.link}
                  className="text-gray-800 font-bold hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="max-md:hidden ">
            <Link to="/miPerfil">
              <AccountCircleIcon
                sx={{ fontSize: "64px" }}
                className="text-white"
                fontSize="large"
              />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
