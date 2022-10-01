import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { ComponenteNombre } from "./ComponenteNombre/ComponenteNombre";
import { ItemListContainer } from "./ComponenteListContainer/ItemListContainer";
const App = () => {
  const Mensaje = ".....Piezas únicas hechas con el corazón"
  return (
    <>
    <NavBar>
      <ComponenteNombre />
      </NavBar>
    <ItemListContainer gretting ={Mensaje}/>
    </>
      )
}

export default App