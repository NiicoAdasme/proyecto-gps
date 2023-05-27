import { createBrowserRouter,Route, createRoutesFromElements, } from "react-router-dom"
import { NavBar } from '../components'
import {Login,TareasTecnico,IncidenciasTecnico} from "./index";


const LinkTecnico = [
  { name: 'Incidencias', link: '/incidencias' },
  { name: 'Tareas', link: '/tareas' }
]

const routerLoged = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavBar options={LinkTecnico} />}>
        <Route path='incidencias' element={<IncidenciasTecnico />} />
        <Route path='tareas' element={<TareasTecnico />} />
        <Route path='miPerfil' element={<></>} />
      </Route>
    )
  )

  const router = createBrowserRouter(
    createRoutesFromElements(<Route path='login' element={<Login />} />)
  )

export {routerLoged,router};