import React from 'react'
import './navBar.css'
import { Link } from "react-router-dom"

function NavBar() {
    return (

        <nav className="navbar navbar-dark navbar-expand-lg bg-dark" id='navBar-id'>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> <strong>Odyssey</strong> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Carreras</a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#">Cursos</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">FAQ's</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    
                </ul>
                <button className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg></button>

                </div>
            </div>
        </nav>

    )
  }
  
  export default NavBar

