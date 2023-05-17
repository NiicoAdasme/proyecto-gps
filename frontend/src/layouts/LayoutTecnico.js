import React from 'react';
import NavBar from '../components/navbar/NavBar';
import '../styles/Layout/Layout.css';

const LayoutTecnico = ({children}) => {
  return (
    <>
    <NavBar/>
    <div className="layoutTecnico">
        {children}
      </div>
    </>
  )
}

export default LayoutTecnico