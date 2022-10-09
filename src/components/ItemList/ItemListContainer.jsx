import React from 'react'
import Cards from './Cards'
import './itemListContainer.css'

function ItemListContainer(props) {
  return (
    <>
      <div className="container-fluid text-center" id='container-fluid-listContainer'>
        <div className="row">
        <div className="col">
          <Cards title="React JS" detail="Aprende a utilizar una de las librerías más importantes de JavaScript "/>
          <Cards title="Desarrollo web" detail="Aprende a dominar HTML y CSS para dar tus primeros pasos como desarrollador web"/>
          <Cards title="JavaScript" detail="Aprende a utilizar uno de los lenguajes mas importantes en desarrollo web"/>
          <Cards title="Programación Backend" detail="Complementa tu aprendizaje en el front end con las principales herramientas del Back"/>
          </div>
        </div>
        </div>
    </>
  )
}

export default ItemListContainer