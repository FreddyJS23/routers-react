import React from 'react'
import { useLocation, useNavigate, useNavigation, useParams, useSearchParams } from 'react-router-dom'

const Productos = () => {
 
    //searchParams funciona como el state,
    //searchParams se utiliza para obtener las variables de la url
let [searchParams, setSearchParams]=useSearchParams()
//useNavigate es un hook de router que permite la navegacion con programcion
let navigate=useNavigate();

//useLocation es un objeto que trae datos de la ubicacion actual
//se destrucura search ya que esa clave trae la parte de la url que viene con las variable o lo que viene despues de ?
let {search}=useLocation()

let LIMIT=20

//|| es un operador cortocirucuito "o" osea si no esta definido la variable asignale 1
//Se Indica al get de searcParams el nombre de la variable de la url
let start= parseInt(searchParams.get("inicio")) || 1
let end=parseInt(searchParams.get("fin")) || LIMIT

//manejo de boton asignando un nuevo valo a search
let handleNext=()=>{
    navigate({search:`?inicio=${start + LIMIT}&fin=${end + LIMIT}`})
console.log(searchParams)

}
let handlePrev=()=>{

    navigate({search:`?inicio=${start - LIMIT}&fin=${end - LIMIT}`})


}

 return (
    <div>Productos
        
     
    <p>Mostrando productos del <b>{start}</b> al <b>{end}</b></p>
    <button onClick={handleNext}>Siguente</button>
    {start > 1 ? <button onClick={handlePrev}>Atras</button> : "" }
    </div>

   
  )
}

export default Productos