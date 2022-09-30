import React from "react"
import './NavBar.css'
import logo from "../../assets/logo.jpg"
import {ComponenteCartWidget} from '../ComponenteCartWidget'
function NavBar({ gretting ,children }) {
  return (
    <header className="header">
      <img src={logo} alt="tienda online" />
      <h1>Cerámica del Corazón</h1>
      {children}
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">INICIO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Vajilla</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Café y te</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Como comprar</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    <ComponenteCartWidget/>
    </header>
    
  )
}

export default NavBar

