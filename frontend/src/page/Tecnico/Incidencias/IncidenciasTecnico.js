import React from 'react'
import { CustomTable } from '../../../components'

const IncidenciasTecnico = () => {
  const columns = ["id","nombre"];


  return (
    <>
      <CustomTable columnas={columns}/>
    </>
  )
}

export default IncidenciasTecnico