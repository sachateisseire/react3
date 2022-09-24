import React from 'react'
import itemListContainer from './itemListContainer.css'

function ItemListContainer(props) {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col">
            <p>{props.greeting}</p>
          </div>
          <div className="col">
            <p>Muy pronto los mejores cursos y carreras</p>
          </div>
          <div className="col">
            <p>Para seguir tu aprendizaje como desarrollador</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemListContainer