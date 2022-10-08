import React from 'react'
import Cards from './Cards'
import './itemListContainer.css'

function ItemListContainer(props) {
  return (
    <>
      <div className="container-fluid text-center" id='container-fluid-listContainer'>
        <div className="row">
        <div className="col">
          <Cards />
          </div>
          <div className="col">
          <Cards />
          </div>
          <div className="col">
          <Cards />
          </div>
        </div>
        </div>
    </>
  )
}

export default ItemListContainer