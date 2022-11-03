import React, { useState , createContext } from 'react'
import { useEffect } from 'react';

export const Context = createContext ();
// console.log(Context);
export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState ([]);
  const [ qty , setQty] = useState (0);
  const [total , setTotal] = useState (0);



const addItem =(producto,cantidad) =>{
  console.log (producto);
console.log("agrega ${cantidad} del producto ${producto}");
}
const deleteItem = (id) => {
setCart (cart.filter (producto => producto.id !== id))

}
useEffect(() =>{
 const cantidad = 0 ;
 const totalCosto = 0 ;
 cart.forEach(producto => {
  cantidad += producto.cantidad;
  totalCosto += (producto.precio * producto.cantidad);
 });
 setQty(cantidad);
 setTotal(totalCosto);
},[cart])


const isInCart = (id) => cart.some (producto => producto.id === id)

const clear = () => {
  setCart([]);
  setQty(0);
  setTotal(0);
}




return <Context.Provider value={{ cart, qty , total , addItem , deleteItem , clear }}>{children}</Context.Provider>;
    
    
  
}
