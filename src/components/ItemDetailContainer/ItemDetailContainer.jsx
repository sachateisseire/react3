import React, { useState, useEffect } from 'react'
import { getUnCurso } from "../../mockAPI/mockAPI"
import Cards from '../ItemList/Cards';
import { useParams } from "react-router-dom"


function ItemDetailContainer(props) {

  const [course, setCourse] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUnCurso(id).then((data) => {
      setCourse(data);
    });
  }, [id]);

  return (

    <>
          <div className="container-fluid text-center" id='container-fluid-listContainer'>
        <div className="row">
          <div className='col'>
        <Cards title={course.title} img={course.img} detailExt={course.detailExt}/>
        </div>
            </div>
            </div>
            
    </>
  )
}

export default ItemDetailContainer