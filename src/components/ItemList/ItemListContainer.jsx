import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import './itemListContainer.css'
import { getCursos, getCursosByCategory } from "../../mockAPI/mockAPI"
import { useParams } from "react-router-dom"


function ItemListContainer(props) {

  const [coursesList, setCoursesList] = useState([]);
  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    if (categoryID === undefined){
      getCursos().then((data) => {
      setCoursesList(data);
    });
  } else {
    getCursosByCategory(categoryID).then((data) => {
      setCoursesList(data);
    })
  }
  }, [categoryID]);

  return (

    <>
      <div className="container-fluid text-center" id='container-fluid-listContainer'>
        <div className="row">
          <div className='col'>

          
          {coursesList.map((curso) =>{
            return <Cards 
                      key={curso.id}
                      id={curso.id}
                      img={curso.img}
                      title={curso.title}
                      detail={curso.detail}
                      category={curso.category}/>
          })}

          </div>
          </div>
          </div>

    </>
  )
}

export default ItemListContainer