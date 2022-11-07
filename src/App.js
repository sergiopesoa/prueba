import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { ComponenteNombre } from "./Components/ComponenteNombre/ComponenteNombre";
import { ItemListContainer } from "./Components/ComponenteListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ComponenteDetail/ItemDetailContainer";
import { Cart } from "./Components/componenteCartView/Cart";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { CustomProvider } from "./Context/CustomProvider";
const App = () => {
  const Mensaje = ".....Piezas únicas hechas con el corazón"

  
  return (
    <>
    <BrowserRouter>
    <CustomProvider>
      <NavBar/>
      <ComponenteNombre />
      <Routes>
      <Route path="/" element={<ItemListContainer gretting ={Mensaje}/>}/>
      <Route path="/category/:categoriaId" element={<ItemListContainer gretting ={Mensaje}/>}/>
      <Route path="/productos/:id" element= {<ItemDetailContainer/>}/>
      <Route path="/cart" element= {<Cart/>}/>
      </Routes>
      </CustomProvider>
    </BrowserRouter>


    
    
    </>
      )
}

export default App
