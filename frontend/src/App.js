import React from 'react'
import {
  RouterProvider
} from 'react-router-dom'
import './GlobalCSS.css'
import useLoading from './queries/Loading/useLoading'
import LoadingMask from './queries/Loading/LoadingMask'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { routerLoged, router } from './page/pageRoutes';
import { useSelector } from 'react-redux'

function App() {

  const isLogged = useSelector((state) => state.login);
  const loading = useLoading().data;

  console.log(isLogged.isLogged);

  return (
    <>
      <ToastContainer />
      <>{loading && loading.isLoading ? <LoadingMask /> : <></>}</>
      {isLogged.isLogged ? (
        <RouterProvider router={routerLoged} />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  )
}

export default App;
