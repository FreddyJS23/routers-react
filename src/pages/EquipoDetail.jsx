import React from 'react'
import { useParams } from 'react-router-dom'

//componente equipo

const EquipoDetail = () => {
    const { details } = useParams();
  
    return (
      <div>
        <h1></h1>
        <h3>Detalles del equipo</h3>
        <p></p>
      </div>
    );
  };

export default EquipoDetail