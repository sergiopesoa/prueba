import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { ComponenteNombre } from "./Components/ComponenteNombre/ComponenteNombre";
import { ItemListContainer } from "./Components/ComponenteListContainer/ItemListContainer";
import {ComponenteContador} from "./Components/ComponenteContador/ItemCount";
import { ItemDetailContainer } from "./Components/ComponenteDetail/ItemDetailContainer";
import { Cart } from "./Components/CartView/Cart";
import { BrowserRouter, Routes , Route } from "react-router-dom";

const App = () => {
  const Mensaje = ".....Piezas únicas hechas con el corazón"

  
  return (
    <>
    <BrowserRouter>
    <NavBar>
    <ComponenteNombre />
      <Routes>
      <Route path="/" element={<ItemListContainer gretting ={Mensaje}/>}/>
      <Route path="/categoria/:idCategoria" element={<ItemListContainer gretting ={Mensaje}/>}/>
      <Route path="/producto/:id" element= {<ItemDetailContainer/>}/>
      <Route path="/cart" element= {<Cart/>}/>
      </Routes>
    </NavBar>
    
    
    </BrowserRouter>


    
    
    </>
      )
}

export default App
