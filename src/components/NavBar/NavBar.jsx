import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
    return (

        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Odyssey</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Carreras</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Cursos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">FAQ's</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    <i className="fa-duotone fa-cart-shopping"></i>
                </ul>
                <CartWidget/>
                </div>
            </div>
        </nav>

    )
  }
  
  export default NavBar

