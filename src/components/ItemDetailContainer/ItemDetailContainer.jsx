import React, { useState, useEffect } from 'react'
import { getUnCurso } from "../../mockAPI/mockAPI"
import Cards from '../ItemList/Cards';


function ItemDetailContainer(props) {

  const [course, setCourse] = useState([]);

  useEffect(() => {
    getUnCurso().then((data) => {
      setCourse(data);
    });
  }, []);

  return (

    <>
          <div className="container-fluid text-center" id='container-fluid-listContainer'>
        <div className="row">
          <div className='col'>
        <Cards title={course.title} img={course.img} detail={course.detail}/>
        </div>
            </div>
            </div>
            
    </>
  )
}

export default ItemDetailContainer