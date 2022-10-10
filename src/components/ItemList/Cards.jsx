import React from "react";
import './cards.css'
import { useState } from "react";


function Cards(props) {


  const [colorBtn, setColorBtn] = useState({
    backgroundColor: "",
  });

  function handleClick(){
    setColorBtn({ backgroundColor: "#64a3f4" });
  }

    return (
       <>
          <div className="card text-white bg-dark mb-3" id="card-id">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <img src={props.img} alt="" class="card-img-top"/>
              <p className="card-text">{props.detail}</p>

              <button onClick={handleClick} href="#" className="btn btn-primary" style={colorBtn}>Ver detalle</button>


            </div>
          </div>
       </>
    )
}

export default Cards