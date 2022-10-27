import React from "react"
import logo from "../../assets/logo.jpg"
import {ComponenteCartWidget} from '../ComponenteCartWidget'
import { styles } from "./NavBar.Style"
import {Link , NavLink} from "react-router-dom"

const NavBar = ({ gretting ,children })=> {

const categorias  = [
  {nombre:"desayuno" , id: 0 , ruta :"/category/desayuno" }, ,
  {nombre:"vajilla" , id: 1 , ruta :"/category/vajilla" },
  {nombre:"te" , id: 2 , ruta :"/category/te" },
  {nombre:"jardín" , id: 3 , ruta :"/category/jardín"},
];

  return (
    <header style= {styles.container}>
     <Link  to="/">
       <img style= {styles.img} src={logo} alt="tienda online" />
    </Link>
      <h1>Cerámica del Corazón</h1>
      {children}  
     <nav>
                {
                 categorias.map((categoria) => {
                 return <NavLink key = {categoria.id} style={styles.categorias} to={categoria.ruta}>{categoria.nombre}</NavLink>
                 })
                }
     </nav>
  <Link to="/cart">
  <ComponenteCartWidget/>
  </Link>
  
    </header>

    
  )
}

export default NavBar


 