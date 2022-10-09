import React from "react";
import './cards.css'

function Cards(props) {

    return (
       <>
          <div className="card text-white bg-dark mb-3" id="card-id">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <img src={props.img} alt="" class="card-img-top"/>
              <p className="card-text">{props.detail}</p>
              <a href="#" className="btn btn-primary">Ver detalle</a>
            </div>
          </div>
       </>
    )
}

export default Cards