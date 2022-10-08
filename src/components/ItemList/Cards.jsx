import React from "react";
import './cards.css'

function Cards() {
    return (
       <>
          <div className="card text-white bg-dark mb-3" id="card-id">
            <div className="card-body">
            <h5 className="card-title">React JS</h5>
              <p className="card-text">Aprende a utilizar esta gran herramienta de desarrollo Front End</p>
              <a href="#" className="btn btn-primary">Comprar</a>
            </div>
            </div>
       </>
    )
}

export default Cards