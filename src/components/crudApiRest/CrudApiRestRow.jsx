import React from 'react'

export const CrudApiRestRow = ({element, setDataEdit,deleteData}) => {

  let {id,name,constellation}=element 
  return (
  
  <tr>
    <td>{name}</td>
    <td>{constellation}</td>
    <td><button onClick={()=>setDataEdit(element)}>Editar</button> <button onClick={()=>deleteData(id)}>Eliminar</button> </td>
  </tr>
  
  )
}
