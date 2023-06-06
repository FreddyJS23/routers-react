import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'

const Equipos = () => {
    //para obtener varibles de una url se usa useParams de react-router
    //El nombre de la variable tiene que ser igual a la que se le asigna a path al renderizar el componente
    const { equipo } = useParams();
  
    return (
      <div>
        <h1>Equipo</h1>
        {equipo}
        <Link to="Details">Detalles del equipo</Link>
        {/*Outlet es como un hueco que indica donde tiene que renderizar el componente de la ruta anidada */}
        <Outlet />
      </div>
    );
  };

export default Equipos