import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { ComponenteNombre } from "./Components/ComponenteNombre";
import { ItemListContainer } from "./Components/ItemListContainer";
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