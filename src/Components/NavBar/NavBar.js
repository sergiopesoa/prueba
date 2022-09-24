import React from "react"
import Navbar from "react-bootstrap/Navbar";
import './NavBar.css'
import logo from "../../assets/logo.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
    return (
        <header>
            <img src={logo} alt="tienda online"/>
            <h1> Tienda Online</h1>
            
                <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Como comprar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Vajilla</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cocina</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Café y Te
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Tazas</a></li>
            <li><a class="dropdown-item" href="#">Cafeteras y Teteras</a></li>
            <li><a class="dropdown-item" href="#">juegos completos</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

 
</nav>
                
                
                
            
        




            
            <ShoppingCartIcon color="primary" fontSize="large"/>



        </header>
    )
}
export default Header
