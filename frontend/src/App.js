import React, { useState } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import { NavBar } from './components'
import IncidenciasTecnico from './page/Tecnico/Incidencias'
import './GlobalCSS.css'
import TareasTecnico from './page/Tecnico/Tareas/TareasTecnico'
import useLoading from './queries/Loading/useLoading'
import LoadingMask from './queries/Loading/LoadingMask'
import Login from './page/Login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CalendarScreen } from './page/Tecnico/calendar/CalendarScreen'

function App() {
  const LinkTecnico = [
    { name: 'Incidencias', link: '/incidencias' },
    { name: 'Tareas', link: '/tareas' },
    { name: 'Calendario', link: '/calendario' },
  ]

  const [isLogged, setIsLogged] = useState(true);

  const loading = useLoading().data;

  const router = createBrowserRouter(
    createRoutesFromElements(<Route path='login' element={<Login />} />)
  )

  const routerLoged = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavBar options={LinkTecnico} />}>
        <Route path='incidencias' element={<IncidenciasTecnico />} />
        <Route path='tareas' element={<TareasTecnico />} />
        <Route path='miPerfil' element={<></>} />
        <Route path='calendario' element={<CalendarScreen/>} />
      </Route>
    )
  )

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
  )
}

export default App;
