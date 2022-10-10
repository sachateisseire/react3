import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import './itemListContainer.css'
import { getCursos } from "../../mockAPI/mockAPI"


function ItemListContainer(props) {

  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    getCursos().then((data) => {
      setCoursesList(data);
    });
  }, []);

  return (

    <>
      <div className="container-fluid text-center" id='container-fluid-listContainer'>
        <div className="row">
          <div className="col">
          
          {coursesList.map((curso) =>{
            return <Cards img={curso.img} title={curso.title} detail={curso.detail} />
          })}

          </div>
          </div>
        </div>
    </>
  )
}

export default ItemListContainer