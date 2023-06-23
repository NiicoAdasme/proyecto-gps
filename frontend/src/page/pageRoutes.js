import { createBrowserRouter,Route, createRoutesFromElements } from "react-router-dom"
import { NavBar } from '../components'
import {Login,TareasTecnico,IncidenciasTecnico,EstadisticasMostrar} from "./index";


const LinkTecnico = [
  { name: 'Incidencias', link: '/incidencias' },
  { name: 'Tareas', link: '/tareas' },
  { name: 'Estadísticas', link: '/Estadisticas' }
]

const routerLoged = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavBar options={LinkTecnico} />}>
        <Route path='incidencias' element={<IncidenciasTecnico />} />
        <Route path='tareas' element={<TareasTecnico />} />
        <Route path='Estadisticas' element={<EstadisticasMostrar/>} />
        <Route path='miPerfil' element={<></>} />
      </Route>
    )
  )

  const router = createBrowserRouter(
    createRoutesFromElements(<Route path='login' element={<Login />} />)
  )

export {routerLoged,router};